---
title: "Data Pack Textures"
nav_title: "Data Pack Textures"
description: "PNG files in a data pack are sent to players, so powers can use them without a resource pack."
order: 1
---

A data pack can carry its own textures. AEA sends them to every player, and powers use them as if a resource pack had provided them. An origin can then ship as one data pack, with nothing for players to install.

## Adding a texture

Put the PNG under `textures` in the pack's namespace folder:

```text
my_pack/
├── pack.mcmeta
└── data/
    └── mypack/
        ├── powers/
        └── textures/
            └── gui/
                └── panel.png
```

The texture's ID is its path from the namespace folder: `mypack:textures/gui/panel.png`. Use that ID wherever a power takes a texture.

```json
{
    "type": "aea:gui",
    "show_vanilla_background": false,
    "elements": [
        {
            "type": "aea:image",
            "texture_location": "mypack:textures/gui/panel.png",
            "width": 176,
            "height": 166
        }
    ]
}
```

A [GUI](/powers/gui) whose background is a texture from the data pack.

## What it works for

Data pack textures work wherever the game looks a texture up by its ID at the moment it draws:

- entity texture overlays, such as `sync:entity_texture_overlay`,
- the bars of HUD resources,
- images, buttons and sliders in an [`aea:gui`](/powers/gui),
- screen overlays.

They do not work for block and item textures, models, sounds, fonts or language files. The game builds those once when resources load, so they still need a resource pack.

## How it works

1. When data packs load, the server reads every PNG under a `textures` folder.
2. When a player joins, and after `/reload`, the server sends the list of textures.
3. The player's game downloads the ones it does not have yet and keeps them in the `aea-texture-cache` folder of the game directory. A file is only downloaded again when it changes.
4. Each texture is registered under its ID. Textures the server no longer lists are dropped.

If a resource pack on the player's game has a texture with the same ID, the resource pack is used.

## Limits

| Limit | Value |
| --- | --- |
| Format | PNG. Animated textures (`.mcmeta` files) are not supported. |
| Size of one file | 2 MB |
| Size of one image | 4096 by 4096 pixels |
| Number of files | 1024 |
| All files together | 32 MB |

Files over a limit are skipped, with a warning in the server log.

## Turning it off

Set `enabled` to `false` under `data_pack_textures` in the server's `config/aea-common.toml`.
