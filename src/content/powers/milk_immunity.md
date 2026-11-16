---
title: "Milk Immunity (Power Type)"
nav_title: "Milk Immunity"
description: "Stops milk from removing some or all of the entity's status effects."
order: 7
---

Stops milk from removing status effects from the entity that has the power. It covers milk buckets and anything else that clears effects the way milk does.

Type ID: `aea:milk_immunity`

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `effect` | [Identifier](https://0vergrown.github.io/Handbook/docs/datapack/data-types/identifier) | _optional_ | An effect milk cannot remove. |
| `effects` | Array of [Identifiers](https://0vergrown.github.io/Handbook/docs/datapack/data-types/identifier) | _optional_ | Effects milk cannot remove. |
| `effect_type` | String or Array of Strings | _optional_ | Every effect of these types: `"beneficial"`, `"harmful"` or `"neutral"`. |
| `inverted` | Boolean | `false` | Turns the list around: milk can only remove the effects listed, and keeps all others. |

The effects in `effect`, `effects` and `effect_type` are added together. Without any of them, milk removes nothing at all.

## Examples

```json
{
    "type": "aea:milk_immunity",
    "effects": [
        "minecraft:strength",
        "minecraft:night_vision"
    ]
}
```

Milk cannot remove Strength or Night Vision. It still removes every other effect.

```json
{
    "type": "aea:milk_immunity",
    "effect": "example:custom_status_effect",
    "inverted": true
}
```

Milk can only remove `example:custom_status_effect`. Every other effect stays.

```json
{
    "type": "aea:milk_immunity",
    "effect_type": "harmful"
}
```

Milk cannot remove harmful effects such as Poison or Wither.
