---
title: "Grant Spell (Power Type)"
nav_title: "Grant Spell"
description: "Gives the player Spell Engine spells, as if from equipment."
order: 1
---

Gives the player Spell Engine spells, as if equipment gave them. Active spells show on Spell Engine's spell hotbar and cast with its own keys, cast time, cost, cooldown, animations and effects. Passive spells and modifier spells take effect as they would from equipment.

By default, granted active spells can be cast whatever the player holds; when the held item has spells of its own, both sets show. With `always` set to `false`, they follow Spell Engine's own rules, like a spell book: they're only usable while the player holds a spell item that accepts them, such as a wand for magic spells.

Requires Spell Engine. Type ID: `aea:grant_spell`

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `spell` | Identifier or Array of Identifiers | | The spells to give. |
| `always` | Boolean | `true` | Whether granted active spells work whatever the player holds. |

> [!NOTE]
> Spell Engine puts the first spell on the use key (right-click). It only casts from the use key while the player holds an item; with an empty hand, the other spell keys still work. Players can move the first spell off the use key in Spell Engine's client settings.

## Examples

```json
{
    "type": "aea:grant_spell",
    "spell": ["wizards:fireball", "wizards:fire_wall"]
}
```

The player can cast Fireball and Fire Wall from the Wizards mod at any time.

```json
{
    "type": "aea:grant_spell",
    "spell": "rpg_series:whirlwind",
    "always": false,
    "condition": { "type": "apoli:sneaking" }
}
```

While sneaking, Whirlwind is added to the spells of a held weapon that accepts it.
