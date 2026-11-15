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
4. The game reloads its resources with the files added as a resource pack named "Data pack assets". This only happens when the files are new or have changed. The pack is always on and sits above the player's other packs.
5. The pack stays loaded when the player leaves, and the next time the game starts it loads with everything else. Joining the same world or server again reloads nothing.

> [!NOTE]
> The first join with new or changed assets shows the loading bar once, like a server resource pack. After that there is no reload on joining, on leaving or when the game starts.

## Leftover packs

Because the pack stays loaded, a player still has it on other worlds and servers until one of them sends a different set of assets. A pack that only adds files of its own does no harm there.

A pack that replaces files of another pack, such as a vanilla texture, is different. It is removed as soon as the player joins a world or server that runs AEA and has no assets of its own.

To remove the pack by hand, close the game and delete the `aea-asset-cache` folder in the game directory.

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
