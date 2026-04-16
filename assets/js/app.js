/**
 * BJJ Jeopardy — app.js
 * Version: 1.0
 *
 * Game logic: state management, board generation, modal flows,
 * Daily Double, Final Jeopardy, scoring, and confetti.
 *
 * Depends on: game_data.js (must be loaded first via <script> tag)
 * No external dependencies. Vanilla JS only. ES5/ES6 compatible.
 * Designed for file:// and static hosting (no fetch/require).
 */

'use strict';

/* ═══════════════════════════════════════════════════════════
   CONSTANTS
═══════════════════════════════════════════════════════════ */

const VALUES = [200, 400, 600, 800, 1000];
const DAILY_DOUBLE_COUNT = 2;           // DDs per board
const DD_MIN_VALUE = 400;              // Don't place DD on 200 row
const MAX_ROUNDS = 10;
const FJ_REVEAL_DELAY_MS = 400;        // Brief pause before showing FJ answer

/* ═══════════════════════════════════════════════════════════
   GAME STATE
   All mutable state lives here. Rebuilt on new game.
═══════════════════════════════════════════════════════════ */

let state = buildInitialState();

function buildInitialState() {
  return {
    // Team info
    teamNames: ['Team 1', 'Team 2'],
    scores: [0, 0],

    // Round tracking
    round: 0,                        // 0 = not started; increments on each board
    categoryUseCount: {},            // { catId: number } — how many times a category was dealt
    usedFinalJeopardyIndex: 0,       // which FJ prompt is next

    // Current board — array of 5 column objects
    board: null,

    // UI phase
    phase: 'title',                  // 'title' | 'game' | 'over'

    // Active clue tracking
    activeClue: null,                // { colIdx, rowIdx, clue, isDailyDouble }
    answerRevealed: false,

    // Daily Double sub-state
    dd: {
      teamIdx: 0,
      wager: 0,
      clueVisible: false,
    },

    // Final Jeopardy sub-state
    fj: {
      phase: 'setup',               // 'setup' | 'wager' | 'clue' | 'answer' | 'score'
      prompt: null,
      wagers: [0, 0],
      answerVisible: false,
    }
  };
}

/* ═══════════════════════════════════════════════════════════
   BOARD GENERATION
═══════════════════════════════════════════════════════════ */

/**
 * Pick 5 categories from those that still have unused questions.
 * Tries to cycle through all 12 categories before repeating.
 */
function selectCategories() {
  const cats = BJJ_QUESTION_BANK.categories;
  // Rank by how many times they've been used (ascending), then shuffle ties
  const withCounts = cats.map(cat => ({
    cat,
    used: state.categoryUseCount[cat.id] || 0,
    usable: (state.categoryUseCount[cat.id] || 0) < 5  // max 5 uses per cat
  }));

  const available = withCounts.filter(c => c.usable);
  if (available.length < 5) return null;  // game pool exhausted

  // Sort by use count, shuffle within ties for variety
  available.sort((a, b) => {
    if (a.used !== b.used) return a.used - b.used;
    return Math.random() - 0.5;
  });

  return available.slice(0, 5).map(c => c.cat);
}

/**
 * Build the 5×5 board for a new round.
 * Returns an array of 5 column objects, each with 5 clue objects.
 */
function generateBoard() {
  const categories = selectCategories();
  if (!categories) return null;

  const board = categories.map(cat => {
    const useIdx = state.categoryUseCount[cat.id] || 0;

    // For each value tier, grab the question at position `useIdx`
    const clues = VALUES.map(val => {
      const tierQs = cat.questions.filter(q => q.value === val);
      const q = tierQs[useIdx] || tierQs[0];   // fallback to first if count mismatches
      return {
        id: q.id,
        value: q.value,
        clue: q.clue,
        answer: q.answer,
        used: false,
        isDailyDouble: false
      };
    });

    // Increment use counter
    state.categoryUseCount[cat.id] = useIdx + 1;

    return {
      id: cat.id,
      name: cat.name,
      clues
    };
  });

  // Assign Daily Doubles (not on 200 row)
  assignDailyDoubles(board);

  return board;
}

