---
title: "TaCZ Compatibility"
nav_title: "Overview"
description: "Powers, conditions and actions for guns from Timeless and Classics Zero (TaCZ)."
order: 0
---

When [Timeless and Classics Zero](https://modrinth.com/mod/tacz) (TaCZ) is installed, AEA adds types for its guns. Without TaCZ, none of these types exist, and AEA runs as usual.

TaCZ bullets are already ordinary projectiles that the shooter fires, so Apoli's own damage powers, such as `apoli:modify_damage_dealt`, already work on gun hits. The types below cover what Apoli can't reach: gun stats, gun use and TaCZ's own events.

| Type | Kind | What it does |
| --- | --- | --- |
| [`aea:modify_gun`](/tacz/modify_gun) | Power | Changes gun stats such as damage, fire rate, recoil and spread. |
| [`aea:prevent_gun_use`](/tacz/prevent_gun_use) | Power | Stops shooting, aiming, reloading or melee. |
| [Gun event powers](/tacz/gun_events) | Powers | Run actions when firing, hitting, killing, hitting a block, reloading or using melee. |
| [`aea:gun`](/tacz/gun) | Item condition | Checks a gun's id, type, fire mode, ammo or attachments. |
| [`aea:gun_ammo`](/tacz/gun_ammo) | Item condition | Checks for TaCZ ammo. |
| [`aea:aiming_gun`, `aea:reloading_gun`](/tacz/gun_state) | Entity conditions | Check whether the entity is aiming or reloading. |
| [`aea:gun`](/tacz/gun_damage) | Damage condition | Checks whether damage came from a gun, and whether it was a headshot. |
| [`aea:refill_ammo`](/tacz/refill_ammo) | Entity and item action | Fills a gun's magazine. |

## Gun filter

Most of these types take two fields that limit them to some guns. Both are optional; without either, every gun counts. With both, a gun has to match both.

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `gun` | [Identifier](https://minecraft.wiki/w/Resource_location) or Array of Identifiers | _optional_ | TaCZ gun ids, such as `"tacz:ak47"`. |
| `gun_type` | String or Array of Strings | _optional_ | TaCZ gun types, such as `"pistol"`, `"rifle"`, `"sniper"`, `"shotgun"`, `"smg"`, `"mg"` or `"rpg"`. Gun packs can add more. |

The gun id is the one in the gun's `GunId` data, as in `/give @s tacz:modern_kinetic_gun[custom_data={GunId:"tacz:glock_17"}]`. A gun's type is the `type` in its gun pack's index file.
