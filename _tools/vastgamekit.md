---
title: VastGameKit
year: 2026
years: 2024–2026
description: A small 2D game engine for the browser, written in TypeScript and drawn on an HTML canvas.
tech: TypeScript
links:
  - label: Source
    url: https://github.com/Cynicollision/VastGameKit
  - label: Play the demo, Nine Lives
    url: /games/nine-lives/
---

VastGameKit is built for simple games that can be embedded in a web page. A game describes its actors, scenes, sprites, and sounds up front, and the engine runs them. It handles:

- A fixed-timestep game loop that pauses while the page is hidden
- Scenes with multiple cameras, smooth camera following, fade transitions, and HUD and dialog overlays
- Sprite sheets and frame animation, with flipping, scaling, rotation, and transparency
- Sub-pixel movement and collision detection for rectangles and circles, kept fast by a spatial grid
- Keyboard, mouse, and multi-touch input, with swipes and on-screen buttons and d-pads for phones
- Sound effects and looping music, with volume, stereo panning, and pitch
- Bitmap fonts for crisp pixel-art text
- Timers and game-wide events
- Saved data, like high scores and settings
- Sharp scaling of pixel art to fit any screen
- Optional level design in [Tiled](https://www.mapeditor.org/){:target="_blank" rel="noopener"}, the free map editor

It's the latest version of an engine I've been rebuilding since 2014.