/**
 * Randomly mark DAILY_DOUBLE_COUNT clues on non-200 rows.
 */
function assignDailyDoubles(board) {
  const candidates = [];
  board.forEach((col, ci) => {
    col.clues.forEach((clue, ri) => {
      if (clue.value >= DD_MIN_VALUE) candidates.push({ ci, ri });
    });
  });

  // Shuffle and pick
  shuffleArray(candidates);
  const picks = candidates.slice(0, DAILY_DOUBLE_COUNT);
  picks.forEach(({ ci, ri }) => {
    board[ci].clues[ri].isDailyDouble = true;
  });
}

/* ═══════════════════════════════════════════════════════════
   UTILITY HELPERS
═══════════════════════════════════════════════════════════ */

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

function countRemainingClues() {
  if (!state.board) return 0;
  let count = 0;
  state.board.forEach(col => col.clues.forEach(c => { if (!c.used) count++; }));
  return count;
}

/* ═══════════════════════════════════════════════════════════
   DOM REFERENCES (populated on DOMContentLoaded)
═══════════════════════════════════════════════════════════ */

const $ = id => document.getElementById(id);

let dom = {};  // filled in init()

/* ═══════════════════════════════════════════════════════════
   RENDERING
═══════════════════════════════════════════════════════════ */

function renderBoard() {
  if (!state.board) return;

  const boardEl = dom.board;
  boardEl.innerHTML = '';

  // Header row — category names
  const headerRow = document.createElement('div');
  headerRow.className = 'board-row board-headers';
  state.board.forEach(col => {
    const cell = document.createElement('div');
    cell.className = 'board-cell category-header';
    cell.textContent = col.name;
    headerRow.appendChild(cell);
  });
  boardEl.appendChild(headerRow);

  // Value rows (200 → 1000)
  VALUES.forEach((val, rowIdx) => {
    const row = document.createElement('div');
    row.className = 'board-row';

    state.board.forEach((col, colIdx) => {
      const clue = col.clues[rowIdx];
      const cell = document.createElement('div');
      cell.className = 'board-cell clue-cell';
      if (clue.used) {
        cell.classList.add('used');
        cell.textContent = '';
      } else {
        cell.textContent = '$' + val.toLocaleString();
        cell.setAttribute('tabindex', '0');
        cell.setAttribute('role', 'button');
        cell.setAttribute('aria-label', col.name + ' for ' + val);
        cell.addEventListener('click', () => handleClueClick(colIdx, rowIdx));
        cell.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClueClick(colIdx, rowIdx);
          }
        });
      }
      row.appendChild(cell);
    });

    boardEl.appendChild(row);
  });

  updateHUD();
}

function updateHUD() {
  // Scores
  dom.score0.textContent = formatScore(state.scores[0]);
  dom.score1.textContent = formatScore(state.scores[1]);
  dom.teamName0.textContent = state.teamNames[0];
  dom.teamName1.textContent = state.teamNames[1];

  // Round / remaining
  const remaining = countRemainingClues();
  dom.roundInfo.textContent = 'Round ' + state.round;
  dom.cluesLeft.textContent = remaining + ' clue' + (remaining !== 1 ? 's' : '') + ' left';

  // Next round button visibility
  const allUsed = remaining === 0;
  dom.btnNextRound.style.display = allUsed ? 'inline-flex' : 'none';
  dom.btnFinalJeopardy.style.display = 'inline-flex';
}

function formatScore(n) {
  const abs = Math.abs(n);
  const str = abs.toLocaleString();
  return (n < 0 ? '-$' : '$') + str;
}

/* ═══════════════════════════════════════════════════════════
   CLUE CLICK HANDLER
═══════════════════════════════════════════════════════════ */

