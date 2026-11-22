---
title: "Action on Spell Cast (Power Type)"
nav_title: "Action on Spell Cast"
description: "Runs actions when the player casts a Spell Engine spell."
order: 4
---

Runs actions when the player casts a matching Spell Engine spell: on the player, and on each target the spell hit, with the player as actor. It runs on the server.

Spells cast with [`aea:cast_spell`](/spell_engine/cast_spell) don't run it, so a power can't set off itself.

Requires Spell Engine. Type ID: `aea:action_on_spell_cast`

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `spell` | String or Array of Strings | _optional_ | See [Spell filter](/spell_engine/overview#spell-filter). |
| `school` | Identifier or Array of Identifiers | _optional_ | See [Spell filter](/spell_engine/overview#spell-filter). |
| `entity_action` | [Entity Action Type](https://0vergrown.github.io/Handbook/docs/datapack/actions/entity) | _optional_ | Run on the player. |
| `bientity_action` | [Bi-entity Action Type](https://0vergrown.github.io/Handbook/docs/datapack/actions/bientity) | _optional_ | Run on the player and each target. |
| `bientity_condition` | [Bi-entity Condition Type](https://0vergrown.github.io/Handbook/docs/datapack/conditions/bientity) | _optional_ | Must pass for `bientity_action` to run on a target. |

## Examples

```json
{
    "type": "aea:action_on_spell_cast",
    "school": "spell_power:frost",
    "bientity_action": {
        "type": "apoli:target_action",
        "action": { "type": "apoli:freeze", "ticks": 100 }
    }
}
```

Frost spells freeze what they hit.

```json
{
    "type": "aea:action_on_spell_cast",
    "entity_action": { "type": "apoli:heal", "amount": 1 }
}
```

Every spell cast heals the player half a heart.
