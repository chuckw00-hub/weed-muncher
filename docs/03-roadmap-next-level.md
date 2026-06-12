# 03 — Roadmap to Take It to the Next Level

## Phase 1 — Stabilize and preserve
Goal: keep current playability while making the code safer to evolve.

### Tasks
1. Snapshot current behavior with a short manual test checklist.
2. Add a small README-level gameplay spec.
3. Split input, update, render, and UI concerns.
4. Add lightweight automated smoke coverage where practical.
5. Preserve a standalone build for stakeholder sharing.

## Phase 2 — Gameplay upgrade
Goal: improve the game feel before adding big production complexity.

### Priorities
- Better ghost state machines
- Stronger difficulty tuning
- Level clear flow
- Better respawn handling
- More readable power mode feedback
- Distinct ghost personalities

## Phase 3 — Presentation and juice
Goal: make the game feel premium.

### Priorities
- Sound effects and music
- Screen shake / pop / flashes
- Pellet chomp feedback
- Death animation
- Win/lose/start screens
- Improved character animation
- Ghost spawn/frightened visuals

## Phase 4 — Mobile and shareability
Goal: make it easy to play and share.

### Priorities
- Swipe controls
- Better thumb-zone layout
- Fullscreen mobile layout
- PWA packaging
- Hosted private/unlisted build pipeline

## Phase 5 — Content and retention
Goal: go beyond a one-board demo.

### Priorities
- Multiple levels or maze variants
- Score attack mode
- Daily challenge / seeded boards
- Cosmetic theme variants
- Leaderboard or local best score

## Concrete next sprint recommendation
If the advanced team only has one sprint, do this:
1. Refactor `game.js` into modules.
2. Improve ghost AI.
3. Add audio.
4. Add title/start/game-over/win screens.
5. Ship an unlisted hosted build.

## Stretch goals
- Proper sprite art pass
- Better ghost silhouettes/animation
- Theme packs
- Accessibility improvements (reduced motion, better contrast modes)
- Analytics for session completion if hosted

## Decision points for the team
- Stay code-drawn vs move to sprites?
- Stay vanilla vs TypeScript/game engine?
- Desktop-first arcade vs mobile-first app?
- Novelty share toy vs maintained mini-product?
