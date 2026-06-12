# 01 — Product Overview

## Working title
Maze Muncher

## One-line pitch
A Pac-Man-inspired browser arcade game with a custom visual identity, touch-friendly controls, and a playful hippie lead character.

## Current player experience
The player loads a neon-dark maze screen, sees score/lives/level status, then starts via keyboard or touch controls. The goal is to collect pellets, avoid ghosts, use power orbs for temporary reversal, and clear the board. There are extra prototype toggles for practice mode and ghost speed.

## What already works
- Playable maze loop
- Pellet collection and score updates
- Power orb state changes
- Ghost collision/life loss
- Restart flow
- Touch D-pad for mobile-ish play
- Practice mode toggle
- Ghost speed toggle
- Responsive HUD and game shell
- Standalone no-server version for easy sharing

## What makes it interesting
- It already has a clear personality rather than feeling like a generic coding demo.
- The current visual direction is distinct enough to evolve into a branded small game.
- The code is simple enough to refactor without fighting a framework.

## Best next-level directions
### Direction A — Polished retro arcade
Keep the core loop, add better ghost personalities, sound, attract mode, level progression, juice, and leaderboard.

### Direction B — Character-forward remix
Lean harder into the visual identity, bigger character acting, custom maze themes, mini cutscenes, and more expressive ghosts.

### Direction C — Mobile-first casual arcade
Optimize for phone play, swipe controls, bigger lanes, haptics, short sessions, challenge mode, and installable PWA packaging.

## Product goals for a serious next pass
- Fast load and instant play
- Clean controls on desktop and mobile
- Clear visual feedback and stronger juice
- Consistent difficulty curve
- A public or private hosted build suitable for sharing

## Non-goals for the immediate next sprint
- Backend-heavy online multiplayer
- Procedural map generation
- Native app rewrite before gameplay is solid
- Complex account/auth systems

## Recommended acceptance bar for the next team
- Gameplay parity with the current prototype
- Cleaner architecture than the prototype
- Better animation/audio feedback
- Better ghost behavior
- At least one hosted shareable build
