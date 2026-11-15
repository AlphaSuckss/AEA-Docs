---
title: "Data Pack Assets"
nav_title: "Data Pack Assets"
description: "The assets folder of a data pack is sent to players and loaded as a resource pack."
order: 2
---

A data pack can carry everything a resource pack can. Put an `assets` folder in the data pack and AEA sends it to every player, where the game loads it as a resource pack. Players install nothing, and the server does not have to host a download.

[Data pack textures](/features/data_pack_textures) are the lighter option for plain textures. Use data pack assets for everything those cannot do.

## Adding assets

Give the data pack an `assets` folder next to its `data` folder. Inside, it is laid out exactly like a resource pack:

```text
my_pack/
├── pack.mcmeta
├── data/
│   └── mypack/
│       └── powers/
└── assets/
    └── mypack/
        ├── geo/
        │   └── tail.geo.json
        ├── lang/
        │   └── en_us.json
        ├── sounds.json
        ├── sounds/
        │   └── roar.ogg
        └── textures/
            └── entity/
                └── tail.png
```

The pack goes in the world's `datapacks` folder as usual, as a folder or a zip.

## What it covers

- block and item textures and models,
- animated textures, with their `.png.mcmeta` files,
- sounds and `sounds.json`,
- fonts and language files,
- the Blockbench models and animations of [`apoli:custom_model_render`](https://0vergrown.github.io/Handbook/docs/datapack/powers/custom_model_render),
- anything else a resource pack can hold.

## With Custom Model Render

A geometry model works with no resource pack when its files are in the data pack's `assets` folder:

```json
{
    "type": "apoli:custom_model_render",
    "mode": "geometry",
    "model_location": "mypack:tail",
    "texture_location": "mypack:textures/entity/tail.png"
}
```

Draws the model `assets/mypack/geo/tail.geo.json` with the texture `assets/mypack/textures/entity/tail.png` on the entity that has the power. Animation files go in `assets/mypack/animations/`.

## How it works

1. When data packs load, the server reads the `assets` folder of every enabled pack in the world's `datapacks` folder. If two packs have the same file, the pack that loads later wins.
2. When a player joins, and after `/reload`, the server sends the list of files.
3. The player's game downloads the files it does not have yet and keeps them in the `aea-asset-cache` folder of the game directory. A file is only downloaded again when it changes.
4. The game reloads its resources with the files added as a resource pack named "Data pack assets". The pack is always on and sits above the player's other packs.
5. When the player leaves, the pack is taken away and resources reload again.

> [!NOTE]
> The reload shows the same loading bar as a server resource pack, and it happens on every join. On a large modpack it can take a while. When a pack only needs plain textures, [data pack textures](/features/data_pack_textures) avoid it.

## Limits

| Limit | Value |
| --- | --- |
| Size of one file | 16 MB |
| Number of files | 4096 |
| All files together | 64 MB |
| File names | Lowercase letters, digits, `_`, `-`, `.` and `/`, as in any resource pack. |

Files over a limit, or with a name the game cannot use, are skipped with a warning in the server log.

## Turning it off

Set `enabled` to `false` under `data_pack_assets` in the server's `config/aea-common.toml`.
