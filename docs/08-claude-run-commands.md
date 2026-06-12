# 08 — Claude Run Commands

## Run source version locally
```bash
cd source/pacman-game
python3 -m http.server 8000
```
Open: `http://127.0.0.1:8000`

## Open standalone version
Open file directly:
- `source/pacman-game-standalone.html`

## Core files
- `source/pacman-game/index.html`
- `source/pacman-game/style.css`
- `source/pacman-game/game.js`

## Suggested manual verification after changes
1. load the page
2. start with keyboard
3. start with touch
4. collect pellets
5. trigger power mode
6. collide with ghost
7. restart
8. reopen standalone file

## If adopting a toolchain
If Claude migrates to Vite/TypeScript, keep:
- a dev run command
- a build command
- a generated standalone/share artifact or equivalent static export
