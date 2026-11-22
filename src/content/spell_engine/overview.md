---
title: "Spell Engine Compatibility"
nav_title: "Overview"
description: "Powers, conditions and actions for spells from Spell Engine."
order: 0
---

When [Spell Engine](https://modrinth.com/mod/spell-engine) is installed, AEA adds types for its spells. Without Spell Engine, none of these types exist, and AEA runs as usual.

Spell power, haste and critical hits come from Spell Power's attributes, so Apoli's `apoli:attribute` and `apoli:conditioned_attribute` already change them, for example `spell_power:fire`. Spell Engine's stun and other status effects work with Apoli's effect types. The types below cover the rest.

| Type | Kind | What it does |
| --- | --- | --- |
| [`aea:grant_spell`](/spell_engine/grant_spell) | Power | Gives spells, as if from equipment. |
| [`aea:modify_spell`](/spell_engine/modify_spell) | Power | Changes cast time, cooldown and range. |
| [`aea:prevent_spell_cast`](/spell_engine/prevent_spell_cast) | Power | Stops spells from being cast. |
| [`aea:action_on_spell_cast`](/spell_engine/action_on_spell_cast) | Power | Runs actions when a spell is cast. |
| [`aea:cast_spell`](/spell_engine/cast_spell) | Entity and bi-entity action | Casts a spell at once. |
| [`aea:casting_spell`, `aea:spell_on_cooldown`, `aea:knows_spell`](/spell_engine/spell_state) | Entity conditions | Check casting, cooldowns and known spells. |
| [`aea:has_spell`](/spell_engine/has_spell) | Item condition | Checks whether an item carries a spell. |
| [`aea:spell_damage`](/spell_engine/spell_damage) | Damage condition | Checks whether damage is spell damage, and its school. |

Spells are cast by players only, so these types do nothing on other entities.

## Spell filter

Most of these types take two fields that limit them to some spells. Both are optional; without either, every spell counts. With both, a spell has to match both.

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `spell` | String or Array of Strings | _optional_ | Spell ids, such as `"wizards:fireball"`, or spell tags starting with `#`, such as `"#spell_engine:weapon_skills"`. |
| `school` | [Identifier](https://minecraft.wiki/w/Resource_location) or Array of Identifiers | _optional_ | Spell Power schools, such as `"spell_power:fire"`, `"spell_power:frost"` or `"spell_power:healing"`. |

Spells are a data pack registry (`data/<namespace>/spell/`), so a data pack can add its own spells and give them with [`aea:grant_spell`](/spell_engine/grant_spell).
