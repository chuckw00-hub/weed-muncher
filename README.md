# Maze Muncher (Weed Muncher)

Pac-Man-inspired browser arcade game with a hippie visual direction.
Working copy of the handoff packet from `~/Downloads/maze-muncher-claude-export/`
(original docs copied into `docs/` here for reference).

## Files
- `index.html` / `style.css` / `game.js` — editable source
- `standalone.html` — generated single-file build, opens directly via `file://`
- `build-standalone.mjs` — regenerates `standalone.html` (`node build-standalone.mjs`)
- `docs/` — original product/architecture/QA briefs from the handoff packet
- `goat-garden-prototype.html` — unrelated one-off prototype, safe to delete

## Run
```bash
python3 -m http.server 8742
```
Then open http://127.0.0.1:8742 — or just open `standalone.html` directly.

## Polish pass (June 12, 2026) — over the handoff prototype
All prototype gameplay, controls, art direction, and copy preserved. Changes:

**Crisp** — canvas renders at devicePixelRatio (was fixed 532×420 upscaled with
`image-rendering: pixelated`); bud pellets and the wall layer are pre-rendered
sprites/layers at device resolution.

**Smooth** — new movement core: entities travel center-to-center and turning/AI
decisions happen exactly when a tile center is crossed, with leftover frame
distance carried into the new direction (the old code snapped positions on
turns and wall hits). Instant reversal allowed mid-corridor. Steady 60fps
(walls + pellets no longer rebuilt from gradients every frame).

**Clean / game feel**
- Level counter is live; each cleared board auto-advances after a flash,
  ghosts ramp +6%/level (player +2%, both capped)
- Eaten ghosts become eyes that BFS-pathfind home, then revive (was: teleport;
  greedy pathing got stuck oscillating and never reached home)
- Ghost-eat chain scoring 200/400/800/1600 per power orb, score popups
- Frightened ghosts flash white during the last 2s of power mode; ghosts
  reverse direction when an orb is eaten (classic tell)
- Death is a 1.25s spin-out animation instead of an instant reset
- Synth audio (chomp/power/ghost/death/win) via WebAudio, no assets;
  Sound toggle persists in localStorage
- Swipe/drag steering directly on the board (D-pad still works)
- Space/Enter starts a round and restarts after game over

**Chuck's playtest round 1 (June 12, 2026)**
- Bandana knot removed (it didn't rotate with movement and looked wrong);
  the red bandana band + paisley stay
- Maze fix: the right-side pocket on row 7 was fully walled in — its 3 pellets
  were uneatable, so boards could never be cleared. Opened passages above and
  below it (cols 16, rows 6/8). Connectivity now BFS-verified: every pellet
  reachable from the player start
- Power orbs 4 → 6: added a mid-maze pair flanking the ghost house (5,9) / (13,9)
- Jail: eaten ghosts' eyes return home, then sit dimmed behind cell bars until
  power mode is fully over (1.5s minimum), then rejoin — no more instant
  respawn kills. Jailed ghosts can't collide and don't re-frighten on a new orb
- Cop look: mirrored aviator sunglasses + duty belt with gold buckle
  (cap + star badge were already there); scared eyes still show when frightened

**Chuck's playtest rounds 2-3 (June 12, 2026)** — hippie player, final look
- drawPlayer now renders in a local frame that rotates with facing
  (mirrored for left so he's never upside down) — accessories finally
  move with him
- Final look: slim red headband (knot-free) + round purple Lennon glasses
  with gold wire. Hair was tried twice (strands, then a reference-image
  mane) and cut entirely — do not reintroduce
- Audio hardening: AudioContext created without real user activation gets
  stuck 'suspended' and plays nothing. ensureAudio now recreates/resumes,
  any real input revives it, and tone() only schedules into a running
  context

## Regression checklist (from docs/04) — all verified June 12, 2026
keyboard start/move ✓ · touch & swipe ✓ · pellets score ✓ · power mode ✓ ·
collision removes life ✓ · restart resets ✓ · practice mode ✓ · speed toggle ✓ ·
standalone build boots ✓ · no console errors ✓ · 60fps median, worst frame 17.7ms ✓
