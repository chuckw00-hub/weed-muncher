# 05 — Claude Build Brief

## Objective
Use the included Maze Muncher prototype as the baseline and build it into a stronger, more maintainable, more polished arcade game.

## What Claude should optimize for
- preserving current playability
- reducing technical debt
- making future feature work easier
- improving game feel and mobile readiness
- preparing for shareable hosting

## What Claude should not do first
- do not begin with a full engine migration unless clearly justified
- do not remove the standalone build path
- do not ship a rewrite without behavior parity
- do not expand scope into backend-heavy features before core gameplay is stronger

## Expected first-pass deliverables
### Deliverable 1 — Refactored codebase
Break current logic into sensible modules such as:
- config/constants
- maze data/model
- player logic
- ghost logic
- render layer
- input layer
- UI controls/state

### Deliverable 2 — Gameplay improvement
Upgrade ghost behaviors, state transitions, and pacing so the game feels intentional rather than prototype-random.

### Deliverable 3 — Presentation polish
Add basic screens, better feedback, and audio/animation improvements.

### Deliverable 4 — Shipping path
Leave the project in a state where it can be hosted as a private/unlisted web link.

## Suggested implementation sequence
1. Stabilize + map current behavior.
2. Refactor without changing output.
3. Improve ghost AI and progression.
4. Add polish and screen flow.
5. Prepare deployment.

## Suggested technical target
If Claude wants a low-risk evolution path:
- move to TypeScript + Vite only if it materially improves maintainability
- otherwise keep plain JS but modularize aggressively

## Definition of done for an advanced pass
- code is modular and understandable
- no single mega-file core runtime remains
- game still works on desktop and touch devices
- current visual identity is preserved or improved
- there is a documented hosting path

## Important note
The current prototype already has personality. The job is not to sterilize it into a generic demo — it is to professionalize it while keeping the charm.
