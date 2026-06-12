# 06 — Claude Kickoff Prompt

Copy/paste this into Claude Code as the starting instruction:

---
You are taking over a project called Maze Muncher.

Read these first, in order:
1. README.md
2. CLAUDE.md
3. docs/02-technical-architecture.md
4. docs/04-qa-known-issues.md
5. docs/05-claude-build-brief.md

Then inspect the source in:
- source/pacman-game/index.html
- source/pacman-game/style.css
- source/pacman-game/game.js
- source/pacman-game-standalone.html

Your job is to take this Pac-Man-inspired browser prototype to the next level while preserving current playability.

Constraints:
- keep the game playable after each major step
- preserve keyboard controls and touch controls
- preserve a standalone build artifact
- do not blindly rewrite everything at once
- preserve the current personality and visual identity

First task:
1. summarize the current architecture and gameplay loop
2. identify the top 5 technical limitations
3. propose a staged implementation plan
4. begin with the safest high-value refactor path

Validation requirements:
- no JS errors on load
- score/lives/restart still work
- keyboard start still works
- touch controls still work
- standalone build still opens

When you implement, prefer incremental commits and explicit verification after each step.
---
