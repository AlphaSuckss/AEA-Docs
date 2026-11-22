---
title: "Prevent Spell Cast (Power Type)"
nav_title: "Prevent Spell Cast"
description: "Stops the player from casting Spell Engine spells."
order: 3
---

Stops the player from starting to cast matching Spell Engine spells, and from casting them through [`aea:cast_spell`](/spell_engine/cast_spell). Passive spells still trigger.

Requires Spell Engine. Type ID: `aea:prevent_spell_cast`

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `spell` | String or Array of Strings | _optional_ | See [Spell filter](/spell_engine/overview#spell-filter). Absent with `school`, every spell is blocked. |
| `school` | Identifier or Array of Identifiers | _optional_ | See [Spell filter](/spell_engine/overview#spell-filter). |
| `message` | [Text Component](https://minecraft.wiki/w/Text_component_format) | _optional_ | Shown above the hotbar when a cast is blocked. |

## Examples

```json
{
    "type": "aea:prevent_spell_cast",
    "condition": { "type": "apoli:status_effect", "effect": "minecraft:weakness" },
    "message": { "text": "You're too weak to cast.", "color": "gray" }
}
```

The player can't cast spells while weakened.

```json
{
    "type": "aea:prevent_spell_cast",
    "school": ["spell_power:fire"],
    "condition": { "type": "apoli:submerged_in", "fluid": "minecraft:water" }
}
```

Fire spells fail underwater.
