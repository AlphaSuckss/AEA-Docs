---
title: "Cast Spell (Entity and Bi-entity Action Type)"
nav_title: "Cast Spell"
description: "The player casts a Spell Engine spell at once."
order: 5
---

The player casts a Spell Engine spell at once, with no cast time and with its usual animations, effects and damage. The player doesn't need to know the spell.

As an entity action, it aims as Spell Engine would, from where the player looks. As a bi-entity action, the actor casts it at the target.

By default it costs nothing and starts no cooldown. It won't cast a spell that is on cooldown, or that [`aea:prevent_spell_cast`](/spell_engine/prevent_spell_cast) blocks.

Requires Spell Engine. Only players cast spells. Type ID: `aea:cast_spell`

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `spell` | Identifier | | The spell to cast. |
| `use_cost` | Boolean | `false` | Whether it uses the spell's cost and starts its cooldown, as a normal cast would. |

## Examples

```json
{
    "type": "apoli:active_self",
    "key": { "key": "key.apoli.primary_active" },
    "cooldown": 200,
    "entity_action": { "type": "aea:cast_spell", "spell": "wizards:frost_nova" }
}
```

A key that casts Frost Nova, every 10 seconds.

```json
{
    "type": "apoli:action_on_hit",
    "cooldown": 100,
    "bientity_action": { "type": "aea:cast_spell", "spell": "wizards:fire_blast" }
}
```

Melee hits cast Fire Blast at the target, at most every 5 seconds.
