---
title: "Has Spell (Item Condition Type)"
nav_title: "Has Spell"
description: "Checks whether an item carries a Spell Engine spell."
order: 7
---

Passes when the item carries a matching spell: a spell book, scroll, wand, weapon with a skill, or anything else with Spell Engine spells. With no fields, any spell counts.

Requires Spell Engine. Type ID: `aea:has_spell`

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `spell` | String or Array of Strings | _optional_ | See [Spell filter](/spell_engine/overview#spell-filter). |
| `school` | Identifier or Array of Identifiers | _optional_ | See [Spell filter](/spell_engine/overview#spell-filter). |

## Examples

```json
{
    "type": "apoli:prevent_item_use",
    "item_condition": { "type": "aea:has_spell", "school": "spell_power:healing" }
}
```

The player can't use items with healing spells.
