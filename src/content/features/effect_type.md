---
title: "Effect Types"
nav_title: "Effect Types"
description: "The effect_type field picks every beneficial, harmful or neutral status effect at once."
order: 5
---

Every status effect has a type: beneficial, harmful or neutral. The `effect_type` field picks every effect of a type at once, including effects from other mods.

It takes `"beneficial"`, `"harmful"` or `"neutral"`, or an array of them.

## Where it works

| Type | What `effect_type` does |
| --- | --- |
| [`apoli:effect_immunity`](https://0vergrown.github.io/Handbook/docs/datapack/powers/effect_immunity) | Adds every effect of the type to the effects the entity is immune to. Works with `inverted`. |
| [`apoli:status_effect`](https://0vergrown.github.io/Handbook/docs/datapack/entity-conditions/status_effect) | Passes when the entity has any effect of the type. Use it instead of `effect`, not together with it. The amplifier and duration fields apply to each effect. |
| [`aea:milk_immunity`](/powers/milk_immunity) | Adds every effect of the type to the effects milk cannot remove. |

## Examples

```json
{
    "type": "apoli:effect_immunity",
    "effect_type": "harmful"
}
```

The entity is immune to every harmful effect.

```json
{
    "type": "apoli:status_effect",
    "effect_type": ["beneficial", "neutral"],
    "min_amplifier": 1
}
```

Passes when the entity has a beneficial or neutral effect at level II or higher.
