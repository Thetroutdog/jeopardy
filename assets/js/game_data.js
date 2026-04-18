/**
 * BJJ Jeopardy - Question Bank
 * Version: 2.0
 *
 * HOW TO REBUILD THIS FILE IN A FUTURE SESSION:
 * 1. Keep the same window.BJJ_QUESTION_BANK structure
 * 2. Each category needs exactly 5 questions per value tier (200/400/600/800/1000)
 *    → 25 questions per category × 12 categories = 300 total
 * 3. Question IDs must be globally unique (use cat prefix + zero-padded number)
 * 4. finalJeopardy needs at least 12 prompts for 10+ rounds
 * 5. Do NOT change category ids — they are referenced by state tracking in app.js
 *    (If adding a new category, add a new id; don't rename existing ones)
 * 6. Bump version string and update README/CHANGELOG when rebuilding
 */

window.BJJ_QUESTION_BANK = {
  version: '2.0',

  /**
   * 12 categories, 25 questions each (5 per value tier).
   * categories[n].questions is sorted value-ascending for board generation.
   * Within each tier, questions are ordered by "round use" — round 1 uses index 0
   * of each tier, round 2 uses index 1, etc. (up to 5 rounds per category).
   */
  categories: [

    /* ───────────────────────────────────────────────
       CATEGORY 1 — ON TOP  (dominant positions)
    ─────────────────────────────────────────────── */
    {
      id: 'on_top',
      name: 'On Top',
      questions: [
        // ── 200 ──────────────────────────────────
        { id: 'ot_n_01', value: 200, clue: 'Sitting on your opponent\'s chest with your legs straddling their torso — your weight pins them flat to the mat.', answer: 'Mount' },
        { id: 'ot_n_02', value: 200, clue: 'You lie chest-to-chest beside your grounded opponent, perpendicular to their body, with your weight across their chest.', answer: 'Side Control' },
        { id: 'ot_n_03', value: 200, clue: 'Lying behind your opponent on the ground — your chest against their back, your feet controlling their hips.', answer: 'Back Control (Rear Mount)' },
        { id: 'ot_n_04', value: 200, clue: 'You drive one knee firmly onto your opponent\'s stomach and remain mostly upright — a transitional top position that also scores points.', answer: 'Knee on Belly' },
        { id: 'ot_n_05', value: 200, clue: 'Your opponent is on hands and knees (turtle position) and you drape across their back from above, threatening chokes.', answer: 'Top Turtle Control' },
        // ── 400 ──────────────────────────────────
        { id: 'ot_n_06', value: 400, clue: 'From side control, rotating your body 180 degrees so you now face your opponent\'s feet places you in this position.', answer: 'North-South' },
        { id: 'ot_n_07', value: 400, clue: 'In mount, shuffling both knees forward toward your opponent\'s armpits gives you this tighter, more attacking sub-position.', answer: 'High Mount' },
        { id: 'ot_n_08', value: 400, clue: 'The back control grip: one arm snakes over the shoulder, the other threads under the opposite armpit, hands clasped at the chest.', answer: 'Seatbelt Grip' },
        { id: 'ot_n_09', value: 400, clue: 'In back control, your feet are inserted between your opponent\'s thighs to anchor you in position — they are called your ___.', answer: 'Hooks' },
        { id: 'ot_n_10', value: 400, clue: 'This judo-origin hold has you sitting at your opponent\'s shoulder, trapping their head under your armpit — also called a scarf hold.', answer: 'Kesa Gatame' },
        // ── 600 ──────────────────────────────────
        { id: 'ot_n_11', value: 600, clue: 'In mount, posting one hand back and shooting one leg back to create an S-shape allows you to isolate an arm for attack.', answer: 'S-Mount' },
        { id: 'ot_n_12', value: 600, clue: 'When your opponent in back control turns toward you, following their turn and completing the rotation typically lands you in this position.', answer: 'Mount' },
        { id: 'ot_n_13', value: 600, clue: 'In side control, using your forearm against your opponent\'s jaw line to drive their head away and prevent framing is called a ___.', answer: 'Crossface' },
        { id: 'ot_n_14', value: 600, clue: 'The concept of keeping your hips heavy and sinking your weight into your opponent while in mount — preventing their bridge and shrimp.', answer: 'Flattening Out (Pressure)' },
        { id: 'ot_n_15', value: 600, clue: 'In back control, crossing your ankles around your opponent\'s waist instead of using hooks puts you at risk of giving up this submission.', answer: 'Ankle Lock' },
        // ── 800 ──────────────────────────────────
        { id: 'ot_n_16', value: 800, clue: 'Reverse kesa gatame differs from regular kesa gatame in that you face your opponent\'s ___ instead of their head.', answer: 'Feet' },
        { id: 'ot_n_17', value: 800, clue: 'In ultra-high mount your opponent cannot reach your face with their hands — your knees have passed their ___.', answer: 'Shoulders' },
        { id: 'ot_n_18', value: 800, clue: 'In north-south, reaching back and applying a figure-four grip on your opponent\'s near arm sets up this shoulder lock.', answer: 'Kimura (from North-South)' },
        { id: 'ot_n_19', value: 800, clue: 'Maintaining side control requires blocking the bottom player\'s attempt to insert their near knee — you prevent this by keeping your hips low against their ___.', answer: 'Hip (or Knee)' },
        { id: 'ot_n_20', value: 800, clue: 'The principle that a good top player always maintains at least two points of contact when transitioning between dominant positions.', answer: 'Connectivity (Chaining Positions)' },
        // ── 1000 ──────────────────────────────────
        { id: 'ot_n_21', value: 1000, clue: 'In side control, a top player "kills the frame" by driving their shoulder into the opponent\'s chin — this prevents the opponent from doing this.', answer: 'Pushing (Framing)' },
        { id: 'ot_n_22', value: 1000, clue: 'The space that a bottom player needs to initiate shrimping and escape movements — a skilled top player works to eliminate this.', answer: 'Space' },
        { id: 'ot_n_23', value: 1000, clue: 'When your opponent attempts the elbow-knee escape from mount, the correct counter is to block their elbow with your knee and do this.', answer: 'Re-establish Hip Position (or Reset Base)' },
        { id: 'ot_n_24', value: 1000, clue: 'The positional hierarchy places back control above mount because from back control your opponent cannot directly see or access ___.', answer: 'You (The Attacker)' },
        { id: 'ot_n_25', value: 1000, clue: 'In side control, dropping weight onto the opponent\'s far shoulder — rather than the near side — forces them to bridge away from their escape route. This is called ___ weight distribution.', answer: 'Far-Side (or Cross) Weight Distribution' },
      ]
    },

    /* ───────────────────────────────────────────────
       CATEGORY 2 — TAP OUT  (submissions)
    ─────────────────────────────────────────────── */
    {
      id: 'tap_out',
      name: 'Tap Out',
      questions: [
        // ── 200 ──────────────────────────────────
        { id: 'to_n_01', value: 200, clue: 'You wrap both legs around your opponent\'s neck and one arm, then squeeze — cutting off blood flow to the brain.', answer: 'Triangle Choke' },
        { id: 'to_n_02', value: 200, clue: 'Locking your opponent\'s arm across your hip and lifting your hips to hyperextend their elbow.', answer: 'Armbar' },
        { id: 'to_n_03', value: 200, clue: 'From behind, your forearm presses across your opponent\'s throat while your bicep and arm compress both sides of the neck.', answer: 'Rear Naked Choke' },
        { id: 'to_n_04', value: 200, clue: 'A figure-four grip that externally rotates your opponent\'s shoulder — applied by pulling the wrist toward their head.', answer: 'Kimura' },
        { id: 'to_n_05', value: 200, clue: 'Your arm slides under your opponent\'s chin from the front and squeezes their throat — a fundamental front choke.', answer: 'Guillotine' },
        // ── 400 ──────────────────────────────────
        { id: 'to_n_06', value: 400, clue: 'A figure-four shoulder lock similar to the Kimura, but the arm folds the opposite direction — bending across the body toward the opposite hip.', answer: 'Americana' },
        { id: 'to_n_07', value: 400, clue: 'From closed guard, your leg swings over your opponent\'s shoulder and your hip pressure levers their arm — a shoulder lock from the bottom.', answer: 'Omoplata' },
        { id: 'to_n_08', value: 400, clue: 'A no-gi choke threading one arm under the chin and one arm behind the neck — popular from wrestling and front headlock positions.', answer: 'D\'Arce Choke' },
        { id: 'to_n_09', value: 400, clue: 'A straight compression submission applied to the Achilles tendon — one of the first leg attacks taught to beginners.', answer: 'Straight Ankle Lock' },
        { id: 'to_n_10', value: 400, clue: 'Applied from top half guard or side control, your arm and head trap your opponent\'s arm against their own neck to choke them.', answer: 'Arm Triangle (Head and Arm Choke)' },
        // ── 600 ──────────────────────────────────
        { id: 'to_n_11', value: 600, clue: 'This gi choke from inside closed guard uses the sleeve of your own gi jacket as the choking fabric — named after a famous Brazilian soldier.', answer: 'Ezekiel Choke' },
        { id: 'to_n_12', value: 600, clue: 'A compression submission that squeezes your calf against your opponent\'s shin — considered the leg version of a bicep slicer.', answer: 'Calf Slicer' },
        { id: 'to_n_13', value: 600, clue: 'From the back, gripping the far collar with a deep thumb-in grip and pulling it across the throat — a powerful gi-specific choke.', answer: 'Bow and Arrow Choke' },
        { id: 'to_n_14', value: 600, clue: 'A rotational heel attack that cranks the foot and knee joint toward the outside of the body.', answer: 'Outside Heel Hook' },
        { id: 'to_n_15', value: 600, clue: 'A gi choke applied from side control where you slide two hands along the collar — one palm-up, one palm-down — and compress the neck.', answer: 'Baseball Bat Choke' },
        // ── 800 ──────────────────────────────────
        { id: 'to_n_16', value: 800, clue: 'Straight ankle lock defense: rather than rotating your leg, you must move your ___ to relieve pressure safely.', answer: 'Whole Body (Disengage)' },
        { id: 'to_n_17', value: 800, clue: 'This submission attacks both the knee and the groin simultaneously — set up from a half guard leg entanglement position.', answer: 'Electric Chair' },
        { id: 'to_n_18', value: 800, clue: 'The heel hook variant that rotates the heel toward the midline of the body — considered more dangerous than the outside version.', answer: 'Inside Heel Hook' },
        { id: 'to_n_19', value: 800, clue: 'This wristlock — applied by forcing the wrist backward — is legal in gi competition and can appear naturally from grip fighting.', answer: 'Wristlock' },
        { id: 'to_n_20', value: 800, clue: 'The toehold submission compresses this specific part of the foot to attack the ankle and knee joint.', answer: 'Top of the Foot (Instep)' },
        // ── 1000 ──────────────────────────────────
        { id: 'to_n_21', value: 1000, clue: 'This choke attacks the brachial nerve cluster rather than the carotid arteries — it creates a stunning sensation without the usual blood choke pressure.', answer: 'Brachial Plexus Choke (Neck Crank)' },
        { id: 'to_n_22', value: 1000, clue: 'A spine-cranking submission requiring back control, named after a weather phenomenon — popularized in BJJ by Eddie Bravo.', answer: 'Twister' },
        { id: 'to_n_23', value: 1000, clue: 'This leg lock position applied from top — compressing both ends of the knee joint simultaneously — is like an armbar for the knee.', answer: 'Kneebar' },
        { id: 'to_n_24', value: 1000, clue: 'In IBJJF gi competition, heel hooks are restricted to competitors at this belt level and above.', answer: 'Black Belt' },
        { id: 'to_n_25', value: 1000, clue: 'The principle that every failed submission attempt should automatically transition into a positional improvement — not a failed attack.', answer: 'Conversion (Flow to Position)' },
      ]
    },

    /* ───────────────────────────────────────────────
       CATEGORY 3 — GUARD GAME  (guard positions)
    ─────────────────────────────────────────────── */
    {
      id: 'guard_game',
      name: 'Guard Game',
      questions: [
        // ── 200 ──────────────────────────────────
        { id: 'gg_n_01', value: 200, clue: 'The guard where your legs are locked around your opponent\'s waist and they are trapped between your knees.', answer: 'Closed Guard' },
        { id: 'gg_n_02', value: 200, clue: 'Any guard where your ankles are NOT locked together — a broad term for the many open leg configurations.', answer: 'Open Guard' },
        { id: 'gg_n_03', value: 200, clue: 'Only one of your legs traps your opponent\'s leg — the other is free — in this foundational guard.', answer: 'Half Guard' },
        { id: 'gg_n_04', value: 200, clue: 'Both your feet are planted on your opponent\'s hips while you grip their sleeves — controlling distance and angle.', answer: 'Spider Guard' },
        { id: 'gg_n_05', value: 200, clue: 'Your foot hooks around the outside of your opponent\'s near leg as they kneel or stand above you.', answer: 'De La Riva Guard' },
        // ── 400 ──────────────────────────────────
        { id: 'gg_n_06', value: 400, clue: 'Your feet are placed on your opponent\'s hips with shins horizontal — you push and pull to control their posture and distance.', answer: 'Butterfly Guard' },
        { id: 'gg_n_07', value: 400, clue: 'Your feet interlock under your opponent\'s thigh in this guard, setting up numerous sweeps and leg lock entries.', answer: 'X-Guard' },
        { id: 'gg_n_08', value: 400, clue: 'Both your legs weave through your opponent\'s arm in this gi-specific guard, creating sleeve entanglements called a "lasso."', answer: 'Lasso Guard' },
        { id: 'gg_n_09', value: 400, clue: 'A half-guard variation where you face away from your opponent with one knee acting as a shield between your bodies.', answer: 'Z-Guard (Knee Shield Half Guard)' },
        { id: 'gg_n_10', value: 400, clue: 'Your foot is hooked around the inside of your opponent\'s knee from below — sometimes called the "mirror image" of De La Riva.', answer: 'Reverse De La Riva Guard' },
        // ── 600 ──────────────────────────────────
        { id: 'gg_n_11', value: 600, clue: 'Both of your legs intertwine with one of your opponent\'s legs — creating equal leg lock threats for both players.', answer: '50/50 Guard' },
        { id: 'gg_n_12', value: 600, clue: 'This guard uses a gi lapel threaded through the legs to create unique wrapping bindings around your opponent.', answer: 'Worm Guard (Lapel Guard)' },
        { id: 'gg_n_13', value: 600, clue: 'You sit up into your opponent, controlling their near wrist and far shoulder — a wrestling-like posture from the bottom.', answer: 'Sit-Up Guard' },
        { id: 'gg_n_14', value: 600, clue: 'In this guard, your hip is deep under your opponent and you hook under their thigh to set up sweeps from an extreme low angle.', answer: 'Deep Half Guard' },
        { id: 'gg_n_15', value: 600, clue: 'A bottom guard position with knees up and feet flat — you fight for inside position before opening into a specific guard.', answer: 'Headquarters Position' },
        // ── 800 ──────────────────────────────────
        { id: 'gg_n_16', value: 800, clue: 'A guard position where you invert your hips and reach under your opponent\'s legs — simultaneously threatening back takes and sweeps.', answer: 'Berimbolo Entry (Deep De La Riva)' },
        { id: 'gg_n_17', value: 800, clue: 'This no-gi leg entanglement guard attaches your legs around your opponent\'s single leg while controlling their wrist and ankle.', answer: 'Single Leg X Guard (Ashi Garami)' },
        { id: 'gg_n_18', value: 800, clue: 'Your hips are higher than your head while inverted under your opponent — threatening back takes and leg locks from below.', answer: 'Inverted Guard' },
        { id: 'gg_n_19', value: 800, clue: 'The "worm guard" concept of using the lapel was popularized and made famous in high-level competition by this American competitor.', answer: 'Keenan Cornelius' },
        { id: 'gg_n_20', value: 800, clue: 'In guard play, "inside position" means controlling the space ___ your opponent\'s arms and their body.', answer: 'Between (Inside Track)' },
        // ── 1000 ──────────────────────────────────
        { id: 'gg_n_21', value: 1000, clue: 'Guard retention refers to your ability to do this the moment your opponent begins to pass your guard.', answer: 'Re-Establish Guard' },
        { id: 'gg_n_22', value: 1000, clue: 'The systematic guard game involving inversion, back takes, and leg entanglements — pioneered largely by the Mendes brothers.', answer: 'Berimbolo System (De La Riva Game)' },
        { id: 'gg_n_23', value: 1000, clue: 'Single Leg X guard attacks the outside of this joint when you use the near-arm hook combined with a hip bump.', answer: 'Knee' },
        { id: 'gg_n_24', value: 1000, clue: 'The two things you must simultaneously disrupt to unbalance your opponent and successfully sweep from open guard.', answer: 'Base and Posture (Balance)' },
        { id: 'gg_n_25', value: 1000, clue: 'The guard that creates mutual leg lock threats in a leg entanglement — where neither player has clear positional advantage — is named after this fraction.', answer: '50/50' },
      ]
    },

    /* ───────────────────────────────────────────────
       CATEGORY 4 — SWEEP IT  (sweeps & reversals)
    ─────────────────────────────────────────────── */
    {
      id: 'sweep_it',
      name: 'Sweep It',
      questions: [
        // ── 200 ──────────────────────────────────
        { id: 'si_n_01', value: 200, clue: 'From closed guard, you use one shin to scissor your opponent\'s knee while pushing the other knee away — sending them sideways.', answer: 'Scissor Sweep' },
        { id: 'si_n_02', value: 200, clue: 'From butterfly guard, you fall to one side and lever your opponent over your hooked foot under their thigh.', answer: 'Butterfly Sweep' },
        { id: 'si_n_03', value: 200, clue: 'From closed guard, you quickly sit up and drive your hip into your opponent to tip them over your planted foot.', answer: 'Hip Bump Sweep' },
        { id: 'si_n_04', value: 200, clue: 'From De La Riva guard, pushing your opponent\'s knee and pulling their ankle simultaneously tips them to the outside.', answer: 'De La Riva Sweep' },
        { id: 'si_n_05', value: 200, clue: 'In IBJJF competition, a successful sweep that ends with you in a stable top position scores this many points.', answer: '2 Points' },
        // ── 400 ──────────────────────────────────
        { id: 'si_n_06', value: 400, clue: 'From spider guard, extending both legs simultaneously while pulling both sleeves topples your opponent straight backward — this sweep.', answer: 'Lumberjack Sweep' },
        { id: 'si_n_07', value: 400, clue: 'From closed guard, grabbing your opponent\'s far ankle and sitting up — pulling it across to unbalance them — is this sweep.', answer: 'Ankle Sweep' },
        { id: 'si_n_08', value: 400, clue: 'From half guard bottom, getting your underhook and rolling underneath your opponent to come up on top.', answer: 'Old School Sweep' },
        { id: 'si_n_09', value: 400, clue: 'From butterfly guard, using both hooks to lift your opponent as you fall back — sending them overhead.', answer: 'Elevator Sweep (Double Butterfly)' },
        { id: 'si_n_10', value: 400, clue: 'You block your opponent\'s near knee with your shin and roll toward the blocked leg in this half guard sweep.', answer: 'Knee Tap Sweep' },
        // ── 600 ──────────────────────────────────
        { id: 'si_n_11', value: 600, clue: 'From X-guard, pushing one leg and pulling the other in opposite directions creates the rotation for this basic sweep.', answer: 'X-Guard Sweep' },
        { id: 'si_n_12', value: 600, clue: 'A closed guard sweep where you grab both of your opponent\'s ankles and pull them forward so they fall face-first.', answer: 'Sickle Sweep (Double Ankle Sweep)' },
        { id: 'si_n_13', value: 600, clue: 'From deep half guard, you come up to a wrestling base beneath your opponent and drive them sideways to complete the reversal.', answer: 'Deep Half Sweep' },
        { id: 'si_n_14', value: 600, clue: 'A closed guard sweep where you swing both legs toward your opponent\'s shoulder while gripping their ankle — named for the pendulum motion.', answer: 'Pendulum Sweep' },
        { id: 'si_n_15', value: 600, clue: 'In IBJJF, a sweep attempt that doesn\'t end with you fully stabilized on top does NOT score — this requires you to hold the position for this many seconds.', answer: '3 Seconds' },
        // ── 800 ──────────────────────────────────
        { id: 'si_n_16', value: 800, clue: 'From reverse De La Riva, using your top hook to rotate your opponent over your body — combining inversion with a back take entry.', answer: 'RDLR Back Take (or Sweep)' },
        { id: 'si_n_17', value: 800, clue: 'A closed guard sweep that uses a fake triangle setup to open space — then drives the hip upward to flip the opponent.', answer: 'Hip Bump from Triangle Fake' },
        { id: 'si_n_18', value: 800, clue: 'From bottom half guard, underhooking the near leg and shooting under your opponent to take their back is the foundation of ___ half guard.', answer: 'Deep Half Guard (Bernardo Faria Style)' },
        { id: 'si_n_19', value: 800, clue: 'This concept — every sweep attempt should simultaneously threaten a submission — makes it impossible to defend with a single reaction.', answer: 'Threat Combination (Two-Attack Principle)' },
        { id: 'si_n_20', value: 800, clue: 'The berimbolo is named for a Portuguese word meaning this — matching the spinning, top-like inversion of the technique.', answer: 'Spinning Top (or Spin)' },
        // ── 1000 ──────────────────────────────────
        { id: 'si_n_21', value: 1000, clue: 'The concept of "creating an angle" in guard sweeping means shifting your body so your opponent\'s base is disrupted along their ___ side.', answer: 'Weak (or Diagonal)' },
        { id: 'si_n_22', value: 1000, clue: 'This elite competitor from Brazil won multiple IBJJF World titles while making the berimbolo and deep De La Riva system world-famous.', answer: 'Rafael Mendes' },
        { id: 'si_n_23', value: 1000, clue: 'A sweep that converts from a failed back take — using the falling momentum to land in a top position — demonstrates this BJJ concept.', answer: 'Conversion (or Flow from Failed Attack)' },
        { id: 'si_n_24', value: 1000, clue: 'To score a sweep in IBJJF, you must finish on top AND maintain this — just landing on top momentarily is not enough.', answer: 'Control (Dominant Position for 3 Seconds)' },
        { id: 'si_n_25', value: 1000, clue: 'In the "tornado sweep," the barrel-roll inversion motion was named for this natural phenomenon — matching the rotating, circular movement.', answer: 'Tornado' },
      ]
    },

    /* ───────────────────────────────────────────────
       CATEGORY 5 — ESCAPE PLAN  (escapes)
    ─────────────────────────────────────────────── */
    {
      id: 'escape_plan',
      name: 'Escape Plan',
      questions: [
        // ── 200 ──────────────────────────────────
        { id: 'ep_n_01', value: 200, clue: 'Pushing your hips backward and to the side while on your back — the fundamental bottom escape movement used in every position.', answer: 'Shrimping (Hip Escape)' },
        { id: 'ep_n_02', value: 200, clue: 'The mount escape where you plant your feet and explosively bridge your hips upward, trapping an arm and rolling your opponent to the side.', answer: 'Upa (Bridge and Roll)' },
        { id: 'ep_n_03', value: 200, clue: 'From bottom side control, this movement slides your near knee across in front of your opponent\'s hip to restore your guard.', answer: 'Hip Escape to Guard' },
        { id: 'ep_n_04', value: 200, clue: 'When caught in any submission you cannot escape, the universal safety rule is to do this immediately.', answer: 'Tap (Submit)' },
        { id: 'ep_n_05', value: 200, clue: 'Rising from your back to your feet using one hand posted on the mat — this movement is called the ___ standup.', answer: 'Technical Standup' },
        // ── 400 ──────────────────────────────────
        { id: 'ep_n_06', value: 400, clue: 'The second mount escape: you push your elbow to your hip and insert your knee between yourself and your opponent to recover half guard.', answer: 'Elbow-Knee Escape' },
        { id: 'ep_n_07', value: 400, clue: 'To defend a rear naked choke, your immediate priority is tucking your chin and doing this with your hands.', answer: 'Pull the Arm Down (Block the Wrist)' },
        { id: 'ep_n_08', value: 400, clue: 'The back control escape method: remove the hooks one at a time while keeping your chin tucked and shoulders away from your opponent.', answer: 'Back Control Escape (Hook Removal)' },
        { id: 'ep_n_09', value: 400, clue: 'From knee on belly, pushing your opponent\'s posted foot off the mat and bridging into them — this pops them forward and allows a sweep or escape.', answer: 'Knee on Belly Escape (Foot Pop)' },
        { id: 'ep_n_10', value: 400, clue: 'From north-south bottom, sitting up into your opponent and shooting a leg between their knees to come to your knees — called ___ up.', answer: 'Wrestling Up' },
        // ── 600 ──────────────────────────────────
        { id: 'ep_n_11', value: 600, clue: 'A diagonal roll across your shoulder used for guard recovery and angle changes — named after a rolling movement.', answer: 'Granby Roll' },
        { id: 'ep_n_12', value: 600, clue: 'Defending a triangle choke: you posture upright, stack your opponent\'s hips to the mat, and turn their knee to break the ___.', answer: 'Lock (Triangle Angle)' },
        { id: 'ep_n_13', value: 600, clue: 'Armbar defense: you interlock both hands, stack your weight onto your opponent, and pull your arm back — this works by reducing the ___ on your elbow.', answer: 'Angle (or Leverage)' },
        { id: 'ep_n_14', value: 600, clue: 'The back control escape involving dropping your hip to the mat on one side and gradually turning to face your opponent.', answer: 'Hip Slide Escape (or Seat Escape)' },
        { id: 'ep_n_15', value: 600, clue: 'In side control, pressing your forearm against your opponent\'s neck and your other arm against their hip to create space is called ___.', answer: 'Framing' },
        // ── 800 ──────────────────────────────────
        { id: 'ep_n_16', value: 800, clue: 'The "ghost escape" from side control — turning toward the mat and sliding your body through the gap under your opponent\'s hip — requires you to move in this direction.', answer: 'Toward the Mat (Under Their Hips)' },
        { id: 'ep_n_17', value: 800, clue: 'Leg lock defense rule: when caught in a heel hook, you must NOT rotate your knee — instead, you must move your ___ immediately.', answer: 'Whole Body (Disengage)' },
        { id: 'ep_n_18', value: 800, clue: 'For a straight ankle lock defense, pointing your toes and pulling the heel directly back — not rotating — avoids damage to this structure.', answer: 'Knee (Ligaments)' },
        { id: 'ep_n_19', value: 800, clue: 'This concept: the bottom player should begin escape movements the moment control is being established — not after being fully pinned.', answer: 'Early Escape (Don\'t Wait)' },
        { id: 'ep_n_20', value: 800, clue: 'An escape that converts to a sweep rather than simply returning to guard — turning defense into offense — demonstrates this BJJ concept.', answer: 'Reversal (Counter-Attack)' },
        // ── 1000 ──────────────────────────────────
        { id: 'ep_n_21', value: 1000, clue: 'The principle that effective escapes require creating ___ first, then using that space to recover position — not the reverse.', answer: 'Space' },
        { id: 'ep_n_22', value: 1000, clue: 'In BJJ, creating space to escape is made most effective by combining bridging with this other simultaneous motion.', answer: 'Shrimping (Hip Escape)' },
        { id: 'ep_n_23', value: 1000, clue: 'Advanced guard recovery requires reconnecting your ___ to your opponent\'s ___ before attempting to replace guard.', answer: 'Hip to Hip' },
        { id: 'ep_n_24', value: 1000, clue: 'The idea that tapping is not a defeat but a "reset" — protecting both training partners — embodies this training culture concept.', answer: 'Tap Culture (Ego Check)' },
        { id: 'ep_n_25', value: 1000, clue: 'The defensive posture from north-south bottom: both arms pressing into your opponent\'s hips creates these structural barriers.', answer: 'Frames' },
      ]
    },

    /* ───────────────────────────────────────────────
       CATEGORY 6 — TAKEDOWNS  (stand-up & trips)
    ─────────────────────────────────────────────── */
    {
      id: 'takedowns',
      name: 'Takedowns',
      questions: [
        // ── 200 ──────────────────────────────────
        { id: 'td_n_01', value: 200, clue: 'Shooting in low and wrapping BOTH of your opponent\'s legs to drive them backward to the mat.', answer: 'Double Leg Takedown' },
        { id: 'td_n_02', value: 200, clue: 'A penetration step that targets only ONE of your opponent\'s legs — attacking around or through their knee.', answer: 'Single Leg Takedown' },
        { id: 'td_n_03', value: 200, clue: 'Rather than completing a takedown, you sit directly to the ground and pull your opponent into your guard. This BJJ strategy is called a ___.', answer: 'Guard Pull' },
        { id: 'td_n_04', value: 200, clue: 'A judo hip throw that loads your opponent across your hips and rotates them over your body.', answer: 'Hip Throw (O Goshi)' },
        { id: 'td_n_05', value: 200, clue: 'Blocking your opponent\'s ankle with your foot as they step forward — sending them off balance with minimal effort.', answer: 'Foot Sweep' },
        // ── 400 ──────────────────────────────────
        { id: 'td_n_06', value: 400, clue: 'Sneaking under your opponent\'s posted arm and driving your shoulder into their chest to take them down.', answer: 'Duck Under' },
        { id: 'td_n_07', value: 400, clue: 'Lifting your opponent off the mat from behind with both arms around their waist, then driving them to the mat.', answer: 'Rear Body Lock (Suplex)' },
        { id: 'td_n_08', value: 400, clue: 'Grabbing your opponent\'s lead ankle and stepping into them so they trip over their own foot.', answer: 'Ankle Pick' },
        { id: 'td_n_09', value: 400, clue: 'A judo leg reap that sweeps your opponent\'s outer leg in a wide arc while loading their weight forward — its name translates to "major outer reap."', answer: 'Osoto Gari' },
        { id: 'td_n_10', value: 400, clue: 'A wrestling entry that controls behind your opponent\'s knee from a low, crouching inside position.', answer: 'High Crotch' },
        // ── 600 ──────────────────────────────────
        { id: 'td_n_11', value: 600, clue: 'The primary defense to a shooting takedown attempt: you push your hips back and drive your opponent\'s head down into the mat.', answer: 'Sprawl' },
        { id: 'td_n_12', value: 600, clue: 'A shoulder throw from judo where you load your opponent on your back and rotate them over — one of the most classic judo techniques.', answer: 'Seoi Nage (Shoulder Throw)' },
        { id: 'td_n_13', value: 600, clue: 'A sacrifice throw: you fall to your back and plant your foot in your opponent\'s abdomen to throw them overhead.', answer: 'Tomoe Nage (Circle Throw)' },
        { id: 'td_n_14', value: 600, clue: 'The inner leg reap from judo — connecting your leg behind your opponent\'s and driving them backward over it.', answer: 'Ouchi Gari (Major Inner Reap)' },
        { id: 'td_n_15', value: 600, clue: 'After a failed double leg, spinning behind your opponent and connecting a leg to trip them from behind is called a ___.', answer: 'Back Trip (or Single Leg to Back)' },
        // ── 800 ──────────────────────────────────
        { id: 'td_n_16', value: 800, clue: 'Sharply pulling your opponent\'s head down and forward when they over-post their arms creates this attacking opportunity.', answer: 'Snap-Down (to Front Headlock or Back Take)' },
        { id: 'td_n_17', value: 800, clue: 'The principle that whoever controls the space between their opponent\'s arms on the feet usually controls the takedown exchange.', answer: 'Inside Position (Inside Track)' },
        { id: 'td_n_18', value: 800, clue: 'In competition BJJ, a guard pull is considered legal from standing once you have done this first.', answer: 'Established a Grip' },
        { id: 'td_n_19', value: 800, clue: 'The wrestling stance designed for stand-up grappling: hips low, base wide, one foot slightly forward.', answer: 'Athletic Stance (Wrestling Stance)' },
        { id: 'td_n_20', value: 800, clue: 'In a double leg takedown, pinching your thighs around your opponent\'s leg prevents them from spinning to this follow-up position.', answer: 'Behind You (Escape / Spin-Out)' },
        // ── 1000 ──────────────────────────────────
        { id: 'td_n_21', value: 1000, clue: 'In judo, the principle of "kuzushi" — which means off-balancing — states that a throw can only succeed AFTER achieving this first.', answer: 'Breaking Balance' },
        { id: 'td_n_22', value: 1000, clue: 'The "blast double" variant of the double leg drives the ___ through the opponent\'s hips rather than scooping under the legs.', answer: 'Shoulder' },
        { id: 'td_n_23', value: 1000, clue: 'Converting a failed single leg into a back take by stepping your inside foot behind the opponent\'s near foot and driving is called a ___.', answer: 'Back Step Trip' },
        { id: 'td_n_24', value: 1000, clue: 'In stand-up grappling, this concept calls for constant level changes, grip fighting, and motion to create openings — rather than waiting statically.', answer: 'Active Wrestling (or Pressure Stance)' },
        { id: 'td_n_25', value: 1000, clue: 'The judo concept of "go no sen" — countering an opponent\'s attack — describes the timing when you execute a throw against a throwing opponent, called a ___.', answer: 'Counter Throw (or Sutemi)' },
      ]
    },

    /* ───────────────────────────────────────────────
       CATEGORY 7 — SCORE!  (competition rules & scoring)
    ─────────────────────────────────────────────── */
    {
      id: 'score',
      name: 'Score!',
      questions: [
        // ── 200 ──────────────────────────────────
        { id: 'sc_n_01', value: 200, clue: 'In IBJJF rules, passing your opponent\'s guard and establishing a stable top position scores this many points.', answer: '3 Points' },
        { id: 'sc_n_02', value: 200, clue: 'Taking your opponent from standing to the ground with you on top in IBJJF competition scores this many points.', answer: '2 Points' },
        { id: 'sc_n_03', value: 200, clue: 'In IBJJF, achieving back control with both hooks inserted scores this many points.', answer: '4 Points' },
        { id: 'sc_n_04', value: 200, clue: 'When an opponent taps, verbally submits, or is rendered unconscious — the match ends and this person wins.', answer: 'The Person Who Applied the Submission' },
        { id: 'sc_n_05', value: 200, clue: 'The IBJJF score for mount — sitting on top of your opponent with both legs on the mat.', answer: '4 Points' },
        // ── 400 ──────────────────────────────────
        { id: 'sc_n_06', value: 400, clue: 'A near-submission or near-sweep that does not fully complete but shows clear intent earns this in IBJJF.', answer: 'Advantage' },
        { id: 'sc_n_07', value: 400, clue: 'The standard match time for adult blue belts at a major IBJJF event like Worlds or Pan-Ams.', answer: '6 Minutes' },
        { id: 'sc_n_08', value: 400, clue: 'This IBJJF penalty is issued for stalling, fleeing the mat boundary, or other unsportsmanlike conduct.', answer: 'Penalty' },
        { id: 'sc_n_09', value: 400, clue: 'Knee on belly must be held for this many seconds before it scores 2 points in IBJJF.', answer: '3 Seconds' },
        { id: 'sc_n_10', value: 400, clue: 'If the score is tied at the end of IBJJF regulation, the winner is determined first by advantages, then by penalties, then by this.', answer: 'Referee Decision' },
        // ── 600 ──────────────────────────────────
        { id: 'sc_n_11', value: 600, clue: 'The IBJJF rule forbidding your knee to cross your opponent\'s centerline from the outside during leg entanglements — designed to prevent this injury.', answer: 'Knee Injury (Reaping)' },
        { id: 'sc_n_12', value: 600, clue: 'ADCC stands for this full name — widely considered the most prestigious submission grappling event in the world.', answer: 'Abu Dhabi Combat Club' },
        { id: 'sc_n_13', value: 600, clue: 'In sub-only competition formats like ADCC regulation rounds, there are no points — the only way to win is by ___.', answer: 'Submission' },
        { id: 'sc_n_14', value: 600, clue: 'In IBJJF, the gi must be one of three acceptable solid colors: white, black, and this color.', answer: 'Blue' },
        { id: 'sc_n_15', value: 600, clue: 'A match that ends because a competitor cannot continue due to injury — awarded to the healthy competitor by the referee — is called a ___.', answer: 'Medical Default' },
        // ── 800 ──────────────────────────────────
        { id: 'sc_n_16', value: 800, clue: 'Under IBJJF rules, any scoring position — guard pass, mount, or back control — must be held for this many seconds before points are awarded.', answer: '3 Seconds' },
        { id: 'sc_n_17', value: 800, clue: 'The IBJJF "absolute" division allows competitors to enter regardless of this factor.', answer: 'Weight Class' },
        { id: 'sc_n_18', value: 800, clue: 'In EBI overtime, competitors alternate between two attacking positions — the back and this other setup.', answer: 'Spider Web (Armbar Position)' },
        { id: 'sc_n_19', value: 800, clue: 'The specific IBJJF rule that forbids driving your opponent\'s knee across their own body from the outside is called the ___ rule.', answer: 'No Reaping Rule' },
        { id: 'sc_n_20', value: 800, clue: 'At IBJJF events, competitors in the "Master" divisions compete in age brackets starting at 30 and separated by this many years.', answer: '5 Years' },
        // ── 1000 ──────────────────────────────────
        { id: 'sc_n_21', value: 1000, clue: 'In IBJJF gi competition, heel hooks first become legal at this belt level.', answer: 'Black Belt' },
        { id: 'sc_n_22', value: 1000, clue: 'The IBJJF rule requiring a competitor to show "imminent submission" before an advantage is awarded means the opponent must clearly have ___.', answer: 'Reacted (or Been in Clear Danger)' },
        { id: 'sc_n_23', value: 1000, clue: 'ADCC awards points only in overtime rounds. In regulation, the only way to win is submission — but in overtime, takedowns score how many points?', answer: '1 Point' },
        { id: 'sc_n_24', value: 1000, clue: 'The IBJJF weight class for men who weigh between 76kg and 82.3kg (roughly 167–181 lbs).', answer: 'Medium-Heavy' },
        { id: 'sc_n_25', value: 1000, clue: 'BJ Penn became the first non-Brazilian to win the IBJJF World Championship in 2000, competing in this division.', answer: 'Open Weight (or Super-Heavyweight)' },
      ]
    },

    /* ───────────────────────────────────────────────
       CATEGORY 8 — BJJ SPEAK  (terminology)
    ─────────────────────────────────────────────── */
    {
      id: 'bjj_speak',
      name: 'BJJ Speak',
      questions: [
        // ── 200 ──────────────────────────────────
        { id: 'bs_n_01', value: 200, clue: 'Slapping the mat, your own body, or your opponent to signal that you are submitting.', answer: 'Tap' },
        { id: 'bs_n_02', value: 200, clue: 'Live sparring against a resisting partner in BJJ training — you say you are going to ___.', answer: 'Roll' },
        { id: 'bs_n_03', value: 200, clue: 'The fabric training uniform worn in gi BJJ — also called a kimono in Brazil.', answer: 'Gi' },
        { id: 'bs_n_04', value: 200, clue: 'The soft, padded floor of a BJJ academy where all training takes place.', answer: 'Mat (Tatami)' },
        { id: 'bs_n_05', value: 200, clue: 'The word shouted or used throughout a BJJ academy as a sign of acknowledgment and mutual respect.', answer: 'Oss' },
        // ── 400 ──────────────────────────────────
        { id: 'bs_n_06', value: 400, clue: 'Your stable support structure on the ground — wide knees, correct spine angle, weight distributed correctly.', answer: 'Base' },
        { id: 'bs_n_07', value: 400, clue: 'Keeping your spine upright in your opponent\'s guard — making it difficult for them to choke or sweep you — is called having good ___.', answer: 'Posture' },
        { id: 'bs_n_08', value: 400, clue: 'The side-to-side hip movement used to create space and escape from bottom positions — the most fundamental bottom movement.', answer: 'Shrimping (Hip Escape)' },
        { id: 'bs_n_09', value: 400, clue: 'The Portuguese phrase that translates to "the gentle art" — how BJJ practitioners refer to their sport.', answer: 'Arte Suave' },
        { id: 'bs_n_10', value: 400, clue: 'Any technique that forces a tap by attacking a joint or cutting off blood/air supply is broadly called this.', answer: 'Submission' },
        // ── 600 ──────────────────────────────────
        { id: 'bs_n_11', value: 600, clue: 'Pressing your forearm against your opponent\'s neck, shoulder, or hip to push them away and create distance — using a ___.', answer: 'Frame' },
        { id: 'bs_n_12', value: 600, clue: 'The Japanese word for "ground technique" — adopted from judo and used in BJJ to describe all mat-based work.', answer: 'Ne Waza' },
        { id: 'bs_n_13', value: 600, clue: 'A training session where both partners keep intensity deliberately low and focus on smooth, connected movement — called a ___ roll.', answer: 'Flow Roll' },
        { id: 'bs_n_14', value: 600, clue: 'The title used to address an instructor in a BJJ academy — in Brazil, "professor" is more common than this Japanese equivalent.', answer: 'Sensei' },
        { id: 'bs_n_15', value: 600, clue: 'A BJJ practitioner\'s preferred set of positions, attacks, and sequences — built over years of training — is called their ___.', answer: 'Game (A-Game)' },
        // ── 800 ──────────────────────────────────
        { id: 'bs_n_16', value: 800, clue: 'The Portuguese term for back control — or specifically, the rear naked choke — that literally means "kill the lion."', answer: 'Mata Leão' },
        { id: 'bs_n_17', value: 800, clue: 'The Japanese word for "free practice" or free sparring — used in judo and sometimes carried into BJJ discussion.', answer: 'Randori' },
        { id: 'bs_n_18', value: 800, clue: 'The tight compression shirt worn during no-gi training — it reduces skin friction, wicks sweat, and protects against mat burns.', answer: 'Rash Guard' },
        { id: 'bs_n_19', value: 800, clue: 'The concept of "inside control" means dominating the space between your opponent\'s arms and their ___.', answer: 'Body (Torso)' },
        { id: 'bs_n_20', value: 800, clue: 'Isolated technique practice against a non-resisting partner — repeating a move to build automatic muscle memory — is called ___.', answer: 'Drilling' },
        // ── 1000 ──────────────────────────────────
        { id: 'bs_n_21', value: 1000, clue: 'The Portuguese word used in competition contexts for "takedown" — the official IBJJF term for scoring a standing-to-ground action.', answer: 'Derrubada' },
        { id: 'bs_n_22', value: 1000, clue: 'The concept that each offensive move should threaten at least two outcomes simultaneously — making a single defense impossible — is called the ___.', answer: 'Two-Attack Principle' },
        { id: 'bs_n_23', value: 1000, clue: 'The Japanese term for "throwing techniques" — the standing portion of judo and BJJ that includes takedowns and trips.', answer: 'Nage Waza' },
        { id: 'bs_n_24', value: 1000, clue: 'The concept that you should always contest your opponent\'s grips before they establish them — fighting at the wrist level first — is called the ___ battle.', answer: 'Grip Battle' },
        { id: 'bs_n_25', value: 1000, clue: 'The Japanese word for "technique" — used broadly in martial arts to describe any individual movement or method.', answer: 'Waza' },
      ]
    },

    /* ───────────────────────────────────────────────
       CATEGORY 9 — GI TIME  (gi-specific techniques)
    ─────────────────────────────────────────────── */
    {
      id: 'gi_time',
      name: 'Gi Time',
      questions: [
        // ── 200 ──────────────────────────────────
        { id: 'gt_n_01', value: 200, clue: 'Gripping the collar fabric near your opponent\'s neck with four fingers inside and a thumb outside — the most fundamental gi grip.', answer: 'Collar Grip' },
        { id: 'gt_n_02', value: 200, clue: 'Grabbing the end of your opponent\'s gi sleeve at the wrist to control their arm.', answer: 'Sleeve Grip' },
        { id: 'gt_n_03', value: 200, clue: 'The long front panels of the gi jacket that can be pulled across the throat to set up chokes.', answer: 'Lapels' },
        { id: 'gt_n_04', value: 200, clue: 'The cloth tied around your waist that also indicates your rank in BJJ.', answer: 'Belt' },
        { id: 'gt_n_05', value: 200, clue: 'Gripping the fabric at the knee or pants hem to control your opponent\'s leg movement on the ground.', answer: 'Pants Grip' },
        // ── 400 ──────────────────────────────────
        { id: 'gt_n_06', value: 400, clue: 'A guard pass using two pants grips to steer your opponent\'s legs around to the side — named after a bullfighting move.', answer: 'Toreando Pass (Bullfighter Pass)' },
        { id: 'gt_n_07', value: 400, clue: 'A gi choke from inside closed guard that uses the fabric of your own sleeve as the choking material.', answer: 'Ezekiel Choke' },
        { id: 'gt_n_08', value: 400, clue: 'From the back, gripping the far collar deeply with a thumb-in grip and pulling it diagonally across the throat.', answer: 'Bow and Arrow Choke' },
        { id: 'gt_n_09', value: 400, clue: 'A guard pass driving your knee across your opponent\'s thigh while gripping the collar and hip — named for the slicing motion.', answer: 'Knee Cut Pass (Knee Slice)' },
        { id: 'gt_n_10', value: 400, clue: 'Using two collar grips with thumbs inserted to cross the lapels across the throat — applied from inside the guard.', answer: 'Cross Choke (Scissor Choke)' },
        // ── 600 ──────────────────────────────────
        { id: 'gt_n_11', value: 600, clue: 'A gi choke applied from the turtle position — named for the circular walking motion you make with your body as you tighten the collar.', answer: 'Clock Choke' },
        { id: 'gt_n_12', value: 600, clue: 'Feeding the gi lapel under your opponent\'s leg and back to your own hand creates bindings in this guard — popularized by Keenan Cornelius.', answer: 'Worm Guard (Lapel Guard)' },
        { id: 'gt_n_13', value: 600, clue: 'From side control, sliding two hands along the collar (one palm-up, one palm-down) to create a squeezing choke across the neck.', answer: 'Baseball Bat Choke' },
        { id: 'gt_n_14', value: 600, clue: 'Using a thumb-in grip on your opponent\'s belt to control their hips during a guard pass is called ___ control.', answer: 'Belt Control' },
        { id: 'gt_n_15', value: 600, clue: 'The gi choke where your arm snakes under your opponent\'s chin from a side or top position using a looping arm motion.', answer: 'Loop Choke (Sliding Collar Choke)' },
        // ── 800 ──────────────────────────────────
        { id: 'gt_n_16', value: 800, clue: 'The IBJJF-banned grip that loops the gi sleeve fabric over multiple fingers — dangerous for the hand and called a ___ grip.', answer: 'Monkey Grip (Suicide Grip)' },
        { id: 'gt_n_17', value: 800, clue: 'The D\'Arce-style choke applied with the gi lapel — threading the lapel under the arm instead of the arm itself — is called a ___.', answer: 'Brabo Choke' },
        { id: 'gt_n_18', value: 800, clue: 'The Portuguese word for the gi\'s collar — and the correct term for the fabric used in collar chokes.', answer: 'Gola (or Lapela)' },
        { id: 'gt_n_19', value: 800, clue: 'IBJJF competition requires gi jackets to be long enough — specifically, they must extend at least a palm\'s length below the ___.', answer: 'Waist (or Hip)' },
        { id: 'gt_n_20', value: 800, clue: 'The gi choke applied from top half guard where the opponent\'s own lapel is threaded under their arm — sometimes called the brabo choke.', answer: 'Gi Choke from Half Guard (or Brabo / D\'Arce with Lapel)' },
        // ── 1000 ──────────────────────────────────
        { id: 'gt_n_21', value: 1000, clue: 'The concept that gi grips should be fought at the wrist level BEFORE they are established — attacking the hand before it grips — is called ___.', answer: 'Grip Breaking (Grip Fighting)' },
        { id: 'gt_n_22', value: 1000, clue: 'The Portuguese name "Mata Leão" — given to the rear naked choke and back control position — translates to this in English.', answer: 'Kill the Lion (Lion Killer)' },
        { id: 'gt_n_23', value: 1000, clue: 'The lapel guard system — using multiple lapel feedbacks and bindings — fundamentally changed high-level gi competition when it appeared around this year.', answer: '2013–2014' },
        { id: 'gt_n_24', value: 1000, clue: 'In gi passing, using the opponent\'s pants grip to slow their hips and prevent guard recovery is specifically called controlling their ___.', answer: 'Hip Movement (Leg Mobility)' },
        { id: 'gt_n_25', value: 1000, clue: 'The gi collar choke from mount — inserting both thumbs deep into opposite collars and crossing the arms to cut off blood flow — is this classic technique.', answer: 'Cross Collar Choke from Mount' },
      ]
    },

    /* ───────────────────────────────────────────────
       CATEGORY 10 — NO-GI  (no-gi concepts)
    ─────────────────────────────────────────────── */
    {
      id: 'no_gi',
      name: 'No-Gi',
      questions: [
        // ── 200 ──────────────────────────────────
        { id: 'ng_n_01', value: 200, clue: 'Without cloth grips, no-gi grapplers use these types of body-contact grips instead.', answer: 'Wrist, Neck, or Body Grips' },
        { id: 'ng_n_02', value: 200, clue: 'Your arm passes under your opponent\'s armpit from behind — the dominant no-gi grip for control and attacks.', answer: 'Underhook' },
        { id: 'ng_n_03', value: 200, clue: 'The opposite of an underhook — your arm passes over the top of your opponent\'s arm from the outside.', answer: 'Overhook (Whizzer)' },
        { id: 'ng_n_04', value: 200, clue: 'The tight compression shirt worn during no-gi training — it protects the skin and reduces friction.', answer: 'Rash Guard' },
        { id: 'ng_n_05', value: 200, clue: 'The Portuguese name for the rear naked choke — also used as a term for back control in many academies.', answer: 'Mata Leão' },
        // ── 400 ──────────────────────────────────
        { id: 'ng_n_06', value: 400, clue: 'Without a gi to grip, maintaining back control relies heavily on locking both arms around the torso in this grip.', answer: 'Seatbelt Grip' },
        { id: 'ng_n_07', value: 400, clue: 'In no-gi, the front headlock position simultaneously threatens three chokes: guillotine, D\'Arce, and this one.', answer: 'Anaconda Choke' },
        { id: 'ng_n_08', value: 400, clue: 'The no-gi leg entanglement called the "saddle," "honey hole," or "411" creates threats for both inside and outside ___.', answer: 'Heel Hooks' },
        { id: 'ng_n_09', value: 400, clue: 'The shin-on-shin guard used in no-gi creates distance and elevation to set up sweeps and leg attack entries from a sitting position.', answer: 'Shin-to-Shin Guard' },
        { id: 'ng_n_10', value: 400, clue: 'In no-gi, the lack of cloth friction means slippery skin makes guards harder to maintain — this makes keeping your ___ tight to your opponent critical.', answer: 'Hip (Hip-to-Hip Connection)' },
        // ── 600 ──────────────────────────────────
        { id: 'ng_n_11', value: 600, clue: 'The no-gi front headlock position that controls the neck and one arm — setting up chokes from multiple angles.', answer: 'Front Headlock' },
        { id: 'ng_n_12', value: 600, clue: 'The leg entanglement considered most dangerous by many because it directly threatens the medial knee ligaments — including the ACL and MCL.', answer: 'Inside Heel Hook' },
        { id: 'ng_n_13', value: 600, clue: 'Gordon Ryan\'s back control system became famous for one key detail: eliminating the opponent\'s ability to do this to escape.', answer: 'Turn In (Face You)' },
        { id: 'ng_n_14', value: 600, clue: 'In ADCC, heel hooks are entirely legal at all levels. In IBJJF, they are restricted to this belt level in gi competition.', answer: 'Black Belt' },
        { id: 'ng_n_15', value: 600, clue: 'The John Danaher "Death Squad" leg lock system was built on the concept that leg attacks should be initiated from ___ position, not from the bottom.', answer: 'Top' },
        // ── 800 ──────────────────────────────────
        { id: 'ng_n_16', value: 800, clue: 'The basic leg entanglement position — one foot inside the hip, one foot outside the thigh — is called ___ garami.', answer: 'Ashi Garami' },
        { id: 'ng_n_17', value: 800, clue: 'The "Rubber Guard" system — using legs to control the opponent\'s posture in closed guard — was developed by this American grappler.', answer: 'Eddie Bravo' },
        { id: 'ng_n_18', value: 800, clue: 'The concept of "leg lock reaping" describes a forbidden position where the attacker\'s knee crosses the opponent\'s ___.', answer: 'Centerline (Midline)' },
        { id: 'ng_n_19', value: 800, clue: 'In no-gi, the term "new wave jiu-jitsu" refers to the modern movement that emphasizes this submission system above positional control.', answer: 'Leg Locks' },
        { id: 'ng_n_20', value: 800, clue: 'The EBI overtime format alternates between two attacking positions — the back and the spider web — with the winner being whoever achieves control or submission in the ___ time.', answer: 'Fastest (Shortest)' },
        // ── 1000 ──────────────────────────────────
        { id: 'ng_n_21', value: 1000, clue: 'This New Zealand-born BJJ coach and philosopher — known as the "Danaher Death Squad" coach — revolutionized leg lock theory and back control systems.', answer: 'John Danaher' },
        { id: 'ng_n_22', value: 1000, clue: 'The no-gi grappler widely regarded as the best pound-for-pound competitor of his generation — dominant in both ADCC and EBI competition.', answer: 'Gordon Ryan' },
        { id: 'ng_n_23', value: 1000, clue: 'True or false: the outside heel hook is considered MORE dangerous than the inside heel hook.', answer: 'False (Inside is More Dangerous)' },
        { id: 'ng_n_24', value: 1000, clue: 'The leg entanglement called the "saddle" or "honey hole" gets its alternative name "411" from the four-limb ___ it creates on the opponent\'s leg.', answer: 'Hip Entanglement (or Control)' },
        { id: 'ng_n_25', value: 1000, clue: 'Because no-gi leg locks finish extremely fast from the moment of entry, defenders must apply this principle to have any chance of escape.', answer: 'Early Defense (React Immediately)' },
      ]
    },

    /* ───────────────────────────────────────────────
       CATEGORY 11 — THE ROOTS  (history & culture)
    ─────────────────────────────────────────────── */
    {
      id: 'the_roots',
      name: 'The Roots',
      questions: [
        // ── 200 ──────────────────────────────────
        { id: 'tr_n_01', value: 200, clue: 'The founding family whose surname is synonymous with Brazilian Jiu-Jitsu worldwide.', answer: 'Gracie' },
        { id: 'tr_n_02', value: 200, clue: 'The country where BJJ was developed and refined into its current form in the 20th century.', answer: 'Brazil' },
        { id: 'tr_n_03', value: 200, clue: 'The Japanese martial art from which BJJ primarily descended — founded by Jigoro Kano in the 1880s.', answer: 'Judo (Kodokan Judo)' },
        { id: 'tr_n_04', value: 200, clue: 'This Gracie family member competed in the original 1993 UFC and won the tournament — introducing BJJ to America.', answer: 'Royce Gracie' },
        { id: 'tr_n_05', value: 200, clue: 'The five BJJ belt ranks from beginner to expert, in order — white, blue, purple, brown, and this.', answer: 'Black Belt' },
        // ── 400 ──────────────────────────────────
        { id: 'tr_n_06', value: 400, clue: 'The Japanese judoka and wrestler who traveled to Brazil and taught jiu-jitsu to Carlos Gracie — the direct link between judo and BJJ.', answer: 'Mitsuyo Maeda' },
        { id: 'tr_n_07', value: 400, clue: 'The year of the first UFC event, held in Denver, Colorado — which Royce Gracie won using BJJ.', answer: '1993' },
        { id: 'tr_n_08', value: 400, clue: 'This Gracie family member is credited with adapting jiu-jitsu specifically for smaller, weaker practitioners — considered a true founder of BJJ.', answer: 'Helio Gracie' },
        { id: 'tr_n_09', value: 400, clue: 'The Brazilian city where most early Gracie academies were located and where BJJ was first widely practiced.', answer: 'Rio de Janeiro' },
        { id: 'tr_n_10', value: 400, clue: 'The highest belt in BJJ — above brown belt — awarded after many years of black belt experience. It is this color.', answer: 'Red Belt (or Coral Belt)' },
        // ── 600 ──────────────────────────────────
        { id: 'tr_n_11', value: 600, clue: 'The organization that runs the largest global BJJ competition circuit and sets international belt promotion standards.', answer: 'IBJJF (International Brazilian Jiu-Jitsu Federation)' },
        { id: 'tr_n_12', value: 600, clue: 'This BJJ pioneer — not a Gracie — brought affordable jiu-jitsu to Rio de Janeiro\'s poorer communities, creating an independent lineage.', answer: 'Oswaldo Fadda' },
        { id: 'tr_n_13', value: 600, clue: 'Roger Gracie — multiple World Champion — dominated elite competition by finishing opponents with this specific gi submission from mount.', answer: 'Cross Collar Choke (Cross Choke)' },
        { id: 'tr_n_14', value: 600, clue: 'The famous open challenge issued by the Gracie family to practitioners of any martial art to prove BJJ\'s effectiveness.', answer: 'Gracie Challenge' },
        { id: 'tr_n_15', value: 600, clue: 'BJ Penn made history at the 2000 IBJJF World Championship by becoming the first non-Brazilian to win a title — in which division?', answer: 'Open Weight (or Super-Heavyweight)' },
        // ── 800 ──────────────────────────────────
        { id: 'tr_n_16', value: 800, clue: 'Rolls Gracie — who died in a 1982 hang-gliding accident — is credited with being the first Gracie to incorporate these two outside disciplines into BJJ training.', answer: 'Wrestling and Sambo' },
        { id: 'tr_n_17', value: 800, clue: 'The annual IBJJF World Championship — known as the "Mundials" — is currently held in this California city.', answer: 'Long Beach, California' },
        { id: 'tr_n_18', value: 800, clue: 'The São Paulo-based team responsible for producing champions including Rubens "Cobrinha" Charles and Leandro Lo — one of BJJ\'s most decorated competition teams.', answer: 'Alliance' },
        { id: 'tr_n_19', value: 800, clue: 'The IBJJF requires a minimum of this many years at black belt before a competitor can receive their first degree stripe.', answer: '3 Years' },
        { id: 'tr_n_20', value: 800, clue: 'The term for Brazil\'s early no-holds-barred fighting matches — used by the Gracie family to prove BJJ\'s real-world effectiveness before organized MMA.', answer: 'Vale Tudo' },
        // ── 1000 ──────────────────────────────────
        { id: 'tr_n_21', value: 1000, clue: 'The literal English translation of the Japanese characters that make up the word "jiu-jitsu."', answer: 'Gentle Art (or Soft Technique)' },
        { id: 'tr_n_22', value: 1000, clue: 'Helio Gracie\'s philosophy — that BJJ should be effective for a smaller, weaker person — relies on this physical law as the equalizer.', answer: 'Leverage' },
        { id: 'tr_n_23', value: 1000, clue: 'The "Gracie Diet" — a nutritional philosophy promoted alongside BJJ training — was developed by this Gracie family member.', answer: 'Carlos Gracie Sr.' },
        { id: 'tr_n_24', value: 1000, clue: 'Marcus "Buchecha" Almeida became one of the most decorated BJJ competitors in history — dominating the IBJJF Worlds in this weight division.', answer: 'Open Weight (or Super-Heavyweight)' },
        { id: 'tr_n_25', value: 1000, clue: 'The Mendes brothers — Rafael and Guilherme — won multiple IBJJF World titles while making this modern guard system famous at the highest level.', answer: 'Berimbolo (De La Riva System)' },
      ]
    },

    /* ───────────────────────────────────────────────
       CATEGORY 12 — MINDSET  (strategy & concepts)
    ─────────────────────────────────────────────── */
    {
      id: 'mindset',
      name: 'Mindset',
      questions: [
        // ── 200 ──────────────────────────────────
        { id: 'ms_n_01', value: 200, clue: 'The most important safety rule in BJJ: when caught in a submission you cannot escape, you must always do this.', answer: 'Tap (Submit)' },
        { id: 'ms_n_02', value: 200, clue: 'Training at a low, relaxed intensity focused on smooth, connected movement rather than competition effort.', answer: 'Flow Rolling' },
        { id: 'ms_n_03', value: 200, clue: 'Using 100% strength from the moment rolling starts — burning your energy and ignoring technique — is called ___.', answer: 'Muscling (Spazzing)' },
        { id: 'ms_n_04', value: 200, clue: 'Repeating a single technique many times against a cooperative partner to build automatic muscle memory.', answer: 'Drilling' },
        { id: 'ms_n_05', value: 200, clue: 'The most reliable predictor of BJJ progress: training regularly over time, even when you don\'t feel motivated.', answer: 'Consistency' },
        // ── 400 ──────────────────────────────────
        { id: 'ms_n_06', value: 400, clue: 'A higher belt should be able to start from any position — even a bad one — and work their way to offense. This is called having a ___ game.', answer: 'Complete (Well-Rounded) Game' },
        { id: 'ms_n_07', value: 400, clue: 'The BJJ principle that says you should always establish a dominant position BEFORE attempting a submission.', answer: 'Position Before Submission' },
        { id: 'ms_n_08', value: 400, clue: 'Deliberately sparring from positions you are bad at — even when you could avoid them — accelerates learning through this.', answer: 'Adversity Training (Problem Solving)' },
        { id: 'ms_n_09', value: 400, clue: 'A competition game plan means entering a match with predetermined ___ and ___ you intend to implement.', answer: 'Positions and Attacks' },
        { id: 'ms_n_10', value: 400, clue: 'The psychological state of staying calm when caught in a dangerous position — rather than panicking and creating openings.', answer: 'Composure' },
        // ── 600 ──────────────────────────────────
        { id: 'ms_n_11', value: 600, clue: 'The principle that each offensive move should simultaneously threaten two outcomes — making a single defense impossible — is called the ___.', answer: 'Two-Attack Principle' },
        { id: 'ms_n_12', value: 600, clue: 'The four-stage framework for BJJ skill development — survival, escape, control, attack — was written by this Brazilian competitor in his famous book.', answer: 'Saulo Ribeiro (Jiu-Jitsu University)' },
        { id: 'ms_n_13', value: 600, clue: 'The concept that small, consistent technical improvements over years compound into a complete, functional game — called the ___ mindset.', answer: 'Long Game (Longevity)' },
        { id: 'ms_n_14', value: 600, clue: 'Doing just enough to win by points without finishing — called "playing the points game" — is a competition strategy also called ___.', answer: 'Points Game (Gaming the Rules)' },
        { id: 'ms_n_15', value: 600, clue: 'The principle that every failed submission attempt should threaten a positional improvement — and every position should threaten a submission — is called ___ offense.', answer: 'Linked (Combination) Offense' },
        // ── 800 ──────────────────────────────────
        { id: 'ms_n_16', value: 800, clue: 'Marcelo Garcia\'s teaching philosophy centers on "feeling" your opponent\'s energy and movement before reacting — this concept in grappling.', answer: 'Sensitivity (Connection)' },
        { id: 'ms_n_17', value: 800, clue: 'The strategic idea of "controlling the tempo" — making your opponent react to your movement first rather than the reverse.', answer: 'Forcing the Center (Tempo Control)' },
        { id: 'ms_n_18', value: 800, clue: 'The most important reason to compete — beyond winning — for your development as a BJJ practitioner.', answer: 'Testing Under Pressure' },
        { id: 'ms_n_19', value: 800, clue: 'Injury prevention in BJJ comes primarily from this habit — not strength, flexibility, or conditioning alone.', answer: 'Tapping Early (or Ego Control)' },
        { id: 'ms_n_20', value: 800, clue: 'The term for a competitor\'s personalized system of preferred positions, attacks, and sequences — built over years of training and competition.', answer: 'Game (A-Game)' },
        // ── 1000 ──────────────────────────────────
        { id: 'ms_n_21', value: 1000, clue: 'Helio Gracie\'s belief that BJJ should work for anyone regardless of size relies on this as the great equalizer.', answer: 'Leverage' },
        { id: 'ms_n_22', value: 1000, clue: 'The concept described by John Danaher: a submission attempt should always improve your position whether it succeeds or fails — called ___.', answer: 'No Wasted Movement (Position-Based Submission)' },
        { id: 'ms_n_23', value: 1000, clue: 'Reading your opponent\'s next move from a weight shift or grip before they complete it — and countering preemptively — is called ___.', answer: 'Anticipation (Reading Reactions)' },
        { id: 'ms_n_24', value: 1000, clue: 'The four-part escape toolkit available on the bottom: bridge, shrimp, granby roll, and this fourth movement.', answer: 'Technical Stand-Up' },
        { id: 'ms_n_25', value: 1000, clue: 'Saulo Ribeiro\'s philosophy states that a white belt\'s only job on the mat is to do this — before learning any offense.', answer: 'Survive (Survival)' },
      ]
    }
  ], // end categories

  /**
   * Final Jeopardy prompts — at least 15 for 10+ rounds.
   * Each round uses the next unused one in order.
   */
  finalJeopardy: [
    {
      id: 'fj_n_01',
      category: 'Mount Master',
      clue: 'This multiple-time IBJJF World Champion is famous for submitting elite black belt opponents with the collar choke from mount — a classical technique rarely seen at the highest level.',
      answer: 'Roger Gracie'
    },
    {
      id: 'fj_n_02',
      category: 'The Great Equalizer',
      clue: 'Helio Gracie adapted judo to work for smaller, weaker practitioners by relying on this physical principle — which is also the philosophical foundation of BJJ.',
      answer: 'Leverage'
    },
    {
      id: 'fj_n_03',
      category: 'Where It All Began',
      clue: 'This Japanese judoka and catch wrestler traveled to Brazil and taught jiu-jitsu to Carlos Gracie — directly creating what would become Brazilian Jiu-Jitsu.',
      answer: 'Mitsuyo Maeda'
    },
    {
      id: 'fj_n_04',
      category: 'Historic Night',
      clue: 'The year the first UFC was held in Denver, Colorado — where Royce Gracie won the tournament and introduced BJJ to a worldwide audience.',
      answer: '1993'
    },
    {
      id: 'fj_n_05',
      category: 'The Blue Belt Blues',
      clue: 'The average BJJ practitioner spends more time at this belt than any other — it is often called the rank where most people quit.',
      answer: 'Blue Belt'
    },
    {
      id: 'fj_n_06',
      category: 'No-Gi King',
      clue: 'This American grappler — widely considered the best no-gi competitor of his generation — made back control nearly inescapable and dominated ADCC competition.',
      answer: 'Gordon Ryan'
    },
    {
      id: 'fj_n_07',
      category: 'Top Score',
      clue: 'In IBJJF competition, this is the highest-scoring position — worth 4 points — requiring both feet inserted between your opponent\'s thighs.',
      answer: 'Back Control (Rear Mount)'
    },
    {
      id: 'fj_n_08',
      category: 'The Coach Behind the Champions',
      clue: 'This New Zealand-born BJJ coach led the "Danaher Death Squad" and revolutionized the sport by creating a systematic leg lock and back control framework.',
      answer: 'John Danaher'
    },
    {
      id: 'fj_n_09',
      category: 'First Move',
      clue: 'Of all the fundamental escape movements in BJJ — bridge, granby roll, technical standup — this one is considered the single most universal and is the first thing taught to white belts.',
      answer: 'Shrimping (Hip Escape)'
    },
    {
      id: 'fj_n_10',
      category: 'The Most Common Tap',
      clue: 'Applied from behind, with the forearm across the throat — this is the most commonly successful submission in BJJ and is called "mata leão" in Portuguese.',
      answer: 'Rear Naked Choke'
    },
    {
      id: 'fj_n_11',
      category: 'Spinning Game',
      clue: 'These two brothers from Brazil became IBJJF World Champions while making this specific guard and inversion system famous at the highest level of competition.',
      answer: 'Berimbolo (Mendes Brothers — De La Riva System)'
    },
    {
      id: 'fj_n_12',
      category: 'Position Before Submission',
      clue: 'One of the first principles taught in every BJJ school — you should never attempt a finishing technique until you have first established this.',
      answer: 'Dominant Position'
    },
    {
      id: 'fj_n_13',
      category: 'The Gentle Art\'s Real Name',
      clue: 'The English translation of "arte suave" — the Portuguese phrase BJJ practitioners use to describe their art — and also the literal meaning of the Japanese word "jiu-jitsu."',
      answer: 'The Gentle Art (or Soft Technique)'
    },
    {
      id: 'fj_n_14',
      category: 'Deep Half Danger',
      clue: 'This Brazilian BJJ black belt and multiple-time World Champion became famous for making deep half guard — specifically the underhook back take — a world-class competition weapon.',
      answer: 'Bernardo Faria'
    },
    {
      id: 'fj_n_15',
      category: 'Survive First',
      clue: 'In Saulo Ribeiro\'s four-stage framework for BJJ development, this is the very first stage — before escape, control, or attack — and it is a white belt\'s only real job on the mat.',
      answer: 'Survival'
    }
  ]

}; // end BJJ_QUESTION_BANK
