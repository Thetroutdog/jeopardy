# BJJ Jeopardy

**Version:** v1.0 — April 2026

A polished, touch-friendly Jeopardy-style trivia game built entirely around Brazilian Jiu-Jitsu.
Plays in any browser, works locally from the filesystem (no server required), and can be hosted on GitHub Pages.

---

## Purpose

A ready-to-play trivia game for BJJ academies, team events, seminars, or casual mat nights.
Two teams compete on a 5×5 board of BJJ clues, from white-belt basics to black-belt knowledge.

---

## Features

- 5 × 5 game board (5 categories, 5 clue values: $200–$1,000)
- 300 unique BJJ clues across 12 categories — enough for 10+ complete rounds
- Round rotation: each new game automatically loads a fresh board from the question pool
- 2 Daily Doubles per board (randomly placed on $400+ rows)
- Full Final Jeopardy flow: category reveal → wager entry → clue → answer → scoring
- 2-team scoreboard with manual +/- adjustments ($100 increments) and double-click name editing
- Subtle confetti for Daily Double, Final Jeopardy, and game-over moments
- Clean dark game theme — readable indoors, strong contrast
- Optimized for iPad landscape; also works in portrait and on desktop
- No login, no server, no internet required
- No external dependencies — single folder, works from a USB drive or email attachment

---

## Project Structure

```
BJJ_Jeopardy/
├── index.html              # Game entry point (open this in any browser)
├── assets/
│   ├── css/
│   │   └── styles.css      # All visual styles
│   └── js/
│       ├── game_data.js    # All questions, categories, Final Jeopardy prompts
│       └── app.js          # All game logic (state, board gen, modals, scoring)
├── README.md               # This file
├── CHANGELOG.md            # Version history
├── project.md              # Session-resumable project metadata
└── sessionlog.md           # Build notes and implementation decisions
```

---

## How to Run Locally

1. Open Finder and navigate to the `BJJ_Jeopardy` folder
2. Double-click `index.html` — it opens in your default browser
3. On iPad: AirDrop the whole folder, then open `index.html` via the Files app → Open in Safari

> **Safari tip:** If Safari blocks local JS files, open Settings → Safari → Advanced → turn off "Block all cookies" or try Chrome/Firefox instead.

---

## How to Host on GitHub Pages

1. Create a new GitHub repository
2. Upload all project files maintaining the folder structure
3. Go to Settings → Pages → Source: `main` branch, `/ (root)` folder → Save
4. Your game will be live at `https://yourusername.github.io/BJJ_Jeopardy/`

No build step needed — the project is already static.

---

## How the Question & Round System Works

**Data file:** `assets/js/game_data.js`

All content lives in `window.BJJ_QUESTION_BANK`:

```
BJJ_QUESTION_BANK = {
  categories: [
    {
      id: 'on_top',
      name: 'On Top',
      questions: [
        { id: 'ot_01', value: 200, clue: '...', answer: '...' },
        // 5 questions per value tier (200/400/600/800/1000)
        // 25 questions total per category
      ]
    },
    // ...11 more categories (12 total)
  ],
  finalJeopardy: [
    { id: 'fj_01', category: '...', clue: '...', answer: '...' },
    // ...14 more prompts (15 total)
  ]
}
```

**Rotation logic (in app.js):**
- Each category tracks how many times it has been "dealt" via `state.categoryUseCount`
- Each deal uses the next 5 questions from that category (one per value tier)
- 5 deals exhaust a category's 25 questions
- `selectCategories()` always picks the 5 categories with the lowest use count
- With 12 categories × 5 uses each = 60 category-deal slots
- 10 rounds × 5 categories = 50 slots needed → comfortable 10+ rounds

---

## How a Future Claude Session Should Rebuild the Question Bank

To generate a fresh set of 300 BJJ questions:

1. Open `assets/js/game_data.js`
2. Read the header comment — it contains the full rebuild spec
3. Replace the `categories` array content, keeping the same structure:
   - 12 categories
   - Each category: `{ id, name, questions: [...] }`
   - Each question: `{ id, value, clue, answer }`
   - **5 questions per value tier (200/400/600/800/1000) per category = 25 per category**
   - Question IDs must be globally unique (use the `cat_prefix_NN` convention)
   - **Do not rename existing category `id` fields** — they are referenced by the state tracker in app.js
   - If adding new categories, give them new IDs and don't change the existing 12
4. Replace the `finalJeopardy` array with 15+ new prompts
5. Bump the `version` string at the top of the file
6. Update `CHANGELOG.md` and the version display in `index.html` (the title screen footer)

---

## Current Categories (v1.0)

| ID              | Board Name  | Topic Area              |
|-----------------|-------------|-------------------------|
| `on_top`        | On Top      | Dominant positions      |
| `tap_out`       | Tap Out     | Submissions             |
| `guard_game`    | Guard Game  | Guard positions         |
| `sweep_it`      | Sweep It    | Sweeps & reversals      |
| `escape_plan`   | Escape Plan | Escapes                 |
| `takedowns`     | Takedowns   | Stand-up & trips        |
| `score`         | Score!      | Competition rules       |
| `bjj_speak`     | BJJ Speak   | Terminology             |
| `gi_time`       | Gi Time     | Gi-specific techniques  |
| `no_gi`         | No-Gi       | No-gi concepts          |
| `the_roots`     | The Roots   | History & culture       |
| `mindset`       | Mindset     | Strategy & concepts     |

---

## Known Limitations

- No sound (by design — silence-friendly for mat use)
- No persistent score storage across page refreshes (reload resets game)
- Team names revert on page reload (not persisted to localStorage)
- No bracket/multi-game tournament mode
- Some 800–1000 point answers allow reasonable alternate phrasings — the honor system is used for judging
- Tested on Safari iOS/iPadOS and Chrome desktop; Firefox and Edge should work but are not primary targets

---

## Technical Notes

- Built with: Vanilla HTML, CSS, JavaScript (no frameworks, no build tools)
- Storage: None (fully in-memory, no localStorage, no backend)
- Primary target: Safari (macOS and iPadOS), landscape orientation
- Data embedded in JS (not fetched) for `file://` protocol compatibility
- CSS custom properties used for theming
- `--vh` trick applied for correct viewport height on Safari iOS (address bar issue)
