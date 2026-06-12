# 02 — Technical Architecture

## Current stack
- Plain HTML
- Plain CSS
- Plain JavaScript
- Canvas 2D rendering
- No framework, bundler, or backend required

## Current files
- `source/pacman-game/index.html`
- `source/pacman-game/style.css`
- `source/pacman-game/game.js`
- `source/pacman-game/README.md`
- `source/pacman-game-standalone.html`

## Structure at a glance
### `index.html`
Provides:
- HUD shell
- canvas mount
- status text
- mode/speed/restart buttons
- touch D-pad

### `style.css`
Provides:
- dark glassy game shell UI
- responsive layout
- button styling
- touch-control layout
- mobile breakpoints

### `game.js`
Single-file game runtime with:
- game constants and maze template
- actor/entity state
- reset/clone/init flows
- collision rules
- pellet/power logic
- ghost target heuristics
- canvas drawing
- keyboard and touch input binding

## Important runtime pieces
### Board model
The maze is encoded as a string array template (`MAZE_TEMPLATE`). Special characters map to walls, pellets, power orbs, player start, and ghost start positions.

### Game state
Core mutable state includes:
- `maze`
- `pelletsRemaining`
- `player`
- `ghosts`
- `score`
- `lives`
- `desiredDirection`
- `powerTimer`
- `gameStarted`
- `gameOver`
- `win`
- `practiceMode`
- `ghostSpeedIndex`

### Main flow
Key functions by responsibility:
- `resetGame()` — resets score/lives/state and UI message
- `resetActors()` — resets player + ghost positions
- `update(delta)` — per-frame simulation gate
- `updatePlayer(delta)` — movement + pellet consumption
- `updateGhosts(delta)` — ghost pathing and motion
- `handleCollisions()` — life loss / ghost eaten logic
- `drawBoard()` — full board render pass
- `drawPlayer()` — current stylized Pac-Man render
- `drawGhost()` — ghost body/eyes render
- `bindTouchControl()` — mobile/touch input hooks
- `init()` — startup bootstrap

## Ghost AI status
Current ghost movement is heuristic, lightweight, and prototype-grade:
- simple target selection
- nearest-path option among legal directions
- frightened mode randomization
- no production-quality personality/state machine yet

This is good enough for a prototype but should be rewritten or significantly upgraded for a shipping version.

## Rendering status
Rendering is currently immediate-mode canvas drawing inside one file. This is easy to edit but creates a few constraints:
- gameplay logic and render logic are tightly coupled
- character styling is hard-coded in drawing routines
- there is no asset pipeline or sprite system
- visual polish changes will keep expanding one large file unless refactored

## Code quality reality check
The prototype is intentionally fast-moving and monolithic. It is functional, but the next team should assume:
- logic is dense in one file
- abstractions are thin
- some behavior is encoded directly in draw/update routines
- visual tweaks may have hidden coupling with orientation or clipping logic

## Refactor recommendation
Before adding major features, split `game.js` conceptually or physically into:
- `state`
- `maze`
- `player`
- `ghost-ai`
- `render`
- `input`
- `ui-controls`
- `constants/config`

## Suggested production path options
### Option 1 — Stay plain JS
Best if the team wants a lean, portable, low-overhead web game.

### Option 2 — Move to TypeScript + Vite
Best if the team wants stronger maintainability without changing the rendering model too much.

### Option 3 — Move to a lightweight game engine
Candidates: Phaser or Pixi-based custom loop. Use only if the team wants richer content/animation/tools soon.

## Recommendation
Use TypeScript + Vite + canvas or Phaser only after locking gameplay goals. Do not migrate stacks before deciding whether the project is primarily a retro arcade, character remix, or mobile-first game.
