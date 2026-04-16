/**
 * BJJ Jeopardy - Question Bank
 * Version: 1.0
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
  version: '1.0',

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
        { id: 'ot_01', value: 200, clue: 'You straddle your flat opponent, sitting on their chest with one leg on each side of their body.', answer: 'Mount' },
        { id: 'ot_02', value: 200, clue: 'You lie perpendicular across your opponent\'s upper body, chest-to-chest, controlling their head and far arm.', answer: 'Side Control' },
        { id: 'ot_03', value: 200, clue: 'Behind your opponent, legs hooked around their hips, arms controlling their upper body — this dominant rear position.', answer: 'Back Control' },
        { id: 'ot_04', value: 200, clue: 'Your knee presses firmly into your opponent\'s stomach while you balance above them.', answer: 'Knee on Belly' },
        { id: 'ot_05', value: 200, clue: 'Your opponent is on hands and knees with head tucked; you control their back from above.', answer: 'Turtle (Top Turtle)' },
        // ── 400 ──────────────────────────────────
        { id: 'ot_06', value: 400, clue: 'This mount sub-position has your knees scooted up near your opponent\'s armpits for tighter control and attack access.', answer: 'High Mount' },
        { id: 'ot_07', value: 400, clue: 'Rotating 180° from side control so you now face your opponent\'s feet creates this position.', answer: 'North-South' },
        { id: 'ot_08', value: 400, clue: 'This judo-origin pin has you sitting at your opponent\'s hip, trapping their head in your armpit and controlling their arm.', answer: 'Kesa Gatame' },
        { id: 'ot_09', value: 400, clue: 'One foot flat on the mat, one knee raised — this mount variation isolates an arm and forms a body shape matching a letter.', answer: 'S-Mount' },
        { id: 'ot_10', value: 400, clue: 'From back control, this grip wraps one arm over the shoulder and the other under the opposite armpit, named after a vehicle safety device.', answer: 'Seatbelt Grip' },
        // ── 600 ──────────────────────────────────
        { id: 'ot_11', value: 600, clue: 'In back control, your feet are inserted between your opponent\'s thighs to anchor the position — these are called your ___.', answer: 'Hooks' },
        { id: 'ot_12', value: 600, clue: 'Crossing your feet together in back control puts you at risk of losing this lower-body submission.', answer: 'Ankle Lock' },
        { id: 'ot_13', value: 600, clue: 'The mount escape where the bottom player bridges strongly and rolls while trapping your arm is called this — the Portuguese word means "bridge."', answer: 'Upa' },
        { id: 'ot_14', value: 600, clue: 'From side control, stepping your near knee over your opponent\'s body to land sitting on their chest is this common transition.', answer: 'Mount Transition' },
        { id: 'ot_15', value: 600, clue: 'As your opponent turns into you from back control, you maintain position by continuously doing this with your hips.', answer: 'Following the Hip' },
        // ── 800 ──────────────────────────────────
        { id: 'ot_16', value: 800, clue: 'This reverse kesa-gatame variation has you facing your opponent\'s feet while controlling their near arm between your knees.', answer: 'Reverse Kesa Gatame' },
        { id: 'ot_17', value: 800, clue: 'In ultra-high mount, your knees have moved past your opponent\'s shoulders — this severely limits their ability to use what defense?', answer: 'Frame (Arms)' },
        { id: 'ot_18', value: 800, clue: 'When you achieve back control and your opponent turns into you, completing the full rotation and ending in this position is one common outcome.', answer: 'Mount' },
        { id: 'ot_19', value: 800, clue: 'In top turtle, this arm-and-neck wrapping grip sets up the clock choke and back take.', answer: 'Crucifix' },
        { id: 'ot_20', value: 800, clue: 'This concept describes using your forearms and hands to create distance against a dominant top opponent.', answer: 'Framing' },
        // ── 1000 ──────────────────────────────────
        { id: 'ot_21', value: 1000, clue: 'The Japanese umbrella term for ground-control/pinning techniques used in judo and carried into BJJ.', answer: 'Osaekomi Waza' },
        { id: 'ot_22', value: 1000, clue: 'In BJJ positional theory, deliberately giving up mount to enter a leg lock position is an example of this concept.', answer: 'Trading Position' },
        { id: 'ot_23', value: 1000, clue: 'A skilled top player "shuts down" the bottom player by eliminating their ability to create this — the space needed for shrimping and framing.', answer: 'Space' },
        { id: 'ot_24', value: 1000, clue: 'In back control, this "technical" method of maintaining position when your opponent turns relies on keeping your chest glued to their back and stepping over their near hip.', answer: 'Back Mount Retention' },
        { id: 'ot_25', value: 1000, clue: 'The four-part escape toolbox available to someone on the bottom: bridge, shrimp, granby roll, and __.', answer: 'Stand Up (Technical Stand)' },
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
        { id: 'to_01', value: 200, clue: 'You hyperextend your opponent\'s elbow by posting their arm across your hip and lifting your hips.', answer: 'Armbar' },
        { id: 'to_02', value: 200, clue: 'Applied from behind, this choke uses your forearm across the throat and your bicep to compress both sides of the neck.', answer: 'Rear Naked Choke' },
        { id: 'to_03', value: 200, clue: 'A figure-four grip that externally rotates the shoulder — often called the "can opener of the shoulder."', answer: 'Kimura' },
        { id: 'to_04', value: 200, clue: 'Your legs wrap around the opponent\'s neck and one arm, creating a triangular frame that chokes them.', answer: 'Triangle Choke' },
        { id: 'to_05', value: 200, clue: 'This front-facing choke uses your arm or forearm under your opponent\'s chin to compress their neck.', answer: 'Guillotine' },
        // ── 400 ──────────────────────────────────
        { id: 'to_06', value: 400, clue: 'Like a Kimura but the arm bends the opposite direction — across the chest toward the opposite shoulder.', answer: 'Americana' },
        { id: 'to_07', value: 400, clue: 'Your legs wrap your opponent\'s arm from guard, and your hip raises to create shoulder torque on the trapped arm.', answer: 'Omoplata' },
        { id: 'to_08', value: 400, clue: 'A front headlock choke that passes under the chin and wraps behind the neck — popular in wrestling crossovers.', answer: 'D\'Arce Choke' },
        { id: 'to_09', value: 400, clue: 'Named after a body part between the elbow and armpit, this compression submission attacks the upper arm.', answer: 'Bicep Slicer' },
        { id: 'to_10', value: 400, clue: 'This arm triangle — performed with your head and arm trapping the opponent\'s arm and neck — is also called a Kata Gatame.', answer: 'Head and Arm Choke' },
        // ── 600 ──────────────────────────────────
        { id: 'to_11', value: 600, clue: 'A headlock choke similar to the D\'Arce but entering from the bottom or opposite side, threading under the far arm.', answer: 'Anaconda Choke' },
        { id: 'to_12', value: 600, clue: 'A gi-specific choke: you grip one collar and pull the opposite lapel under the neck, creating a crossbow shape.', answer: 'Bow and Arrow Choke' },
        { id: 'to_13', value: 600, clue: 'Performed inside the closed guard, this choke uses your sleeve or your own gi to create a loop that catches the neck.', answer: 'Ezekiel Choke' },
        { id: 'to_14', value: 600, clue: 'A calf-to-shin compression that bends the knee in the wrong direction — it\'s the legs\' version of a bicep slicer.', answer: 'Calf Slicer' },
        { id: 'to_15', value: 600, clue: 'This foot-lock submission hyperextends the knee by applying force to the Achilles tendon.', answer: 'Straight Ankle Lock' },
        // ── 800 ──────────────────────────────────
        { id: 'to_16', value: 800, clue: 'The rotational heel hook that cranks the foot and knee toward the outside of the body.', answer: 'Outside Heel Hook' },
        { id: 'to_17', value: 800, clue: 'The inside heel hook rotates the heel toward the ___ of the opponent\'s body.', answer: 'Inside (Medial)' },
        { id: 'to_18', value: 800, clue: 'Named after a twisting spine crank, this submission is popularized in no-gi and requires back control to set up.', answer: 'Twister' },
        { id: 'to_19', value: 800, clue: 'Applied to the knee from a top leg-lock position, this straight compression submission locks both ends of the knee joint.', answer: 'Kneebar' },
        { id: 'to_20', value: 800, clue: 'A choke using a gi that attacks through the small space between your own upper arm and your opponent\'s head — often done from side control.', answer: 'Baseball Bat Choke' },
        // ── 1000 ──────────────────────────────────
        { id: 'to_21', value: 1000, clue: 'This wristlock submission hyperextends or torques the wrist joint and is one of the only submissions not requiring a specific leg or arm position.', answer: 'Wristlock' },
        { id: 'to_22', value: 1000, clue: 'This submission attacks the toehold — compressing the top of the foot — and is closely related to the heel hook in terms of forbidden status at some events.', answer: 'Toehold' },
        { id: 'to_23', value: 1000, clue: 'Sometimes called the "electric chair," this leg lock from half guard positions attacks both the groin and knee simultaneously.', answer: 'Electric Chair' },
        { id: 'to_24', value: 1000, clue: 'The spinal lock known as the "Twister" was popularized in BJJ by this American grappler and former UFC fighter.', answer: 'Eddie Bravo' },
        { id: 'to_25', value: 1000, clue: 'A choke that attacks the brachial plexus nerve cluster rather than the arteries or trachea — it causes a temporary stunning sensation.', answer: 'Brachial Plexus Choke (Neck Crank)' },
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
        { id: 'gg_01', value: 200, clue: 'The most fundamental guard: your legs are locked behind your opponent\'s back while they are between your knees.', answer: 'Closed Guard' },
        { id: 'gg_02', value: 200, clue: 'Any guard where your ankles are NOT locked together behind your opponent is broadly called this.', answer: 'Open Guard' },
        { id: 'gg_03', value: 200, clue: 'Only one of your legs is over your opponent in this guard — you control one of their legs with your knee and foot.', answer: 'Half Guard' },
        { id: 'gg_04', value: 200, clue: 'Your feet are on your opponent\'s hips and both hands grip their sleeves — this guard\'s feet look like a spider\'s legs.', answer: 'Spider Guard' },
        { id: 'gg_05', value: 200, clue: 'You hook your ankle around the outside of your opponent\'s leg while controlling their sleeve from below.', answer: 'De La Riva Guard' },
        // ── 400 ──────────────────────────────────
        { id: 'gg_06', value: 400, clue: 'Your feet are planted on your opponent\'s hips, pushing and pulling to control distance and angle.', answer: 'Butterfly Guard' },
        { id: 'gg_07', value: 400, clue: 'Both feet are placed under your opponent\'s knees, forming a shape that gives this guard its name.', answer: 'X-Guard' },
        { id: 'gg_08', value: 400, clue: 'Your foot is hooked around the back of your opponent\'s knee from the inside — a more inverted version of De La Riva.', answer: 'Reverse De La Riva Guard' },
        { id: 'gg_09', value: 400, clue: 'A half-guard variation where you face away and use a knee shield to prevent smashing.', answer: 'Z-Guard (Knee Shield)' },
        { id: 'gg_10', value: 400, clue: 'In this guard your legs weave through your opponent\'s arms using the gi to create entanglements called "lasso."', answer: 'Lasso Guard' },
        // ── 600 ──────────────────────────────────
        { id: 'gg_11', value: 600, clue: 'Both legs are intertwined with one of your opponent\'s legs, creating equal-opportunity leg lock threats from bottom.', answer: '50/50 Guard' },
        { id: 'gg_12', value: 600, clue: 'From De La Riva, reaching under both legs and hooking creates this elevated sweeping guard.', answer: 'Berimbolo (or Deep De La Riva)' },
        { id: 'gg_13', value: 600, clue: 'Sitting up into your opponent, controlling their same-side wrist and shoulder — this guard puts you in a wrestling-like position.', answer: 'Sit-Up Guard (or Single Leg X entry)' },
        { id: 'gg_14', value: 600, clue: 'This guard variant uses the gi lapel fed through the legs to create unique wrapping threats — named after a worm-shaped movement.', answer: 'Worm Guard' },
        { id: 'gg_15', value: 600, clue: 'Your knee is between you and your opponent while you are in half guard, acting as a shield — the term for this specific half-guard position.', answer: 'Deep Half Guard' },
        // ── 800 ──────────────────────────────────
        { id: 'gg_16', value: 800, clue: 'A bottom guard position with knees up and feet inside where you fight for inside position and underhooks before opening.', answer: 'Headquarters Position' },
        { id: 'gg_17', value: 800, clue: 'Single Leg X guard attacks the outside of this joint when you use the near-arm hook combined with a hip bump.', answer: 'Knee (Knee Lock)' },
        { id: 'gg_18', value: 800, clue: 'This no-gi guard attaches your legs around your opponent\'s single leg while you control their wrist and ankle.', answer: 'Single Leg X Guard (Ashi Garami)' },
        { id: 'gg_19', value: 800, clue: 'The "93 Guard" is another name for what half-guard variant popularized by Cassio Werneck?', answer: '93 Guard (Shin-to-Shin Half Guard)' },
        { id: 'gg_20', value: 800, clue: 'In this inverted guard position your hips are above your head, threatening back takes and leg locks simultaneously.', answer: 'Inverted Guard (Upside Down Guard)' },
        // ── 1000 ──────────────────────────────────
        { id: 'gg_21', value: 1000, clue: 'The systematic guard game involving inversion, back takes, and leg entanglements pioneered largely by Mendes brothers and later Ryan Hall.', answer: 'Berimbolo System' },
        { id: 'gg_22', value: 1000, clue: 'Rubber Guard\'s "mission control" position was developed and named by this American BJJ black belt and grappling innovator.', answer: 'Eddie Bravo' },
        { id: 'gg_23', value: 1000, clue: 'Guard retention in BJJ refers to your ability to do this when your opponent attempts to pass.', answer: 'Re-Establish Guard' },
        { id: 'gg_24', value: 1000, clue: 'The leg configuration in the back system — one leg over the hip, one under — that controls your opponent\'s hip and sets up leg locks is called ___ Garami.', answer: 'Ashi Garami' },
        { id: 'gg_25', value: 1000, clue: 'This guard concept — "inside position" — means controlling this part of your opponent\'s body to prevent guard passing.', answer: 'Inside of the Knee (or Hip / Inside Track)' },
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
        { id: 'si_01', value: 200, clue: 'From closed guard, you use one leg to kick your opponent\'s leg out and one hand to push their knee — this garden-tool-named sweep.', answer: 'Scissor Sweep' },
        { id: 'si_02', value: 200, clue: 'From closed guard, you bridge up into your opponent, post on your hand, and use the momentum to roll them over.', answer: 'Hip Bump Sweep' },
        { id: 'si_03', value: 200, clue: 'From butterfly guard, you fall to the side and lever your opponent over with one hooked foot under their thigh.', answer: 'Butterfly Sweep' },
        { id: 'si_04', value: 200, clue: 'From De La Riva guard, you pull their ankle and push their knee to topple them to the outside.', answer: 'De La Riva Sweep' },
        { id: 'si_05', value: 200, clue: 'From half guard, you underhook and roll underneath your opponent to reverse position — this is called the old school or ___ sweep.', answer: 'Old School Sweep (or Knee Tap)' },
        // ── 400 ──────────────────────────────────
        { id: 'si_06', value: 400, clue: 'From spider guard, pulling both sleeves and pushing both feet simultaneously topples your opponent straight backward — the name of this sweep.', answer: 'Spider Guard Sweep (Lumberjack Sweep)' },
        { id: 'si_07', value: 400, clue: 'From guard, swinging both legs over your head and onto your opponent\'s shoulder while gripping the ankle — the windmill or ___ sweep.', answer: 'Pendulum Sweep (or Flower Sweep)' },
        { id: 'si_08', value: 400, clue: 'You grip your opponent\'s far ankle and sit up, pulling it toward you to unbalance them to the outside in this sweep.', answer: 'Ankle Sweep (or Homer Simpson Sweep)' },
        { id: 'si_09', value: 400, clue: 'From a bottom position, lifting your opponent with both butterfly hooks while falling to your back sweeps them over you.', answer: 'Butterfly Elevator Sweep' },
        { id: 'si_10', value: 400, clue: 'This half-guard sweep has you blocking the near knee with your shin and rolling toward the blocked leg.', answer: 'Knee Tap Sweep' },
        // ── 600 ──────────────────────────────────
        { id: 'si_11', value: 600, clue: 'From X-guard, pushing one leg and pulling the other creates rotation that sends your opponent one direction — this basic X-guard sweep.', answer: 'X-Guard Sweep' },
        { id: 'si_12', value: 600, clue: 'A half-guard sweep where you come up to a wrestling base under your opponent and drive them sideways.', answer: 'Deep Half Sweep' },
        { id: 'si_13', value: 600, clue: 'This closed guard sweep grabs both of your opponent\'s ankles and pulls them forward so they fall face-first.', answer: 'Sickle Sweep (or Double Ankle Sweep)' },
        { id: 'si_14', value: 600, clue: 'A guard-to-back-take series that starts with an inversion under the opponent — named after a city in Brazil.', answer: 'Berimbolo' },
        { id: 'si_15', value: 600, clue: 'From sit-up guard, this single-leg wrestling technique takes your opponent down instead of sweeping from the floor.', answer: 'Single Leg Takedown (from guard)' },
        // ── 800 ──────────────────────────────────
        { id: 'si_16', value: 800, clue: 'The competition term for a successful sweep: it scores you this many points in IBJJF rules.', answer: '2 Points' },
        { id: 'si_17', value: 800, clue: 'A reverse De La Riva sweep that uses your top hook to invert your opponent over your body.', answer: 'Reverse De La Riva Back Take (or Sweep)' },
        { id: 'si_18', value: 800, clue: 'From 50/50 guard, rolling back and under your opponent\'s near leg produces this type of directional takedown.', answer: '50/50 Back Take (or Heel Hook entry)' },
        { id: 'si_19', value: 800, clue: 'A closed guard sweep where you fake a triangle to open space, then bump and flip your opponent using your hips.', answer: 'Hip Bump to Kimura or Hip Bump Sweep' },
        { id: 'si_20', value: 800, clue: 'This Tornado sweep uses an inversion and barrel-roll motion, invented and named by a Brazilian competitor — the motion resembles this weather phenomenon.', answer: 'Tornado Sweep' },
        // ── 1000 ──────────────────────────────────
        { id: 'si_21', value: 1000, clue: 'The requirement for a sweep to score in IBJJF competition: you must finish on top AND maintain this.', answer: 'Control (Dominant Position)' },
        { id: 'si_22', value: 1000, clue: 'This elite competitor, known for his berimbolo and deep DLR system, won multiple IBJJF World Championships and popularized modern inversion guard sweeping.', answer: 'Rafael Mendes' },
        { id: 'si_23', value: 1000, clue: 'A sweep that starts with a failed back take and converts the fallen momentum into a top position — demonstrates this BJJ concept.', answer: 'Converting Offense to Sweep' },
        { id: 'si_24', value: 1000, clue: 'Effective sweeping from open guard requires disrupting your opponent\'s base — this is accomplished by attacking two things simultaneously.', answer: 'Balance (Two Points of Contact)' },
        { id: 'si_25', value: 1000, clue: 'From bottom half guard, wrapping under the leg and coming up to a single-leg is the foundation of ___ half guard game.', answer: 'Deep Half Guard (Bernardo Faria)' },
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
        { id: 'ep_01', value: 200, clue: 'The side-control escape where you slide your hips away and insert your knee to re-establish guard.', answer: 'Hip Escape (Shrimp)' },
        { id: 'ep_02', value: 200, clue: 'The mount escape where you bridge hard, trap an arm, and roll your opponent over — named for the Portuguese word for bridge.', answer: 'Upa (Bridge and Roll)' },
        { id: 'ep_03', value: 200, clue: 'This universal first movement in any bottom position: slide your hips backward to create space.', answer: 'Shrimping (Hip Escape)' },
        { id: 'ep_04', value: 200, clue: 'When someone is trying to choke you, protecting your neck by tucking your chin and pushing their elbow is called this.', answer: 'Choke Defense (Tuck Chin)' },
        { id: 'ep_05', value: 200, clue: 'From bottom half guard, turning to face down and recovering your guard is a type of this general movement.', answer: 'Granby Roll (or Guard Recovery)' },
        // ── 400 ──────────────────────────────────
        { id: 'ep_06', value: 400, clue: 'The second mount escape: you elbow-knee your way out to recover half guard when bridging is not possible.', answer: 'Elbow-Knee Escape' },
        { id: 'ep_07', value: 400, clue: 'Posting on one hand and swinging your legs under to stand up in base from bottom is called the ___ standup.', answer: 'Technical Standup' },
        { id: 'ep_08', value: 400, clue: 'When your opponent has your back, turning your chin down and away prevents what type of submission?', answer: 'Rear Naked Choke' },
        { id: 'ep_09', value: 400, clue: 'Removing your opponent\'s hooks one at a time while protecting your neck is the standard escape from this position.', answer: 'Back Control Escape' },
        { id: 'ep_10', value: 400, clue: 'Trapping your opponent\'s near arm in your armpit and bridging onto your shoulder to escape side control is called the near-arm trap or ___ escape.', answer: 'Near-Arm Trap Escape' },
        // ── 600 ──────────────────────────────────
        { id: 'ep_11', value: 600, clue: 'The escape movement named after a martial arts roll: inverting on your shoulder to regain guard or change angles.', answer: 'Granby Roll' },
        { id: 'ep_12', value: 600, clue: 'From knee on belly, bumping your opponent\'s posted foot off the mat and rolling them over is this specific escape.', answer: 'Knee on Belly Escape (Foot Pop)' },
        { id: 'ep_13', value: 600, clue: 'Defending an armbar by clasping your hands together, stacking your weight onto your opponent, and pulling your arm back is called this.', answer: 'Armbar Defense (Stack and Pull)' },
        { id: 'ep_14', value: 600, clue: 'Preventing a triangle choke by posturing up, stacking the opponent\'s hips to the mat, and turning their leg is this defense called.', answer: 'Triangle Defense (Posture and Stack)' },
        { id: 'ep_15', value: 600, clue: 'Turning to face your opponent under side control — often called "wrestling up" — allows you to attack their legs from below.', answer: 'Turtle / Wrestling Up' },
        // ── 800 ──────────────────────────────────
        { id: 'ep_16', value: 800, clue: 'In this back-control escape, you slide down and insert a half guard before turning to face and re-guard.', answer: 'Half Guard Back Escape' },
        { id: 'ep_17', value: 800, clue: 'The "ghost escape" from side control involves turning your head toward your opponent\'s legs and sliding your whole body through this space.', answer: 'Hip Space (Under the Hips)' },
        { id: 'ep_18', value: 800, clue: 'When caught in a leg lock, pointing your toes and pulling your heel straight back — rather than rotating — is the safe defense against this specific submission.', answer: 'Straight Ankle Lock Defense' },
        { id: 'ep_19', value: 800, clue: 'The rule of thumb for escaping heel hooks: you must not rotate your knee, and instead you must do this with the whole leg.', answer: 'Disengage / Move the Whole Body' },
        { id: 'ep_20', value: 800, clue: 'A concept that says the more your opponent\'s hip is disconnected from yours in side control, the easier your escape — this spatial principle is called ___ control.', answer: 'Hip Control' },
        // ── 1000 ──────────────────────────────────
        { id: 'ep_21', value: 1000, clue: 'This escape system from back control uses a specific sequence: seat, drop, hip cut — teaching the back escape logically in steps.', answer: 'Back Control Escape System' },
        { id: 'ep_22', value: 1000, clue: 'The idea that escaping a submission always becomes harder the further it is "on" — you should begin defending at the first sign, not after it\'s fully locked.', answer: 'Early Defense (Tap Early or Escape Early)' },
        { id: 'ep_23', value: 1000, clue: 'In BJJ, creating space to escape is made easier by combining two motions simultaneously: bridging and this.', answer: 'Shrimping' },
        { id: 'ep_24', value: 1000, clue: 'The defensive posture when caught in north-south: both arms in and pressing against your opponent\'s hips creates this defensive structure.', answer: 'Frames' },
        { id: 'ep_25', value: 1000, clue: 'The concept used in advanced guard recovery that says you should reconnect your hip to your opponent\'s hip before attempting to replace guard.', answer: 'Hip Re-Attachment' },
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
        { id: 'td_01', value: 200, clue: 'You shoot in on both of your opponent\'s legs simultaneously and drive them backward to the mat.', answer: 'Double Leg Takedown' },
        { id: 'td_02', value: 200, clue: 'You shoot on only one of your opponent\'s legs, attacking around or through their knee.', answer: 'Single Leg Takedown' },
        { id: 'td_03', value: 200, clue: 'Rather than fighting for a takedown, you sit to the ground and pull your opponent into your guard. This strategy is called ___.', answer: 'Guard Pull' },
        { id: 'td_04', value: 200, clue: 'This hip throw loads your opponent across your hips and rotates them over your body — its judo name translates to "sweeping hip."', answer: 'Ogoshi (Hip Throw)' },
        { id: 'td_05', value: 200, clue: 'You trip your opponent\'s leg while breaking their balance forward — a foot sweep in judo and BJJ.', answer: 'Foot Sweep (Kouchi / Ouchi Gari)' },
        // ── 400 ──────────────────────────────────
        { id: 'td_06', value: 400, clue: 'Ducking under a posted arm and driving your shoulder into your opponent\'s chest to take them down.', answer: 'Duck Under' },
        { id: 'td_07', value: 400, clue: 'Reaching between your opponent\'s legs for the far knee and driving them to the mat — often used in folk wrestling.', answer: 'Firemans Carry' },
        { id: 'td_08', value: 400, clue: 'Lifting your opponent off the mat with both arms around their waist from behind, then driving them to the ground.', answer: 'Rear Body Lock Takedown (Suplex)' },
        { id: 'td_09', value: 400, clue: 'A pick-up that grabs the lead ankle and drives forward, toppling the opponent over their own foot.', answer: 'Ankle Pick' },
        { id: 'td_10', value: 400, clue: 'Elevating the opponent\'s knee with your instep and clearing their leg in this foot-sweep variation from judo.', answer: 'De Ashi Harai (Advancing Foot Sweep)' },
        // ── 600 ──────────────────────────────────
        { id: 'td_11', value: 600, clue: 'A shoulder throw variant used when you have underhook control — you load them on your back and throw.', answer: 'Seoi Nage (Shoulder Throw)' },
        { id: 'td_12', value: 600, clue: 'This single leg takedown variation has you lifting the leg and spinning behind your opponent to trip them.', answer: 'High-Crotch to Back Trip' },
        { id: 'td_13', value: 600, clue: 'A sacrifice throw from judo: you fall to your back and use your foot in the opponent\'s stomach to throw them overhead.', answer: 'Tomoe Nage (Circle Throw)' },
        { id: 'td_14', value: 600, clue: 'The inside trip — connecting your leg behind your opponent\'s to drive them over it — is called this in judo.', answer: 'Ouchi Gari (Major Inner Reap)' },
        { id: 'td_15', value: 600, clue: 'This takedown uses a hand and arm scooping under the opposite shoulder — known as a "high crotch" in wrestling.', answer: 'High Crotch (or Inside Trip)' },
        // ── 800 ──────────────────────────────────
        { id: 'td_16', value: 800, clue: 'The snap-down: pulling your opponent\'s head sharply down and toward you when they over-post creates this follow-up opportunity.', answer: 'Snap-Down to Sprawl or Back Take' },
        { id: 'td_17', value: 800, clue: 'The wrestling stance with one leg forward and one back, hips low and base wide, is called this.', answer: 'Wrestling Stance (Athletic Stance)' },
        { id: 'td_18', value: 800, clue: 'An IBJJF guard pull is legal from standing when you have gripped your opponent. At what distance may you sit to guard?', answer: 'After Gripping' },
        { id: 'td_19', value: 800, clue: 'The takedown technique that changes levels by bending the knees (not the waist) and driving forward with the shoulder.', answer: 'Level Change (Shoot)' },
        { id: 'td_20', value: 800, clue: 'Pinching your opponent\'s thigh between yours as you lift them in a double leg to prevent them spinning off is called this.', answer: 'Knee Pinch' },
        // ── 1000 ──────────────────────────────────
        { id: 'td_21', value: 1000, clue: 'A judo throw named "outer wheel" that sweeps the opponent\'s far leg in a wide arc using your hip as a pivot.', answer: 'Osoto Gari (Major Outer Reap)' },
        { id: 'td_22', value: 1000, clue: 'The wrestling term for defending a shot by sprawling — pushing your hips down and back while driving the opponent\'s head to the mat.', answer: 'Sprawl' },
        { id: 'td_23', value: 1000, clue: 'A "blast double" is a double leg variant where you drive your shoulder through the opponent\'s hips rather than scooping their legs. What makes it distinctive?', answer: 'Forward Drive (No Knee) / Shoulder Through Hips' },
        { id: 'td_24', value: 1000, clue: 'This high-level concept states that the first person to establish inside position on the feet usually wins the takedown.', answer: 'Inside Position / Inside Track' },
        { id: 'td_25', value: 1000, clue: 'After a failed single-leg, transferring to this position — controlling behind the opponent\'s knee and their hip — converts to a takedown.', answer: 'Back Step Trip' },
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
        { id: 'sc_01', value: 200, clue: 'In IBJJF rules, a successful takedown that ends with you on top scores this many points.', answer: '2 Points' },
        { id: 'sc_02', value: 200, clue: 'Passing your opponent\'s guard and establishing a stable controlling position earns you this score.', answer: '3 Points' },
        { id: 'sc_03', value: 200, clue: 'Achieving mount or back control with hooks in earns you this many points in IBJJF competition.', answer: '4 Points' },
        { id: 'sc_04', value: 200, clue: 'When a competitor gets a submission or the opponent taps, the match ends and this person wins.', answer: 'The Person Who Applied the Submission' },
        { id: 'sc_05', value: 200, clue: 'A sweep from guard that ends with you in top position scores this many points.', answer: '2 Points' },
        // ── 400 ──────────────────────────────────
        { id: 'sc_06', value: 400, clue: 'In IBJJF, an "advantage" is awarded for a near-submission or near-sweep. It is also called this.', answer: 'Advantage' },
        { id: 'sc_07', value: 400, clue: 'The standard adult blue belt match time in IBJJF No-Gi Pans or Worlds.', answer: '6 Minutes' },
        { id: 'sc_08', value: 400, clue: 'A penalty given for stalling, fleeing the mat, or unsportsmanlike conduct in IBJJF competition.', answer: 'Penalty' },
        { id: 'sc_09', value: 400, clue: 'Knee on belly also scores 2 points, but only if you maintain the position for this many seconds minimum.', answer: '3 Seconds' },
        { id: 'sc_10', value: 400, clue: 'If scores are tied at the end of regulation in IBJJF, the winner is determined by advantages, then by penalties, then by this.', answer: 'Referee Decision' },
        // ── 600 ──────────────────────────────────
        { id: 'sc_11', value: 600, clue: 'A guard pass that is not stabilized for 3 seconds does NOT score points. This rule enforces what principle?', answer: 'Established Control' },
        { id: 'sc_12', value: 600, clue: 'The IBJJF rules forbid heel hooks at most belt levels below this rank.', answer: 'Black Belt' },
        { id: 'sc_13', value: 600, clue: 'In sub-only competition (like ADCC), points don\'t exist and the only way to win in regulation is this.', answer: 'Submission' },
        { id: 'sc_14', value: 600, clue: 'At ADCC, overtime rounds determine the winner if neither person submits — the overtime winner is the person who scores first using this rule.', answer: 'Submission or First Points (Overtime Rules)' },
        { id: 'sc_15', value: 600, clue: 'The IBJJF standard weight class for men where competitors weigh in between 76kg and 82.3kg (167–181 lbs).', answer: 'Medium-Heavy (or Medium Heavy)' },
        // ── 800 ──────────────────────────────────
        { id: 'sc_16', value: 800, clue: 'ADCC stands for this full name — the most prestigious sub-only grappling event in the world.', answer: 'Abu Dhabi Combat Club' },
        { id: 'sc_17', value: 800, clue: 'Under IBJJF rules, touching the mat outside the boundary while in a submission attempt results in this.', answer: 'Stop and Reset (Bring Back to Center)' },
        { id: 'sc_18', value: 800, clue: 'A rule unique to gi competition: competitors must wear a gi that is this color — no other solid colors are allowed by IBJJF.', answer: 'White, Blue, or Black' },
        { id: 'sc_19', value: 800, clue: 'The IBJJF rule that prohibits a competitor\'s knee crossing their opponent\'s centerline from outside is meant to prevent this injury.', answer: 'Knee Injury (Reaping)' },
        { id: 'sc_20', value: 800, clue: 'A match that ends because a competitor cannot continue due to injury — awarded by the referee — is called this.', answer: 'Medical Default (or Injury Default)' },
        // ── 1000 ──────────────────────────────────
        { id: 'sc_21', value: 1000, clue: 'IBJJF\'s absolute category means competitors can enter regardless of this.', answer: 'Weight Class' },
        { id: 'sc_22', value: 1000, clue: 'The rule requiring a competitor to show "imminent submission" before an advantage is awarded means what?', answer: 'Clear Danger / Opponent Reacted' },
        { id: 'sc_23', value: 1000, clue: 'In IBJJF Master competition, the age bracket starting at 30 and continuing in 5-year increments is called a ___ division.', answer: 'Master Division' },
        { id: 'sc_24', value: 1000, clue: 'The specific IBJJF rule forbidding driving your opponent\'s knee across their own body from the outside during leg entanglements.', answer: 'Reaping Rule (No Reaping the Knee)' },
        { id: 'sc_25', value: 1000, clue: 'In EBI overtime rules, competitors alternate between two attacking positions — the back and this other position — with the winner finishing fastest.', answer: 'Spider Web (Armbar)' },
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
        { id: 'bs_01', value: 200, clue: 'The universal BJJ greeting and acknowledgement of respect — also shouted at the end of commands.', answer: 'Oss' },
        { id: 'bs_02', value: 200, clue: 'Live sparring against a resisting partner in practice — BJJ practitioners say they are going to ___.', answer: 'Roll' },
        { id: 'bs_03', value: 200, clue: 'The signal to stop a submission — slapping the mat, your opponent, or verbally crying out this word.', answer: 'Tap' },
        { id: 'bs_04', value: 200, clue: 'The fabric uniform worn in gi Brazilian Jiu-Jitsu — also called a kimono.', answer: 'Gi' },
        { id: 'bs_05', value: 200, clue: 'The training area in a BJJ academy — the soft foam or padded surface you practice on.', answer: 'Mat' },
        // ── 400 ──────────────────────────────────
        { id: 'bs_06', value: 400, clue: 'The Portuguese word for "outside" used to describe the open area around the training mat in a BJJ school.', answer: 'Fora' },
        { id: 'bs_07', value: 400, clue: 'Your stable support structure on the ground — wide knees, correct spine angle — this is called maintaining your ___.', answer: 'Base' },
        { id: 'bs_08', value: 400, clue: 'Keeping your spine upright in someone\'s guard, making it difficult for them to choke or sweep you, is called having good ___.', answer: 'Posture' },
        { id: 'bs_09', value: 400, clue: 'The sliding side movement of the hips used to create space while on the bottom — the basic bottom escape movement.', answer: 'Shrimp (Hip Escape)' },
        { id: 'bs_10', value: 400, clue: 'This Portuguese word literally means "the gentle art" — it is how BJJ practitioners often refer to their sport.', answer: 'A Arte Suave (The Gentle Art)' },
        // ── 600 ──────────────────────────────────
        { id: 'bs_11', value: 600, clue: 'The term for a submission that attacks the spine by cranking the neck backward.', answer: 'Neck Crank' },
        { id: 'bs_12', value: 600, clue: 'The Japanese word for "teacher" or "instructor" used in BJJ and other martial arts.', answer: 'Sensei (or Professor)' },
        { id: 'bs_13', value: 600, clue: 'Using your forearm against your opponent\'s neck or hip to prevent them from closing distance — this is called using a ___.', answer: 'Frame' },
        { id: 'bs_14', value: 600, clue: 'The Portuguese term for a sweep from the bottom game — also the technical word used in competition contexts.', answer: 'Rasteira' },
        { id: 'bs_15', value: 600, clue: 'The term used to describe a judo or BJJ technique that has been adapted so that both practitioners are already on the ground.', answer: 'Ground Technique (Ne Waza)' },
        // ── 800 ──────────────────────────────────
        { id: 'bs_16', value: 800, clue: 'A Portuguese word meaning "thief" — used in BJJ to describe a certain sneaky choke that attacks from behind.', answer: 'Ladrão (or Mata Leão)' },
        { id: 'bs_17', value: 800, clue: 'The Japanese term for groundwork or mat technique in judo, directly influencing BJJ terminology.', answer: 'Ne Waza' },
        { id: 'bs_18', value: 800, clue: 'To "berimbolo" in BJJ — what does this Portuguese word literally mean or refer to?', answer: 'Top-Like Spin (or Spinning)' },
        { id: 'bs_19', value: 800, clue: 'The BJJ term for having superior inside position on your opponent — controlling the space between their arms and body.', answer: 'Inside Control (or Inside Track)' },
        { id: 'bs_20', value: 800, clue: '"Nogi" or "no-gi" refers to grappling without the traditional uniform — what do most practitioners wear instead?', answer: 'Rash Guard and Shorts' },
        // ── 1000 ──────────────────────────────────
        { id: 'bs_21', value: 1000, clue: 'The Portuguese term used in BJJ for a throw that brings the opponent from standing to the ground — the IBJJF term for takedown.', answer: 'Derrubada' },
        { id: 'bs_22', value: 1000, clue: 'The concept that a BJJ player has a "game" — meaning a preferred set of positions and attacks they return to again and again — is called their ___.', answer: 'Game (or A-Game)' },
        { id: 'bs_23', value: 1000, clue: 'The term "flow roll" describes a type of sparring session that is done at low intensity, with the purpose of this.', answer: 'Smooth Movement / Technique Practice (not hard sparring)' },
        { id: 'bs_24', value: 1000, clue: 'What does the judo and BJJ term "randori" mean?', answer: 'Free Practice (or Free Sparring)' },
        { id: 'bs_25', value: 1000, clue: 'The principle that every offensive attack in BJJ should threaten at least two outcomes simultaneously — making it impossible to defend with one movement — is called this.', answer: 'Two-Attack Principle (or Baiting)' },
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
        { id: 'gt_01', value: 200, clue: 'The most basic gi grip: your four fingers and thumb around the collar fabric near the neck.', answer: 'Collar Grip' },
        { id: 'gt_02', value: 200, clue: 'Gripping the end of your opponent\'s sleeve at the wrist to control their arm.', answer: 'Sleeve Grip' },
        { id: 'gt_03', value: 200, clue: 'The part of the gi worn around the waist that also indicates rank — it is called this.', answer: 'Belt' },
        { id: 'gt_04', value: 200, clue: 'Gripping the fabric at the knee or thigh of the pants to control your opponent\'s leg.', answer: 'Pants Grip' },
        { id: 'gt_05', value: 200, clue: 'The long front panels of the gi top that can be pulled through and used for grips and chokes.', answer: 'Lapel' },
        // ── 400 ──────────────────────────────────
        { id: 'gt_06', value: 400, clue: 'A guard pass that uses a straight grip on both of the opponent\'s pants and bulldozes straight through.', answer: 'Torreando Pass (Toreando)' },
        { id: 'gt_07', value: 400, clue: 'This gi choke is set up from the back by grabbing the collar with a four-finger deep grip and pulling like drawing a bow.', answer: 'Bow and Arrow Choke' },
        { id: 'gt_08', value: 400, clue: 'Pulling the lapel under the opponent\'s leg and through their guard to create wrapping attacks is called using the ___ guard.', answer: 'Lapel Guard (or Worm Guard)' },
        { id: 'gt_09', value: 400, clue: 'A choking technique done from inside closed guard using the opponent\'s own sleeve — invented by a famous Brazilian soldier.', answer: 'Ezekiel Choke' },
        { id: 'gt_10', value: 400, clue: 'Using a deep cross collar grip from guard and pulling the collar across the throat creates this choke.', answer: 'Cross Choke (Scissor Choke)' },
        // ── 600 ──────────────────────────────────
        { id: 'gt_11', value: 600, clue: 'A guard pass that uses the knee across the opponent\'s thigh — grip on the collar and hip — to slice through the guard.', answer: 'Knee Cut Pass' },
        { id: 'gt_12', value: 600, clue: 'Draping the lapel over the opponent\'s legs, through, and back into your grip to create binding in the worm guard was popularized by this competitor.', answer: 'Keenan Cornelius' },
        { id: 'gt_13', value: 600, clue: 'Reaching inside the gi collar with four fingers and pulling up creates this choke variation done from the back.', answer: 'Collar Choke (from back)' },
        { id: 'gt_14', value: 600, clue: 'A guard pass named for its bullfighting style: using two pants grips to steer the legs and walk around to the side.', answer: 'Toreando Pass' },
        { id: 'gt_15', value: 600, clue: 'Gripping your opponent\'s belt with a thumb-in grip and using it to control their hips during a guard pass is called using ___ control.', answer: 'Belt Control' },
        // ── 800 ──────────────────────────────────
        { id: 'gt_16', value: 800, clue: 'The baseball-bat choke setup involves sliding two hands along the collar, one palm-up and one palm-down. What does this hand configuration allow?', answer: 'Opposite Rotation / Double Collar Choke' },
        { id: 'gt_17', value: 800, clue: 'A gi choke applied from side control where the far collar is threaded and pulled to choke — named because of its resemblance to sliding something.', answer: 'Loop Choke (or Sliding Choke)' },
        { id: 'gt_18', value: 800, clue: 'The gi loop choke uses this specific grip position: collar grip from below with arm fully extended.', answer: 'Loop Grip (Palm Up Under Collar)' },
        { id: 'gt_19', value: 800, clue: 'An IBJJF legal gi choke that wraps the collar around the opponent\'s neck from turtle position — the "clock" refers to the attacker\'s body movement.', answer: 'Clock Choke' },
        { id: 'gt_20', value: 800, clue: 'The advantage of gi grips in passing: you can slow your opponent\'s movement by grabbing their pants and doing this.', answer: 'Controlling Leg Movement (Pinning Legs)' },
        // ── 1000 ──────────────────────────────────
        { id: 'gt_21', value: 1000, clue: 'The choke applied from top half guard where you thread the opponent\'s lapel under their leg and back to your hand — named after a body motion.', answer: 'Brabo Choke (D\'Arce with Lapel)' },
        { id: 'gt_22', value: 1000, clue: 'IBJJF rules require that gi jackets be long enough to reach the thighs. Specifically, they must cover this distance from the waist.', answer: 'Palm Length Below the Waist (or Hips)' },
        { id: 'gt_23', value: 1000, clue: 'The gi choke named "Mata Leão" in Portuguese means this in English.', answer: 'Kill the Lion (or Lion Killer)' },
        { id: 'gt_24', value: 1000, clue: 'This guard using multiple lapel entanglements was popularized in 2013–2014 and fundamentally changed high-level gi competition.', answer: 'Lapel Guard (Worm Guard)' },
        { id: 'gt_25', value: 1000, clue: 'An IBJJF-illegal gi grip that loops the sleeve over multiple fingers — banned because it can cause finger injuries. What is it called?', answer: 'Monkey Grip (or Suicide Grip)' },
      ]
    },

    /* ───────────────────────────────────────────────
       CATEGORY 10 — NO-GI LIFE  (no-gi concepts)
    ─────────────────────────────────────────────── */
    {
      id: 'no_gi',
      name: 'No-Gi',
      questions: [
        // ── 200 ──────────────────────────────────
        { id: 'ng_01', value: 200, clue: 'In no-gi, you cannot grip the sleeve or collar, so you use these body-contact grips instead.', answer: 'Wrist, Neck, or Body Grips' },
        { id: 'ng_02', value: 200, clue: 'The wrestling move where you get one arm under your opponent\'s armpit from behind — the underhook.', answer: 'Underhook' },
        { id: 'ng_03', value: 200, clue: 'An overhook is the opposite — your arm goes ___ your opponent\'s arm.', answer: 'Over (Outside)' },
        { id: 'ng_04', value: 200, clue: 'The standard no-gi top worn during training and competition, usually a compression-fit shirt.', answer: 'Rash Guard' },
        { id: 'ng_05', value: 200, clue: 'The snug, tight-fitting shorts worn under spats or alone for no-gi grappling — named after a type of cycling gear.', answer: 'Fight Shorts (or Board Shorts)' },
        // ── 400 ──────────────────────────────────
        { id: 'ng_06', value: 400, clue: 'In no-gi, the rear naked choke is also called "Mata Leão" — this English translation.', answer: 'Lion Killer (or Kill the Lion)' },
        { id: 'ng_07', value: 400, clue: 'Without cloth grips, controlling from the back relies heavily on this wrestling body attachment: arms locked around the waist.', answer: 'Body Lock (or Rear Body Lock)' },
        { id: 'ng_08', value: 400, clue: 'In no-gi guard work, the substitute for a sleeve grip when fighting for spider guard is controlling the ___.', answer: 'Wrist' },
        { id: 'ng_09', value: 400, clue: 'No-gi leg attacks are more prevalent than gi because without fabric there is nothing to grab to prevent this leg-lock entry.', answer: 'Ashi Garami Entry (Leg Entanglement)' },
        { id: 'ng_10', value: 400, clue: 'This no-gi choke threads one arm over the shoulder and one under the chin — an inverted D\'Arce variant.', answer: 'Anaconda Choke' },
        // ── 600 ──────────────────────────────────
        { id: 'ng_11', value: 600, clue: 'The no-gi version of the "seatbelt" back control: one arm snakes under the armpit and one reaches over the shoulder, locking at the chest.', answer: 'Seatbelt Back Control' },
        { id: 'ng_12', value: 600, clue: 'In no-gi, slippery skin means guards are harder to hold. This concept — keeping hips tight to the opponent — compensates for the lack of cloth friction.', answer: 'Hip-to-Hip Connection' },
        { id: 'ng_13', value: 600, clue: 'The no-gi front headlock position that threatens a guillotine, D\'Arce, and anaconda simultaneously.', answer: 'Front Headlock' },
        { id: 'ng_14', value: 600, clue: 'The "inside heel hook" is considered more dangerous than the outside heel hook because it targets this part of the knee.', answer: 'Medial (Inner) Knee Ligaments (ACL/MCL)' },
        { id: 'ng_15', value: 600, clue: 'The no-gi guard that uses shin-to-shin contact to set up elevating sweeps and leg attacks.', answer: 'Shin-on-Shin Guard' },
        // ── 800 ──────────────────────────────────
        { id: 'ng_16', value: 800, clue: 'The leg entanglement position that creates both inside and outside heel hook threats simultaneously by crossing the legs like scissors.', answer: 'Saddle (Honey Hole / Inside Sankaku)' },
        { id: 'ng_17', value: 800, clue: 'In no-gi, the "straight ashi garami" is the safest leg entanglement because it only attacks this straight-line submission.', answer: 'Straight Ankle Lock' },
        { id: 'ng_18', value: 800, clue: 'Gordon Ryan\'s back control system became famous for this key detail: eliminating the opponent\'s ability to do what to escape?', answer: 'Turn In (Face You)' },
        { id: 'ng_19', value: 800, clue: 'The concept of "leg lock reaping" describes the forbidden position where your opponent\'s knee crosses the ___ of their body.', answer: 'Centerline' },
        { id: 'ng_20', value: 800, clue: 'In ADCC, this submission is entirely legal but was banned in IBJJF until black belt level — putting competitors at a knowledge disadvantage.', answer: 'Heel Hook' },
        // ── 1000 ──────────────────────────────────
        { id: 'ng_21', value: 1000, clue: 'The "411" position — also called the saddle — gets its name from this connection it creates on the opponent\'s leg.', answer: '4-Limb Hip Entanglement (or Inside Heel Hook Position)' },
        { id: 'ng_22', value: 1000, clue: 'The technique of "inverting" to enter leg locks was widely popularized by this grappler, called "The Leg Lock Professor."', answer: 'Dean Lister' },
        { id: 'ng_23', value: 1000, clue: 'This no-gi concept — "outside heel hooks are safer than inside heel hooks" — is TRUE or FALSE?', answer: 'False (Inside is MORE dangerous)' },
        { id: 'ng_24', value: 1000, clue: 'The EBI (Eddie Bravo Invitational) overtime format that alternates between back control and this position was inspired by what concept?', answer: 'Spider Web (Closest to Submission)' },
        { id: 'ng_25', value: 1000, clue: 'The John Danaher Death Squad\'s leg lock system was based on the concept that leg locks should be attacked from ___ not from ___', answer: 'Top / Bottom (or Entanglement First)' },
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
        { id: 'tr_01', value: 200, clue: 'The founding family of Brazilian Jiu-Jitsu — their surname is synonymous with BJJ worldwide.', answer: 'Gracie' },
        { id: 'tr_02', value: 200, clue: 'This country is the homeland of BJJ, where the Gracie family developed and refined the art in the 20th century.', answer: 'Brazil' },
        { id: 'tr_03', value: 200, clue: 'The Japanese martial art from which BJJ primarily descended — developed by Jigoro Kano in the late 1800s.', answer: 'Judo (Kodokan Judo)' },
        { id: 'tr_04', value: 200, clue: 'This Gracie family member defeated larger opponents in the first UFC event and became the face of BJJ in America.', answer: 'Royce Gracie' },
        { id: 'tr_05', value: 200, clue: 'The colored strips of fabric worn around the waist in BJJ that represent a practitioner\'s rank — also called what?', answer: 'Belt' },
        // ── 400 ──────────────────────────────────
        { id: 'tr_06', value: 400, clue: 'The Japanese judoka and fighter who taught jiu-jitsu to Carlos Gracie in Brazil in the 1910s–1920s.', answer: 'Mitsuyo Maeda' },
        { id: 'tr_07', value: 400, clue: 'The 1993 competition in Denver, Colorado that introduced BJJ to a global audience via pay-per-view.', answer: 'UFC 1 (Ultimate Fighting Championship 1)' },
        { id: 'tr_08', value: 400, clue: 'A well-known Gracie brother who was considered by many to be the most technically complete BJJ fighter of the 20th century.', answer: 'Helio Gracie (or Carlos Gracie)' },
        { id: 'tr_09', value: 400, clue: 'The Brazilian city where BJJ was primarily developed and where most of the early Gracie academies were located.', answer: 'Rio de Janeiro' },
        { id: 'tr_10', value: 400, clue: 'The famous "Gracie Challenge" was an open invitation for practitioners of any martial art to do this.', answer: 'Fight a Gracie (in an NHB Match)' },
        // ── 600 ──────────────────────────────────
        { id: 'tr_11', value: 600, clue: 'The five BJJ belt ranks in order from white to black: white, blue, purple, brown, and ___.', answer: 'Black' },
        { id: 'tr_12', value: 600, clue: 'The governing body that standardizes BJJ belt requirements and runs the largest global BJJ competition circuit.', answer: 'IBJJF (International Brazilian Jiu-Jitsu Federation)' },
        { id: 'tr_13', value: 600, clue: 'Rickson Gracie\'s legendary undefeated record and mystique made him the most respected BJJ fighter of this generation.', answer: '(Accept) 1980s–1990s' },
        { id: 'tr_14', value: 600, clue: 'The BJJ competitor known as "The Mendes Brothers" helped popularize this modern open guard system.', answer: 'Berimbolo / De La Riva Guard' },
        { id: 'tr_15', value: 600, clue: 'The highest rank in BJJ — above the normal five colored belts — is a coral or this color belt.', answer: 'Red Belt' },
        // ── 800 ──────────────────────────────────
        { id: 'tr_16', value: 800, clue: 'This BJJ pioneer — not a Gracie — expanded BJJ to the poor communities of Rio de Janeiro through affordable classes, creating a different lineage.', answer: 'Oswaldo Fadda' },
        { id: 'tr_17', value: 800, clue: 'BJJ champion Roger Gracie won multiple IBJJF World titles using a precise, classical game. His preferred submission was this technique from mount.', answer: 'Cross Choke (Collar Choke)' },
        { id: 'tr_18', value: 800, clue: 'The first recognized non-Gracie family member to achieve a BJJ black belt was this fighter and pioneer.', answer: 'Oswaldo Fadda (or Helio\'s students)' },
        { id: 'tr_19', value: 800, clue: 'The famous "Gracie diet" was developed by this Gracie family member as a supplemental health philosophy.', answer: 'Carlos Gracie Sr.' },
        { id: 'tr_20', value: 800, clue: 'American BJ Penn made history in 2000 by becoming the first non-Brazilian to win the IBJJF World Championship in what division?', answer: 'Open Weight (or Super-Heavyweight)' },
        // ── 1000 ──────────────────────────────────
        { id: 'tr_21', value: 1000, clue: 'The team from São Paulo that became one of BJJ\'s top competition teams — responsible for producing Rubens "Cobrinha" Charles and others.', answer: 'Alliance' },
        { id: 'tr_22', value: 1000, clue: 'The annual IBJJF championship known as the "Mundials" takes place in this location.', answer: 'Long Beach, California (or USA)' },
        { id: 'tr_23', value: 1000, clue: 'Rolls Gracie, who died in 1982, is credited with being the first Gracie to incorporate these two external disciplines into BJJ training.', answer: 'Wrestling and Sambo' },
        { id: 'tr_24', value: 1000, clue: 'The term "Jiu-Jitsu" itself is a transliteration of Japanese characters meaning this.', answer: 'Gentle Art (or Soft Technique)' },
        { id: 'tr_25', value: 1000, clue: 'The IBJJF requires a minimum of how many years at black belt before the first degree stripe is awarded?', answer: '3 Years' },
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
        { id: 'ms_01', value: 200, clue: 'The most important safety habit in BJJ: when a submission is locked and you cannot escape, you should always do this.', answer: 'Tap (Submit)' },
        { id: 'ms_02', value: 200, clue: 'Focusing on smooth technique at a lower pace — rather than exhausting effort — is called training with this quality.', answer: 'Flow (or Flow Rolling)' },
        { id: 'ms_03', value: 200, clue: 'This beginner mistake — using all your strength from the start — burns out your energy and is called this.', answer: 'Spazzing (or Gas Out)' },
        { id: 'ms_04', value: 200, clue: 'The concept that practicing the same technique thousands of times creates automatic muscle memory is described by this phrase.', answer: 'Repetition (Drilling)' },
        { id: 'ms_05', value: 200, clue: 'Consistent, regular training — even when not highly motivated — is the most important factor in progress. This is called this.', answer: 'Showing Up (Consistency)' },
        // ── 400 ──────────────────────────────────
        { id: 'ms_06', value: 400, clue: 'The mindset of intentionally practicing from bad positions — even when you could avoid them — to accelerate learning.', answer: 'Problem Solving from Adversity' },
        { id: 'ms_07', value: 400, clue: 'The BJJ hierarchy of positions from lowest to highest in terms of offensive opportunity — this ordering is called the positional ___.', answer: 'Hierarchy (Positional Hierarchy)' },
        { id: 'ms_08', value: 400, clue: 'A "game plan" in competition means entering a match with a predetermined set of ___ and ___ you intend to use.', answer: 'Positions and Attacks' },
        { id: 'ms_09', value: 400, clue: 'The concept in BJJ that says a submission attempt should always set up a positional improvement, and vice versa — this is called ___ attacking.', answer: 'Submission Threat / Positional (or Two-Way)' },
        { id: 'ms_10', value: 400, clue: 'Training with partners who are much better than you — to expose your weaknesses — is called training with these types of partners.', answer: 'Upper Belts / Sharks' },
        // ── 600 ──────────────────────────────────
        { id: 'ms_11', value: 600, clue: 'The principle that every guard pass attempt should threaten a submission, and every submission should threaten a pass — this is called ___ offense.', answer: 'Combination (or Linked)' },
        { id: 'ms_12', value: 600, clue: 'A beginner who only trains top positions and avoids the bottom game is developing a dangerous hole called this.', answer: 'Guard Game (No Guard)' },
        { id: 'ms_13', value: 600, clue: 'The concept that your training should include a period of drilling, a period of specific sparring, and a period of live rolling — is called a ___ structure.', answer: 'Periodization (or Class Structure)' },
        { id: 'ms_14', value: 600, clue: 'In BJJ, the ability to stay calm when caught in a dangerous submission — rather than panicking and creating an opening — is called this.', answer: 'Composure (or Calm)' },
        { id: 'ms_15', value: 600, clue: 'The principle "position before submission" means you should always establish ___ before attempting to finish.', answer: 'Dominant Position (Control)' },
        // ── 800 ──────────────────────────────────
        { id: 'ms_16', value: 800, clue: 'The concept that BJJ practitioners should regularly compete to test their skills in a way that training partners who know you cannot fully simulate.', answer: 'Competition (Testing Under Pressure)' },
        { id: 'ms_17', value: 800, clue: 'A "meta game" in BJJ refers to strategies designed to win matches under a specific ruleset — for example, pulling guard and stalling in IBJJF. This is sometimes called this.', answer: 'Points Game (or Gaming the Rules)' },
        { id: 'ms_18', value: 800, clue: 'The principle that you should never give your opponent the grips they want, and should fight for your preferred grips first — this is called the ___ battle.', answer: 'Grip Battle' },
        { id: 'ms_19', value: 800, clue: 'Marcelo Garcia\'s philosophy about connecting with your opponent and feeling their energy before reacting is a form of this concept.', answer: 'Sensitivity (or Feeling)' },
        { id: 'ms_20', value: 800, clue: 'The concept that a higher belt should be able to be placed in any position and still work their way to offense — is called having a ___ game.', answer: 'Complete (or Well-Rounded) Game' },
        // ── 1000 ──────────────────────────────────
        { id: 'ms_21', value: 1000, clue: 'Helio Gracie\'s philosophy that BJJ should be effective for a smaller, weaker person against a larger opponent relies on this physical principle.', answer: 'Leverage' },
        { id: 'ms_22', value: 1000, clue: 'The strategic concept of "forcing the center" means controlling the space and making your opponent react to ___ rather than the reverse.', answer: 'You (Your Movement)' },
        { id: 'ms_23', value: 1000, clue: 'The idea that injury prevention in BJJ comes from tapping early, not ego, and training intelligently over time describes the long-term BJJ ___.', answer: 'Longevity Mindset' },
        { id: 'ms_24', value: 1000, clue: 'Saulo Ribeiro\'s framework for BJJ progression identifies these four stages: survival, escape, control, and this final stage.', answer: 'Attack (Submission)' },
        { id: 'ms_25', value: 1000, clue: 'In high-level competition, the ability to instantly recognize your opponent\'s movement and counter before they complete it is called this.', answer: 'Reading Reactions (or Anticipation)' },
      ]
    }
  ], // end categories

  /**
   * Final Jeopardy prompts — at least 15 for 10+ rounds.
   * Each round uses the next unused one in order.
   */
  finalJeopardy: [
    {
      id: 'fj_01',
      category: 'Living Legends',
      clue: 'This Brazilian BJJ black belt holds more IBJJF World Championship gold medals than any other competitor in history, across both gi and no-gi divisions.',
      answer: 'Marcus "Buchecha" Almeida (accept Gordon Ryan for no-gi)'
    },
    {
      id: 'fj_02',
      category: 'First Principles',
      clue: 'Helio Gracie modified traditional judo techniques to make them effective for smaller, weaker people. The physical law he relied on to do this.',
      answer: 'Leverage'
    },
    {
      id: 'fj_03',
      category: 'Position or Submission',
      clue: 'This principle, one of the first things taught to BJJ beginners, states that you should never attempt a finishing technique until you have first established this.',
      answer: 'Dominant Position'
    },
    {
      id: 'fj_04',
      category: 'Historic Moments',
      clue: 'The year the first UFC was held, introducing BJJ to a mainstream American audience when Royce Gracie won the tournament.',
      answer: '1993'
    },
    {
      id: 'fj_05',
      category: 'The Gentle Art',
      clue: 'BJJ\'s Japanese predecessor — the art brought to Brazil by Mitsuyo Maeda — from which the guard, mount, and ground fighting concepts were inherited.',
      answer: 'Judo (or Kodokan Judo)'
    },
    {
      id: 'fj_06',
      category: 'Guard Masters',
      clue: 'This highly decorated American competitor and BJJ black belt is credited with revolutionizing leg lock theory and the "new wave" leg lock system taught by the Danaher team.',
      answer: 'Gordon Ryan'
    },
    {
      id: 'fj_07',
      category: 'The Point System',
      clue: 'In IBJJF competition, this position scores the most points — 4 — and requires both hooks in to be awarded.',
      answer: 'Back Control (or Mount)'
    },
    {
      id: 'fj_08',
      category: 'Academy Culture',
      clue: 'This word — a Portuguese/Brazilian Portuguese term of acknowledgement and respect — is used in BJJ academies around the world as both a greeting and a response.',
      answer: 'Oss'
    },
    {
      id: 'fj_09',
      category: 'Escape Artists',
      clue: 'Of all the fundamental BJJ escape movements — bridge, shrimp, granby, standup — this one is considered the single most important and universal.',
      answer: 'Shrimp (Hip Escape)'
    },
    {
      id: 'fj_10',
      category: 'Submission Kings',
      clue: 'The choke applied from the rear with the forearm across the throat — called "mata leão" in Portuguese and considered the most commonly successful submission in BJJ.',
      answer: 'Rear Naked Choke'
    },
    {
      id: 'fj_11',
      category: 'Competition History',
      clue: 'This Abu Dhabi-based submission grappling tournament, held every two years, is widely considered the most prestigious no-gi grappling event in the world.',
      answer: 'ADCC (Abu Dhabi Combat Club World Championship)'
    },
    {
      id: 'fj_12',
      category: 'The Belt Journey',
      clue: 'The average number of years practitioners spend as a blue belt before receiving purple — roughly this many — making it the belt most people quit at.',
      answer: '2–3 Years (accept 2 to 4)'
    },
    {
      id: 'fj_13',
      category: 'Mat Wisdom',
      clue: 'This universal first principle taught to beginners in every BJJ school: it is better to tap today and train tomorrow than to get injured proving a point.',
      answer: 'Tap Early (Ego Check / Live to Train Again)'
    },
    {
      id: 'fj_14',
      category: 'Technique Origins',
      clue: 'The berimbolo technique takes its name from a Portuguese word that roughly translates to this action — matching the spinning, top-like inversion motion.',
      answer: 'Spinning Top (or Spin)'
    },
    {
      id: 'fj_15',
      category: 'Modern Game',
      clue: 'This leg lock position — called the "honey hole," the "saddle," or by its technical name — creates simultaneous threats of both inside and outside heel hooks.',
      answer: 'Inside Sankaku (or Saddle / Honey Hole)'
    }
  ]

}; // end BJJ_QUESTION_BANK
