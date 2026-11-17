---
title: "Origin Grid"
nav_title: "Origin Grid"
description: "The choose-origin screen shows every origin of a layer in a grid."
order: 6
---

When Origins is installed, the screen for choosing an origin shows every origin of the layer at once, as icons in a grid. The origin you pick is shown in the usual window to the right. Without the grid, you step through origins one at a time with arrows.

![The choose-origin screen with the origin grid](/origin-grid.png)

- Click an icon to show that origin, then **Select** to choose it.
- Hover over an icon to see the origin's name.
- The dot in an icon's corner is the origin's impact: white for none, green for low, yellow for medium and red for high.
- The icon with a question mark is the random origin, when the layer allows one.
- A page holds 35 origins. Layers with more get **<** and **>** buttons and a page number under the grid.

On a screen too small to fit the grid beside the origin window, for example a small window at a large GUI scale, the screen keeps Origins' arrows.

## Settings

Each player can switch the grid off in `config/aea-client.toml`:

```toml
[origin_screen]
	grid = true
```

## Credits

Ported from [Alternate Origin GUI](https://github.com/UltrusBot/AltOriginGui) 1.1.5 by UltrusBot, under the MIT license. Install AEA only, not Alternate Origin GUI as well.
