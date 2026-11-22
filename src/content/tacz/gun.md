---
title: "Gun (Item Condition Type)"
nav_title: "Gun"
description: "Checks whether the item is a TaCZ gun, and its id, type, fire mode, ammo or attachments."
order: 4
---

Passes when the item is a TaCZ gun that matches every field given. With no fields, any gun passes.

Requires TaCZ. Type ID: `aea:gun` (item condition). For the damage condition with the same ID, see [Gun (Damage Condition Type)](/tacz/gun_damage).

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `gun` | Identifier or Array of Identifiers | _optional_ | See [Gun filter](/tacz/overview#gun-filter). |
| `gun_type` | String or Array of Strings | _optional_ | See [Gun filter](/tacz/overview#gun-filter). |
| `fire_mode` | String or Array of Strings | _optional_ | The fire mode: `"auto"`, `"semi"` or `"burst"`. |
| `comparison` | [Comparison](https://0vergrown.github.io/Handbook/docs/datapack/data_types/comparison) | _optional_ | Compares the rounds in the magazine with `compare_to`. |
| `compare_to` | Integer | `0` | The number of rounds to compare with. |
| `attachment` | Identifier or Array of Identifiers | _optional_ | Attachment ids the gun must have, such as `"tacz:scope_acog_ta31"`. |
| `attachment_type` | String or Array of Strings | _optional_ | Kinds of attachment the gun must have: `"scope"`, `"muzzle"`, `"stock"`, `"grip"`, `"laser"` or `"extended_mag"`. |

## Examples

```json
{
    "type": "apoli:equipped_item",
    "equipment_slot": "mainhand",
    "item_condition": { "type": "aea:gun", "gun_type": "sniper", "attachment_type": "scope" }
}
```

An entity condition: the entity holds a sniper with a scope.

```json
{
    "type": "aea:gun",
    "comparison": "<=",
    "compare_to": 3
}
```

The gun has 3 rounds or fewer left in the magazine.
