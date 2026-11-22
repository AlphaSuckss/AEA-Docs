---
title: "Spell Damage (Damage Condition Type)"
nav_title: "Spell Damage"
description: "Checks whether damage is spell damage, and which school it is."
order: 8
---

Passes when the damage is spell damage: the damage type of a Spell Power school. With `school`, only those schools count.

Requires Spell Engine. Type ID: `aea:spell_damage`

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `school` | Identifier or Array of Identifiers | _optional_ | Spell Power schools, such as `"spell_power:fire"`. |

## Examples

```json
{
    "type": "apoli:modify_damage_taken",
    "damage_condition": { "type": "aea:spell_damage", "school": ["spell_power:fire", "spell_power:frost"] },
    "modifier": { "operation": "multiply_total_multiplicative", "amount": -0.5 }
}
```

The player takes half damage from fire and frost spells.
