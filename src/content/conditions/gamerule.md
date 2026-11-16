---
title: "Gamerule (Condition Type)"
nav_title: "Gamerule"
description: "Checks the value of a data pack gamerule or a vanilla gamerule."
order: 1
---

Checks the value of a gamerule. It works with [data pack gamerules](/features/gamerules) and with vanilla gamerules.

This condition works in every condition context: entity, bi-entity, block, item, damage, fluid, biome and static conditions. A static condition reads the server's value.

Type ID: `aea:gamerule`

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `gamerule` | String | | The rule. A data pack gamerule is written with its namespace, such as `"example:creeper_break_blocks"`. A vanilla rule is written as its plain name, such as `"keepInventory"`. |
| `comparison` | [Comparison](https://0vergrown.github.io/Handbook/docs/datapack/data-types/comparison) | _optional_ | How to compare the rule's value with `compare_to`. |
| `compare_to` | Float | _optional_ | The number to compare with. Give both `comparison` and `compare_to`, or neither. |

Without `comparison`, the condition passes when the rule is `true`, or when a number rule is not `0`. With it, `true` and `false` count as `1` and `0`.

> [!NOTE]
> Players' games only know a few vanilla gamerules, so a vanilla rule is only reliable in conditions the server checks. Data pack gamerules are sent to players and work everywhere.

## Examples

```json
{
    "type": "aea:gamerule",
    "gamerule": "example:creeper_break_blocks"
}
```

Passes while `example:creeper_break_blocks` is `true`.

```json
{
    "type": "aea:gamerule",
    "gamerule": "example:ability_cooldown",
    "comparison": ">=",
    "compare_to": 100
}
```

Passes while `example:ability_cooldown` is 100 or more.
