---
title: "Casting, Cooldown and Known Spells (Entity Condition Types)"
nav_title: "Casting / Cooldown / Known"
description: "Check whether the player is casting a spell, has a spell on cooldown, or knows a spell."
order: 6
---

- `aea:casting_spell` passes while the player casts a matching spell.
- `aea:spell_on_cooldown` passes while a matching spell is on cooldown.
- `aea:knows_spell` passes when the player can use a matching spell, from any source: held items, equipment, spell books or [`aea:grant_spell`](/spell_engine/grant_spell).

With no fields, any spell counts.

Requires Spell Engine. Type IDs: `aea:casting_spell`, `aea:spell_on_cooldown`, `aea:knows_spell`

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `spell` | String or Array of Strings | _optional_ | See [Spell filter](/spell_engine/overview#spell-filter). |
| `school` | Identifier or Array of Identifiers | _optional_ | See [Spell filter](/spell_engine/overview#spell-filter). |

## Examples

```json
{
    "type": "apoli:modify_damage_taken",
    "condition": { "type": "aea:casting_spell" },
    "modifier": { "operation": "multiply_total_multiplicative", "amount": 0.25 }
}
```

The player takes 25% more damage while casting.

```json
{
    "type": "apoli:attribute",
    "condition": { "type": "aea:spell_on_cooldown", "school": "spell_power:arcane" },
    "modifier": { "attribute": "minecraft:generic.movement_speed", "operation": "add_multiplied_total", "amount": 0.2 }
}
```

While an arcane spell is on cooldown, the player moves 20% faster.
