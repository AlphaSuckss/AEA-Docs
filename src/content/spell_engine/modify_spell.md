---
title: "Modify Spell (Power Type)"
nav_title: "Modify Spell"
description: "Changes the cast time, cooldown and range of the player's Spell Engine spells."
order: 2
---

Changes the cast time, cooldown and range of the player's Spell Engine spells. Each takes one or more [Attribute Modifiers](https://0vergrown.github.io/Handbook/docs/datapack/data_types/attribute_modifier). They apply after spell haste and Spell Engine's own modifier spells, and the player's cast bar and cooldowns show the changed values.

Damage and healing come from Spell Power's attributes, which Apoli's attribute powers already change.

Requires Spell Engine. Type ID: `aea:modify_spell`

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `spell` | String or Array of Strings | _optional_ | See [Spell filter](/spell_engine/overview#spell-filter). |
| `school` | Identifier or Array of Identifiers | _optional_ | See [Spell filter](/spell_engine/overview#spell-filter). |
| `cast_time` | Attribute Modifier or Array | _optional_ | Cast time, in seconds. |
| `cooldown` | Attribute Modifier or Array | _optional_ | Cooldown, in seconds. |
| `range` | Attribute Modifier or Array | _optional_ | Range, in blocks. |

None of them goes below 0.

## Examples

```json
{
    "type": "aea:modify_spell",
    "school": "spell_power:fire",
    "cast_time": { "operation": "multiply_total_multiplicative", "amount": -0.5 },
    "range": { "operation": "add_base_early", "amount": 8 }
}
```

Fire spells cast twice as fast and reach 8 blocks further.

```json
{
    "type": "aea:modify_spell",
    "condition": { "type": "apoli:in_rain" },
    "school": "spell_power:lightning",
    "cooldown": { "operation": "multiply_total_multiplicative", "amount": -0.75 }
}
```

In the rain, lightning spells have a quarter of their cooldown.
