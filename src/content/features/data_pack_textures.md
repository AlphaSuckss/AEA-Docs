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

- the textures of [`apoli:custom_model_render`](https://0vergrown.github.io/Handbook/docs/datapack/powers/custom_model_render), covered [below](#with-custom-model-render),
- entity texture overlays, such as `sync:entity_texture_overlay`,
- the bars of HUD resources,
- images, buttons and sliders in an [`aea:gui`](/powers/gui),
- screen overlays.

They do not work for block and item textures, models, sounds, fonts or language files. The game builds those once when resources load. For those, put the files in the pack's `assets` folder as [data pack assets](/features/data_pack_assets).

> [!NOTE]
> A HUD bar that sets `fallback` in its `hud_render` ignores a data pack texture and draws the fallback, because that check only looks in resource packs. Leave `fallback` out when the bar's `sprite_location` is a data pack texture.

## With Custom Model Render

Overgrown's [`apoli:custom_model_render`](https://0vergrown.github.io/Handbook/docs/datapack/powers/custom_model_render) re-skins an entity with a texture, or draws a Blockbench model on it. Every texture field of that power takes a data pack texture:

| Mode | Fields |
| --- | --- |
| `texture` | `texture_location`, `wide_texture_location`, `slim_texture_location` |
| `geometry` | `texture_location` |

In texture mode the whole power works from the data pack:

```json
{
    "type": "apoli:custom_model_render",
    "texture_location": "mypack:textures/entity/ember_skin.png",
    "render_as_overlay": true
}
```

Draws `data/mypack/textures/entity/ember_skin.png` over the skin of the entity that has the power. Players need no resource pack to see it.

> [!WARNING]
> In geometry mode a data pack texture only covers the texture. The model file (`.geo.json`) and its animation files are read with the game's resources, so put those in the pack's `assets` folder as [data pack assets](/features/data_pack_assets#with-custom-model-render).

## How it works

1. When data packs load, the server reads every PNG under a `textures` folder.
2. When a player joins, and after `/reload`, the server sends the list of textures.
3. The player's game downloads the ones it does not have yet and keeps them in the `aea-texture-cache` folder of the game directory. A file is only downloaded again when it changes.
4. Each texture is registered under its ID. Textures the server no longer lists are dropped.

If a resource pack on the player's game has a texture with the same ID, the resource pack is used.

## Limits

| Limit | Value |
| --- | --- |
| Format | PNG. Animated textures (`.mcmeta` files) are not supported here; use [data pack assets](/features/data_pack_assets) for those. |
| Size of one file | 2 MB |
| Size of one image | 4096 by 4096 pixels |
| Number of files | 1024 |
| All files together | 32 MB |

Files over a limit are skipped, with a warning in the server log.

## Turning it off

Set `enabled` to `false` under `data_pack_textures` in the server's `config/aea-common.toml`.
