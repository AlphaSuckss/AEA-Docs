---
title: "Data Pack Gamerules"
nav_title: "Gamerules"
description: "Origin packs can add their own gamerules, so each server can switch features on or off."
order: 3
---

A data pack can add its own gamerules. Server owners change them with `/gamerule`, like any vanilla rule, and the pack reads them in conditions and expressions.

For example, a creeper origin can have a rule that controls whether its explosions break blocks. A server that does not want block damage turns it off without editing the pack:

```text
/gamerule example:creeper_break_blocks false
```

## Adding a gamerule

Each gamerule is a JSON file in the pack's `gamerules` folder:

```text
my_pack/
└── data/
    └── example/
        └── gamerules/
            ├── creeper_break_blocks.json
            └── ability_cooldown.json
```

The rule's name is the namespace and the file name: `data/example/gamerules/creeper_break_blocks.json` adds `example:creeper_break_blocks`. File names can only use lowercase letters, digits, `_`, `-` and `.`, so rule names follow the same rule.

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | String | | `"boolean"` for a true or false rule, `"integer"` for a number rule. |
| `default` | Boolean or Integer | `false` or `0` | The value the rule has until someone changes it. |
| `min` | Integer | _no limit_ | The lowest value `/gamerule` accepts. Number rules only. |
| `max` | Integer | _no limit_ | The highest value `/gamerule` accepts. Number rules only. |

```json
{
    "type": "boolean",
    "default": true
}
```

```json
{
    "type": "integer",
    "default": 200,
    "min": 0,
    "max": 1200
}
```

## Changing a gamerule

`/gamerule <rule>` shows the value and `/gamerule <rule> <value>` changes it. Like vanilla rules, this needs operator permission.

Values are saved with the world. If a pack is removed, the values of its rules are kept and come back when the pack does.

## Using a gamerule

In a condition, use [`aea:gamerule`](/conditions/gamerule):

```json
{
    "type": "apoli:if_else",
    "condition": {
        "type": "aea:gamerule",
        "gamerule": "example:creeper_break_blocks"
    },
    "if_action": {
        "type": "apoli:explode",
        "power": 3,
        "destruction_type": "break"
    },
    "else_action": {
        "type": "apoli:explode",
        "power": 3,
        "destruction_type": "none"
    }
}
```

An explosion that only breaks blocks while `example:creeper_break_blocks` is on.

In an [expression](https://0vergrown.github.io/Handbook/docs/datapack/data-types/expression), use `gamerule(<rule>)`. It gives the rule's value, with `true` and `false` as `1` and `0`:

```text
gamerule(example:ability_cooldown) * 2
```
