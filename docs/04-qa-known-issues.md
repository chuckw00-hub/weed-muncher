# 04 — QA Notes, Known Issues, and Handoff Risks

## What has been verified in the prototype
- Page loads successfully
- Standalone file opens via `file://`
- No JavaScript errors on load during recent checks
- Keyboard controls work
- Touch controls appear and can trigger movement
- Restart resets game state
- HUD updates during play
- Bandana placement was iterated and visually checked

## Known prototype limitations
### Architecture
- `game.js` is large and monolithic
- render, state, AI, and input live together
- no formal test harness

### Gameplay
- one board only
- level value is static in UI
- ghost AI is simple and prototype-grade
- tuning is not deeply balanced yet
- no audio
- no menus beyond in-page controls

### Art / rendering
- character art is code-drawn and resolution-limited
- some visual details only partially read at game scale
- bandana details are stronger than before but still constrained by sprite size

### Hosting / delivery
- current package is local/downloadable, not a production-hosted build
- no deployment pipeline
- no public/private web hosting infrastructure included

## Risks if the team starts by rewriting everything
- they may lose the current feel and quick-share simplicity
- visual tweaks may regress behavior if gameplay and rendering are changed together
- a big engine migration could slow momentum before gameplay is improved

## Recommended working method
1. Preserve a playable branch/tag immediately.
2. Build a tiny regression checklist.
3. Refactor with behavior snapshots, not a blind rewrite.
4. Separate feature work from visual polish work.
5. Keep a shareable preview build available after each milestone.

## Suggested regression checklist
- game starts from keyboard
- game starts from touch input
- pellets increment score
- power orb changes ghost behavior
- ghost collision removes a life
- restart returns score/lives/message to defaults
- practice mode removes ghost threat behavior
- ghost speed toggle changes pace
- standalone file still works after each major change

## Handoff note
This prototype is best treated as a validated concept with personality, not as finished architecture. The next team should preserve the idea, then professionalize the implementation.