function handleClueClick(colIdx, rowIdx) {
  const clue = state.board[colIdx].clues[rowIdx];
  if (clue.used) return;

  state.activeClue = { colIdx, rowIdx, clue };
  state.answerRevealed = false;

  if (clue.isDailyDouble) {
    openDailyDoubleModal();
  } else {
    openClueModal();
  }
}

/* ═══════════════════════════════════════════════════════════
   CLUE MODAL
═══════════════════════════════════════════════════════════ */

function openClueModal() {
  const { clue } = state.activeClue;
  const col = state.board[state.activeClue.colIdx];

  dom.clueCategory.textContent = col.name;
  dom.clueValue.textContent = '$' + clue.value.toLocaleString();
  dom.clueText.textContent = clue.clue;
  dom.clueAnswer.textContent = clue.answer;
  dom.clueAnswer.classList.add('hidden');
  dom.btnRevealAnswer.style.display = 'inline-flex';
  dom.btnRevealAnswer.disabled = false;

  // Score buttons are hidden until the answer is revealed
  dom.clueScoreButtons.innerHTML = '';

  // Footer dismiss button — pre-reveal label
  dom.btnCloseClue.textContent = 'Skip — no score';

  state.answerRevealed = false;
  showModal('modal-clue');
}

function renderScoreButtons(container, value) {
  container.innerHTML = '';

  // One row per team: correct (+) and wrong (-) buttons
  state.teamNames.forEach((name, ti) => {
    const row = document.createElement('div');
    row.className = 'score-btn-row';

    const label = document.createElement('span');
    label.className = 'score-team-label';
    label.textContent = name;
    row.appendChild(label);

    const btnPlus = document.createElement('button');
    btnPlus.className = 'btn btn-success score-btn';
    btnPlus.textContent = '✓ +$' + value.toLocaleString();
    btnPlus.addEventListener('click', () => {
      adjustScore(ti, value);
      markActiveClueUsed();
      closeModal('modal-clue');
    });

    const btnMinus = document.createElement('button');
    btnMinus.className = 'btn btn-danger score-btn';
    btnMinus.textContent = '✗ -$' + value.toLocaleString();
    btnMinus.addEventListener('click', () => {
      adjustScore(ti, -value);
      markActiveClueUsed();
      closeModal('modal-clue');
    });

    row.appendChild(btnPlus);
    row.appendChild(btnMinus);
    container.appendChild(row);
  });
  // "No Score" is handled by the persistent footer btn-close-clue (relabeled after reveal)
}

function markActiveClueUsed() {
  if (!state.activeClue) return;
  const { colIdx, rowIdx } = state.activeClue;
  state.board[colIdx].clues[rowIdx].used = true;
  state.activeClue = null;
  renderBoard();
}

/* ═══════════════════════════════════════════════════════════
   DAILY DOUBLE MODAL
═══════════════════════════════════════════════════════════ */

