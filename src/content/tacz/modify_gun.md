---
title: "Modify Gun (Power Type)"
nav_title: "Modify Gun"
description: "Changes the stats of the TaCZ guns the player uses."
order: 1
---

Changes the stats of TaCZ guns the entity uses, such as damage, fire rate, recoil and spread. Each stat takes one or more [Attribute Modifiers](https://0vergrown.github.io/Handbook/docs/datapack/data_types/attribute_modifier), so stats can be added to, multiplied or set.

The changes stack with attachments and show in TaCZ's own numbers. They apply when the gun is drawn, and again whenever the entity's active `aea:modify_gun` powers change, for example when a power's `condition` starts or stops passing.

Requires TaCZ. Type ID: `aea:modify_gun`

## Fields

Every field is optional. The [gun filter](/tacz/overview#gun-filter) fields `gun` and `gun_type` limit the power to some guns.

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `gun` | Identifier or Array of Identifiers | _optional_ | See [Gun filter](/tacz/overview#gun-filter). |
| `gun_type` | String or Array of Strings | _optional_ | See [Gun filter](/tacz/overview#gun-filter). |
| `damage` | Attribute Modifier or Array | _optional_ | Bullet damage, at every distance. |
| `fire_rate` | Attribute Modifier or Array | _optional_ | Rounds per minute. Never goes below 1. |
| `recoil` | Attribute Modifier or Array | _optional_ | Recoil, as a multiplier that starts at 1. `-0.5` with `multiply_total_multiplicative` halves it. |
| `inaccuracy` | Attribute Modifier or Array | _optional_ | Spread when not aiming. |
| `aim_inaccuracy` | Attribute Modifier or Array | _optional_ | Spread while aiming. |
| `aim_time` | Attribute Modifier or Array | _optional_ | Seconds it takes to aim down sights. |
| `bullet_speed` | Attribute Modifier or Array | _optional_ | Bullet speed. |
| `armor_ignore` | Attribute Modifier or Array | _optional_ | Share of damage that ignores armour, from 0 to 1. |
| `headshot_multiplier` | Attribute Modifier or Array | _optional_ | Damage multiplier for headshots. |
| `knockback` | Attribute Modifier or Array | _optional_ | Knockback of each bullet. |
| `pierce` | Attribute Modifier or Array | _optional_ | How many entities a bullet goes through. Never goes below 1. |
| `effective_range` | Attribute Modifier or Array | _optional_ | Range before damage falls off. |
| `weight` | Attribute Modifier or Array | _optional_ | Gun weight, which slows the holder. |
| `ammo_save_chance` | Float | `0` | Chance from 0 to 1 that a shot doesn't use a round. Several powers combine as separate chances. |

No stat goes below 0. Reload speed can't be changed: TaCZ ties it to the reload animation, which the client plays.

## Examples

```json
{
    "type": "aea:modify_gun",
    "recoil": { "operation": "multiply_total_multiplicative", "amount": -0.5 },
    "aim_time": { "operation": "multiply_total_multiplicative", "amount": -0.3 }
}
```

A trained soldier: half the recoil and 30% faster aiming with every gun.

```json
{
    "type": "aea:modify_gun",
    "gun_type": "pistol",
    "damage": { "operation": "add_base_early", "amount": 4 },
    "fire_rate": { "operation": "multiply_total_multiplicative", "amount": 0.5 }
}
```

Pistols deal 4 more damage and fire 50% faster.

```json
{
    "type": "aea:modify_gun",
    "condition": { "type": "apoli:sneaking" },
    "inaccuracy": { "operation": "multiply_total_multiplicative", "amount": -1 },
    "ammo_save_chance": 0.25
}
```

While sneaking, shots have no spread and a 25% chance not to use a round.
