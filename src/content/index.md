---
title: "AEA for Overgrown's Origins"
nav_title: "Introduction"
description: "AEA lets origin packs made for Origins on Fabric 1.20.1 run on Overgrown's Origins for NeoForge 1.21.1, without editing them."
order: 1
---

AEA (Alpha's Everything Addon) lets origin packs made for Origins on Fabric 1.20.1 run on Overgrown's Origins for NeoForge 1.21.1, without editing them. It also adds power types of its own.

## Why AEA exists

Most origin packs were written for [Origins](https://www.curseforge.com/minecraft/mc-mods/origins) 1.10.2 on Fabric 1.20.1. [Overgrown's Origins](https://www.curseforge.com/minecraft/mc-mods/o-origins) brings Origins to NeoForge 1.21.1, but those packs do not load on it as they are, for two reasons:

- Minecraft changed its data pack format between 1.20.1 and 1.21.1. Folders were renamed, items store their data as components instead of NBT, and many commands changed.
- Overgrown's Apoli is a new engine. Some power types, fields and defaults from Apoli 2.9.2 work differently in it or were removed.

Updating a pack by hand means rewriting its powers, functions, recipes, loot tables and tags. AEA (Alpha's Everything Addon) does that work when the pack loads, so you can put an old pack in a world's `datapacks` folder and play.

AEA started as an Origins addon for Fabric 1.20.1. This version carries its own power types over to NeoForge 1.21.1 as well, so packs that used them keep working.

## What it does

- **Runs 1.20.1 origin packs on 1.21.1.** Powers, origins, functions, recipes, advancements, loot tables, tags and worldgen are converted to the 1.21.1 format as they load, including old item NBT and commands. Packs already made for 1.21 are left alone.
- **Brings Sync along.** Powers, actions and conditions from [Sync](https://www.curseforge.com/minecraft/mc-mods/overgrowns-sync) 1.11.8 work under their `sync:` names. Where Overgrown's Apoli already has a newer version of one, that version is used.
- **Fills in what changed.** Power types and fields from Origins 1.10.2 that Overgrown's version dropped or changed are added back, so packs behave the way they did on 1.20.1.
- **Handles Fabric-only data.** Fabric load conditions and Fabric's old common tags are converted for NeoForge.
- **Adds its own power types.** These are documented on this site:
    - [GUI](/powers/gui): custom screens with buttons, sliders, item slots and crafting.
    - [Mob AI](/powers/mob_ai) and [Mob Pathing](/powers/mob_pathing): new behaviours and pathfinding rules for mobs.
    - [Velocity Immunity](/powers/velocity_immunity): protection from `add_velocity` actions.
    - [Hitbox Part](/powers/hitbox_part): extra hit boxes for models that are larger than the player.
    - [See Invisible](/powers/see_invisible): see invisible entities, at a chosen opacity.
    - [Milk Immunity](/powers/milk_immunity): keep status effects when drinking milk.
    - [Prevent Spawn Point](/powers/prevent_spawn_point): stop beds, anchors and commands from setting the spawn point.
- **Adds mind control.** A player can take over a mob or another player, at any distance and in any dimension. See [Mind Control](/actions/mind_control).
- **Works with guns and spells.** With [TaCZ](/tacz/overview) installed, powers can change gun stats, block gun use and react to shots. With [Spell Engine](/spell_engine/overview), powers can give, cast, block and change spells.
- **Sends redstone signals.** [`aea:redstone_pulse`](/actions/redstone_pulse) powers any block for a moment, vanilla or modded, without placing anything.
- **Lets packs add gamerules.** Server owners switch pack features on or off with `/gamerule`, such as whether an origin's explosions break blocks. See [Data pack gamerules](/features/gamerules).
- **Extends Apoli types.** `apoli:effect_immunity` and `apoli:status_effect` take an [`effect_type`](/features/effect_type).
- **Shows origins in a grid.** The choose-origin screen lists every origin at once. See [Origin grid](/features/origin_grid).
- **Carries assets in data packs.** Textures, models, sounds and the rest of a resource pack can ship inside the data pack and are sent to players, so they install nothing. See [Data pack textures](/features/data_pack_textures) and [Data pack assets](/features/data_pack_assets).

## Requirements

| | |
| --- | --- |
| Minecraft | 1.21.1 |
| Loader | NeoForge |
| Java | 21 |
| Required mods | Overgrown's Apoli and Overgrown's Origins |
| Optional | Pehkui. Without it, AEA adds its own `/scale` command so packs that use it still work.<br>[TaCZ](/tacz/overview) and [Spell Engine](/spell_engine/overview), for their types.<br>[AppleSkin](/features/appleskin), to show `apoli:modify_food` values. |

## Using an old pack

1. Put the pack in the world's `datapacks` folder, the same way as on 1.20.1.
2. Start the world. AEA converts the pack while it loads. The files on disk are not changed.
3. If something does not work, look in the game log for errors that name the pack, then run `/aea validate`. It checks every command inside the converted powers and writes the ones that fail to the log.

## Commands

| Command | What it does |
| --- | --- |
| `/aea validate` | Checks every command found inside converted powers and writes the ones that do not parse to the log. |
| `/aea validate fields` | Lists fields in old powers that nothing reads, which would otherwise be ignored without a warning. |
| `/aea upgrade <command>` | Shows how AEA rewrites a 1.20.1 command for 1.21.1. |
| `/scale` | A Pehkui-compatible scale command. Only added when Pehkui is not installed. |

The `/aea` commands need operator permission.

## Settings

The settings are in `config/aea-common.toml`.

| Setting | Default | What it does |
| --- | --- | --- |
| `legacy_datapacks.enabled` | `true` | Turns the conversion of old packs on or off. |
| `legacy_datapacks.log_rewrites` | `false` | Writes every command AEA rewrites to the log. Useful when reporting a pack that breaks. |
| `data_pack_textures.enabled` | `true` | Turns [data pack textures](/features/data_pack_textures) on or off. |
| `data_pack_assets.enabled` | `true` | Turns [data pack assets](/features/data_pack_assets) on or off. |

## Credits

- **Overgrown's Apoli and Overgrown's Origins.** AEA is an addon for these mods. They are required and are not included in AEA.
- **Sync 1.11.8 by Overgrown (MIT).** AEA includes a NeoForge port of Sync's powers, and its rope and minion textures.
- **Origins 1.10.2 and Apoli 2.9.2 by apace100 (MIT).** AEA includes some of their power files, language files and textures so packs made for them still work.

Everything else is original work by AlphaSucks, released under the MIT license. The source is on [GitHub](https://github.com/AlphaSuckss/AEA-NeoForge).
