---
title: "Gun (Damage Condition Type)"
nav_title: "Gun (Damage)"
description: "Checks whether damage came from a TaCZ bullet, and whether it was a headshot."
order: 7
---

Passes when the damage came from a TaCZ bullet, optionally from certain guns, or only on headshots.

Requires TaCZ. Type ID: `aea:gun` (damage condition)

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `gun` | Identifier or Array of Identifiers | _optional_ | See [Gun filter](/tacz/overview#gun-filter). The gun that fired the bullet. |
| `gun_type` | String or Array of Strings | _optional_ | See [Gun filter](/tacz/overview#gun-filter). |
| `headshot` | Boolean | _optional_ | `true` passes only on headshots, `false` only on other hits. Absent, either counts. |

## Examples

```json
{
    "type": "apoli:modify_damage_taken",
    "damage_condition": { "type": "aea:gun", "headshot": true },
    "modifier": { "operation": "multiply_total_multiplicative", "amount": -0.5 }
}
```

A thick skull: headshots deal half damage.

```json
{
    "type": "apoli:action_when_damage_taken",
    "damage_condition": { "type": "aea:gun", "gun_type": "shotgun" },
    "entity_action": {
        "type": "apoli:apply_effect",
        "effect": { "effect": "minecraft:slowness", "duration": 40 }
    }
}
```

Shotgun hits slow the player for 2 seconds.