function openDailyDoubleModal() {
  const { clue } = state.activeClue;
  const col = state.board[state.activeClue.colIdx];

  // Reset DD state
  state.dd = { teamIdx: 0, wager: 0, clueVisible: false };
  state.answerRevealed = false;

  dom.ddCategory.textContent = col.name;

  // Build team selector
  dom.ddTeamSelect.innerHTML = '';
  state.teamNames.forEach((name, ti) => {
    const btn = document.createElement('button');
    btn.className = 'btn dd-team-btn' + (ti === 0 ? ' active' : '');
    btn.textContent = name;
    btn.dataset.teamIdx = ti;
    btn.addEventListener('click', () => {
      state.dd.teamIdx = ti;
      dom.ddTeamSelect.querySelectorAll('.dd-team-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateDDWagerMax();
    });
    dom.ddTeamSelect.appendChild(btn);
  });

  // Wager input
  dom.ddWagerInput.value = '';
  updateDDWagerMax();

  // Hide clue area
  dom.ddClueArea.style.display = 'none';
  dom.ddAnswerArea.style.display = 'none';
  dom.ddWagerArea.style.display = 'block';
  dom.btnDDSeeClue.style.display = 'inline-flex';
  dom.btnDDSeeClue.disabled = false;

  launchConfetti('dd');
  showModal('modal-dd');
}

function updateDDWagerMax() {
  const teamScore = state.scores[state.dd.teamIdx];
  const min = 200;
  const max = Math.max(teamScore, min);
  dom.ddWagerInput.placeholder = '200 – ' + max.toLocaleString();
  dom.ddWagerInput.max = max;
  dom.ddWagerInput.min = min;
}

function handleDDSeeClue() {
  const rawWager = parseInt(dom.ddWagerInput.value, 10);
  const teamScore = state.scores[state.dd.teamIdx];
  const min = 200;
  const max = Math.max(teamScore, min);

  if (isNaN(rawWager) || rawWager < min || rawWager > max) {
    dom.ddWagerInput.focus();
    dom.ddWagerInput.classList.add('input-error');
    setTimeout(() => dom.ddWagerInput.classList.remove('input-error'), 800);
    return;
  }

  state.dd.wager = rawWager;
  state.dd.clueVisible = true;

  const { clue } = state.activeClue;
  dom.ddClueText.textContent = clue.clue;
  dom.ddAnswer.textContent = clue.answer;
  dom.ddAnswer.classList.add('hidden');

  dom.ddWagerArea.style.display = 'none';
  dom.btnDDSeeClue.style.display = 'none';
  dom.ddClueArea.style.display = 'block';
  dom.btnDDRevealAnswer.style.display = 'inline-flex';
  dom.ddAnswerArea.style.display = 'none';
}

function handleDDRevealAnswer() {
  dom.ddAnswer.classList.remove('hidden');
  dom.ddAnswerArea.style.display = 'block';
  dom.btnDDRevealAnswer.style.display = 'none';

  // Render correct / incorrect buttons
  dom.ddScoreButtons.innerHTML = '';
  const wager = state.dd.wager;
  const teamName = state.teamNames[state.dd.teamIdx];

  const btnCorrect = document.createElement('button');
  btnCorrect.className = 'btn btn-success';
  btnCorrect.textContent = '✓ ' + teamName + ' correct (+$' + wager.toLocaleString() + ')';
  btnCorrect.addEventListener('click', () => {
    adjustScore(state.dd.teamIdx, wager);
    markActiveClueUsed();
    closeModal('modal-dd');
  });

  const btnWrong = document.createElement('button');
  btnWrong.className = 'btn btn-danger';
  btnWrong.textContent = '✗ ' + teamName + ' incorrect (-$' + wager.toLocaleString() + ')';
  btnWrong.addEventListener('click', () => {
    adjustScore(state.dd.teamIdx, -wager);
    markActiveClueUsed();
    closeModal('modal-dd');
  });

  const btnNoScore = document.createElement('button');
  btnNoScore.className = 'btn btn-ghost';
  btnNoScore.textContent = 'No Score';
  btnNoScore.addEventListener('click', () => {
    markActiveClueUsed();
    closeModal('modal-dd');
  });

  dom.ddScoreButtons.appendChild(btnCorrect);
  dom.ddScoreButtons.appendChild(btnWrong);
  dom.ddScoreButtons.appendChild(btnNoScore);
}

/* ═══════════════════════════════════════════════════════════
   FINAL JEOPARDY MODAL
═══════════════════════════════════════════════════════════ */

function openFinalJeopardyModal() {
  const fjBank = BJJ_QUESTION_BANK.finalJeopardy;
  const fjIdx = state.usedFinalJeopardyIndex % fjBank.length;
  state.fj.prompt = fjBank[fjIdx];
  state.usedFinalJeopardyIndex++;

  state.fj.phase = 'wager';
  state.fj.wagers = [0, 0];
  state.fj.answerVisible = false;

  // Show category, hide clue
  dom.fjCategory.textContent = state.fj.prompt.category;
  dom.fjClue.textContent = '';
  dom.fjAnswer.textContent = '';
  dom.fjAnswer.classList.add('hidden');

  // Build wager inputs
  dom.fjWagerArea.innerHTML = '';
  state.teamNames.forEach((name, ti) => {
    const row = document.createElement('div');
    row.className = 'fj-wager-row';

    const label = document.createElement('label');
    label.textContent = name + '\'s Wager: $';
    label.htmlFor = 'fj-wager-' + ti;

    const input = document.createElement('input');
    input.type = 'number';
    input.id = 'fj-wager-' + ti;
    input.className = 'fj-wager-input';
    input.min = 0;
    input.placeholder = '0 – ' + Math.max(state.scores[ti], 0).toLocaleString();
    input.dataset.teamIdx = ti;

    row.appendChild(label);
    row.appendChild(input);
    dom.fjWagerArea.appendChild(row);
  });

  // Show wager phase UI
  dom.fjWagerSection.style.display = 'block';
  dom.fjWagerError.textContent = '';
  dom.fjWagerError.classList.add('hidden');
  dom.fjClueSection.style.display = 'none';
  dom.fjAnswerSection.style.display = 'none';
  dom.fjScoreSection.style.display = 'none';
  dom.btnFJSeeClue.style.display = 'inline-flex';
  dom.btnFJReveal.style.display = 'none';

  launchConfetti('fj');
  showModal('modal-fj');
}

function handleFJSeeClue() {
  // Collect wagers
  const inputs = dom.fjWagerArea.querySelectorAll('.fj-wager-input');
  let valid = true;
  let errorMsg = '';

  inputs.forEach(input => {
    const raw = input.value.trim();
    const val = parseInt(raw, 10);
    const ti = parseInt(input.dataset.teamIdx, 10);
    const teamScore = state.scores[ti];
    const maxWager = Math.max(teamScore, 0);

    if (raw === '' || isNaN(val)) {
      errorMsg = 'Please enter a wager for each team (enter 0 to wager nothing).';
      input.classList.add('input-error');
      setTimeout(() => input.classList.remove('input-error'), 1000);
      valid = false;
    } else if (val < 0) {
      errorMsg = 'Wager cannot be negative. Minimum wager is $0.';
      input.classList.add('input-error');
      setTimeout(() => input.classList.remove('input-error'), 1000);
      valid = false;
    } else if (val > maxWager) {
      const name = state.teamNames[ti];
      errorMsg = name + '\'s wager ($' + val.toLocaleString() + ') exceeds their current score ($' + maxWager.toLocaleString() + '). Max wager is $' + maxWager.toLocaleString() + '.';
      input.classList.add('input-error');
      setTimeout(() => input.classList.remove('input-error'), 1000);
      valid = false;
    } else {
      state.fj.wagers[ti] = val;
    }
  });

  dom.fjWagerError.textContent = errorMsg;
  dom.fjWagerError.classList.toggle('hidden', valid);

  if (!valid) return;

  // Show clue
  dom.fjClue.textContent = state.fj.prompt.clue;
  dom.fjWagerSection.style.display = 'none';
  dom.fjClueSection.style.display = 'block';
  dom.btnFJSeeClue.style.display = 'none';
  dom.btnFJReveal.style.display = 'inline-flex';
  state.fj.phase = 'clue';
}

function handleFJReveal() {
  dom.fjAnswer.textContent = state.fj.prompt.answer;
  dom.fjAnswer.classList.remove('hidden');
  dom.fjAnswerSection.style.display = 'block';
  dom.btnFJReveal.style.display = 'none';

  // Render per-team score buttons
  dom.fjScoreSection.style.display = 'block';
  dom.fjScoreButtons.innerHTML = '';

  state.teamNames.forEach((name, ti) => {
    const wager = state.fj.wagers[ti];
    const row = document.createElement('div');
    row.className = 'score-btn-row';

    const label = document.createElement('span');
    label.className = 'score-team-label';
    label.textContent = name + ' (wagered $' + wager.toLocaleString() + ')';
    row.appendChild(label);

    const btnPlus = document.createElement('button');
    btnPlus.className = 'btn btn-success score-btn';
    btnPlus.textContent = '✓ Correct';
    btnPlus.addEventListener('click', () => {
      adjustScore(ti, wager);
      btnPlus.disabled = true;
      btnMinus.disabled = true;
    });

    const btnMinus = document.createElement('button');
    btnMinus.className = 'btn btn-danger score-btn';
    btnMinus.textContent = '✗ Wrong';
    btnMinus.addEventListener('click', () => {
      adjustScore(ti, -wager);
      btnPlus.disabled = true;
      btnMinus.disabled = true;
    });

    row.appendChild(btnPlus);
    row.appendChild(btnMinus);
    dom.fjScoreButtons.appendChild(row);
  });

  // Done button
  const btnDone = document.createElement('button');
  btnDone.className = 'btn btn-primary fj-done-btn';
  btnDone.textContent = 'Done — Back to Board';
  btnDone.addEventListener('click', () => {
    closeModal('modal-fj');
    renderBoard();
  });
  dom.fjScoreButtons.appendChild(btnDone);

  launchConfetti('fj');
  state.fj.phase = 'answer';
}

/* ═══════════════════════════════════════════════════════════
   SCORE MANAGEMENT
═══════════════════════════════════════════════════════════ */

function adjustScore(teamIdx, delta) {
  state.scores[teamIdx] += delta;
  updateHUD();
}

function handleManualScoreChange(teamIdx, delta) {
  adjustScore(teamIdx, delta);
}

/* ═══════════════════════════════════════════════════════════
   MODAL HELPERS
═══════════════════════════════════════════════════════════ */

function showModal(modalId) {
  // Close any open modal first
  document.querySelectorAll('.modal').forEach(m => m.classList.remove('open'));
  const modal = $(modalId);
  if (modal) {
    modal.classList.add('open');
    // Focus first interactive element
    setTimeout(() => {
      const first = modal.querySelector('button, input, [tabindex]');
      if (first) first.focus();
    }, 100);
  }
  document.body.classList.add('modal-open');
}

function closeModal(modalId) {
  const modal = $(modalId);
  if (modal) modal.classList.remove('open');
  document.body.classList.remove('modal-open');

  // If closing clue modal without scoring, still mark used
  if (modalId === 'modal-clue' && state.activeClue) {
    // Mark used — if user dismissed without scoring, still remove from board
    markActiveClueUsed();
  }
}

/* ═══════════════════════════════════════════════════════════
   TEAM NAME EDITING
═══════════════════════════════════════════════════════════ */

function makeNameEditable(idx) {
  const el = idx === 0 ? dom.teamName0 : dom.teamName1;
  el.contentEditable = true;
  el.focus();
  // Select all text
  const range = document.createRange();
  range.selectNodeContents(el);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

function finalizeNameEdit(idx) {
  const el = idx === 0 ? dom.teamName0 : dom.teamName1;
  el.contentEditable = false;
  const newName = el.textContent.trim() || ('Team ' + (idx + 1));
  state.teamNames[idx] = newName;
  el.textContent = newName;
}

/* ═══════════════════════════════════════════════════════════
   GAME FLOW — START / NEXT ROUND / RESET
═══════════════════════════════════════════════════════════ */

function openHTPModal() {
  showModal('modal-htp');
}

function closeHTPModal() {
  const modal = $('modal-htp');
  if (modal) modal.classList.remove('open');
  document.body.classList.remove('modal-open');
}

function startGame() {
  state = buildInitialState();
  dom.titleScreen.style.display = 'none';
  dom.gameScreen.style.display = 'flex';

  loadNextRound();
  updateHUD();
}

function loadNextRound() {
  state.round++;
  const newBoard = generateBoard();
  if (!newBoard) {
    showGameOver();
    return;
  }
  state.board = newBoard;
  renderBoard();
}

function resetGame() {
  if (!confirm('Reset everything? All scores and progress will be cleared.')) return;
  state = buildInitialState();
  dom.gameScreen.style.display = 'none';
  dom.titleScreen.style.display = 'flex';
  dom.gameOverScreen.style.display = 'none';
}

function showGameOver() {
  dom.gameScreen.style.display = 'none';
  dom.gameOverScreen.style.display = 'flex';

  // Final scores display
  dom.goScore0.textContent = state.teamNames[0] + ': ' + formatScore(state.scores[0]);
  dom.goScore1.textContent = state.teamNames[1] + ': ' + formatScore(state.scores[1]);

  const winner = state.scores[0] > state.scores[1] ? state.teamNames[0]
    : state.scores[1] > state.scores[0] ? state.teamNames[1]
    : 'Tie';
  dom.goWinner.textContent = winner === 'Tie' ? 'It\'s a Tie!' : winner + ' wins!';
  launchConfetti('win');
}

/* ═══════════════════════════════════════════════════════════
   CONFETTI
═══════════════════════════════════════════════════════════ */

function launchConfetti(type) {
  const container = dom.confettiContainer;
  container.innerHTML = '';

  const colors = {
    dd:  ['#f59e0b', '#fbbf24', '#fde68a', '#ffffff'],
    fj:  ['#8b5cf6', '#a78bfa', '#c4b5fd', '#f59e0b', '#fbbf24'],
    win: ['#10b981', '#34d399', '#6ee7b7', '#f59e0b', '#60a5fa', '#a78bfa']
  }[type] || ['#60a5fa', '#f59e0b', '#a78bfa'];

  const count = type === 'win' ? 60 : 35;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.cssText = [
      'left:' + Math.random() * 100 + '%',
      'background:' + colors[Math.floor(Math.random() * colors.length)],
      'animation-delay:' + (Math.random() * 0.6) + 's',
      'animation-duration:' + (1.2 + Math.random() * 1.2) + 's',
      'width:' + (6 + Math.random() * 8) + 'px',
      'height:' + (6 + Math.random() * 8) + 'px',
      'border-radius:' + (Math.random() > 0.5 ? '50%' : '2px')
    ].join(';');
    container.appendChild(el);
  }

  // Auto-clear after animation
  setTimeout(() => { container.innerHTML = ''; }, 3500);
}

/* ═══════════════════════════════════════════════════════════
   INITIALIZATION — wired to DOMContentLoaded
═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  // ── Cache DOM refs ──────────────────────────────────────
  dom = {
    // Screens
    titleScreen:       $('screen-title'),
    gameScreen:        $('screen-game'),
    gameOverScreen:    $('screen-gameover'),

    // Board
    board:             $('game-board'),

    // HUD
    teamName0:         $('team-name-0'),
    teamName1:         $('team-name-1'),
    score0:            $('score-0'),
    score1:            $('score-1'),
    roundInfo:         $('round-info'),
    cluesLeft:         $('clues-left'),

    // Footer controls
    btnNextRound:      $('btn-next-round'),
    btnFinalJeopardy:  $('btn-final-jeopardy'),
    btnReset:          $('btn-reset'),

    // Clue modal
    clueCategory:      $('clue-category'),
    clueValue:         $('clue-value'),
    clueText:          $('clue-text'),
    clueAnswer:        $('clue-answer'),
    btnRevealAnswer:   $('btn-reveal-answer'),
    clueScoreButtons:  $('clue-score-buttons'),
    btnCloseClue:      $('btn-close-clue'),

    // Daily Double modal
    ddCategory:        $('dd-category'),
    ddTeamSelect:      $('dd-team-select'),
    ddWagerArea:       $('dd-wager-area'),
    ddWagerInput:      $('dd-wager-input'),
    btnDDSeeClue:      $('btn-dd-see-clue'),
    ddClueArea:        $('dd-clue-area'),
    ddClueText:        $('dd-clue-text'),
    ddAnswer:          $('dd-answer'),
    ddAnswerArea:      $('dd-answer-area'),
    btnDDRevealAnswer: $('btn-dd-reveal'),
    ddScoreButtons:    $('dd-score-buttons'),

    // Final Jeopardy modal
    fjCategory:        $('fj-category'),
    fjWagerSection:    $('fj-wager-section'),
    fjWagerArea:       $('fj-wager-area'),
    fjWagerError:      $('fj-wager-error'),
    fjClueSection:     $('fj-clue-section'),
    fjClue:            $('fj-clue'),
    fjAnswerSection:   $('fj-answer-section'),
    fjAnswer:          $('fj-answer'),
    fjScoreSection:    $('fj-score-section'),
    fjScoreButtons:    $('fj-score-buttons'),
    btnFJSeeClue:      $('btn-fj-see-clue'),
    btnFJReveal:       $('btn-fj-reveal'),

    // Confetti
    confettiContainer: $('confetti-container'),

    // Game over
    goScore0:          $('go-score-0'),
    goScore1:          $('go-score-1'),
    goWinner:          $('go-winner'),
  };

  // ── Title screen ────────────────────────────────────────
  $('btn-start-game').addEventListener('click', startGame);
  $('btn-how-to-play').addEventListener('click', openHTPModal);
  $('btn-close-htp').addEventListener('click', closeHTPModal);

  // ── Score manual controls ───────────────────────────────
  [0, 1].forEach(ti => {
    const prefix = 'score-adj-' + ti;
    $('btn-' + prefix + '-plus').addEventListener('click', () => handleManualScoreChange(ti, 100));
    $('btn-' + prefix + '-minus').addEventListener('click', () => handleManualScoreChange(ti, -100));

    // Team name edit
    const nameEl = ti === 0 ? dom.teamName0 : dom.teamName1;
    nameEl.addEventListener('dblclick', () => makeNameEditable(ti));
    nameEl.addEventListener('blur', () => finalizeNameEdit(ti));
    nameEl.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); finalizeNameEdit(ti); }
    });
  });

  // ── Footer buttons ──────────────────────────────────────
  dom.btnNextRound.addEventListener('click', loadNextRound);
  dom.btnFinalJeopardy.addEventListener('click', openFinalJeopardyModal);
  dom.btnReset.addEventListener('click', resetGame);

  $('btn-reset-from-over').addEventListener('click', resetGame);

  // ── Clue modal ──────────────────────────────────────────
  dom.btnRevealAnswer.addEventListener('click', () => {
    dom.clueAnswer.classList.remove('hidden');
    dom.btnRevealAnswer.style.display = 'none';
    state.answerRevealed = true;
    // Now that the answer is visible, show team scoring buttons
    renderScoreButtons(dom.clueScoreButtons, state.activeClue.clue.value);
    // Relabel footer button to reflect post-reveal context
    dom.btnCloseClue.textContent = 'No Score — Close';
  });

  dom.btnCloseClue.addEventListener('click', () => {
    closeModal('modal-clue');
  });

  // ── Daily Double modal ──────────────────────────────────
  dom.btnDDSeeClue.addEventListener('click', handleDDSeeClue);
  dom.btnDDRevealAnswer.addEventListener('click', handleDDRevealAnswer);

  dom.ddWagerInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') handleDDSeeClue();
  });

  // ── Final Jeopardy modal ────────────────────────────────
  dom.btnFJSeeClue.addEventListener('click', handleFJSeeClue);
  dom.btnFJReveal.addEventListener('click', handleFJReveal);

  // Escape key intentionally does NOT close the clue modal —
  // accidental keypresses during group play would dismiss clues unexpectedly.

  // ── Mobile viewport height fix (Safari address bar) ─────
  function setVH() {
    document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
  }
  setVH();
  window.addEventListener('resize', setVH);
  window.addEventListener('orientationchange', () => {
    setTimeout(setVH, 200);  // slight delay for orientation settle
  });

}); // end DOMContentLoaded
