---
title: "Gun Event Powers (Power Types)"
nav_title: "Gun Event Powers"
description: "Powers that run actions when the player fires, hits, kills, hits a block, reloads or uses melee with a TaCZ gun."
order: 3
---

These powers run actions on TaCZ gun events. They all run on the server, and all take the [gun filter](/tacz/overview#gun-filter) fields `gun` and `gun_type` to limit them to some guns. An action that something else blocked, such as [`aea:prevent_gun_use`](/tacz/prevent_gun_use), doesn't run them.

Requires TaCZ.

| Type ID | Runs when the entity |
| --- | --- |
| `aea:action_on_gun_fire` | fires a round. Guns that fire several pellets or a burst run it for each round fired. |
| `aea:action_on_gun_hit` | hits an entity with a bullet, after the damage is dealt. |
| `aea:action_on_gun_kill` | kills an entity with a bullet. |
| `aea:action_on_bullet_hit_block` | hits a block with a bullet. |
| `aea:action_on_gun_reload` | starts or finishes a reload. |
| `aea:action_on_gun_melee` | makes a melee attack with a gun. |

## Fire, reload and melee

`aea:action_on_gun_fire`, `aea:action_on_gun_reload` and `aea:action_on_gun_melee`.

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `entity_action` | [Entity Action Type](https://0vergrown.github.io/Handbook/docs/datapack/actions/entity) | _optional_ | Run on the entity. |
| `when` | String | `"start"` | Reload only: `"start"` runs it when the reload starts, `"finish"` when the new rounds are in. |

## Hit and kill

`aea:action_on_gun_hit` and `aea:action_on_gun_kill`. The entity with the power is the actor; the entity hit is the target.

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `bientity_action` | [Bi-entity Action Type](https://0vergrown.github.io/Handbook/docs/datapack/actions/bientity) | _optional_ | Run on the entity and the one it hit. |
| `bientity_condition` | [Bi-entity Condition Type](https://0vergrown.github.io/Handbook/docs/datapack/conditions/bientity) | _optional_ | Must pass for the action to run. |
| `headshot` | Boolean | _optional_ | `true` runs it only on headshots, `false` only on other hits. Absent, any hit counts. |

## Block hits

`aea:action_on_bullet_hit_block`.

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `entity_action` | Entity Action Type | _optional_ | Run on the entity that fired. |
| `block_action` | [Block Action Type](https://0vergrown.github.io/Handbook/docs/datapack/actions/block) | _optional_ | Run on the block hit. |
| `block_condition` | [Block Condition Type](https://0vergrown.github.io/Handbook/docs/datapack/conditions/block) | _optional_ | Must pass for either action to run. |

## Examples

```json
{
    "type": "aea:action_on_gun_hit",
    "headshot": true,
    "bientity_action": {
        "type": "apoli:target_action",
        "action": {
            "type": "apoli:apply_effect",
            "effect": { "effect": "minecraft:glowing", "duration": 100 }
        }
    }
}
```

Headshots mark the target with Glowing for 5 seconds.

```json
{
    "type": "aea:action_on_gun_kill",
    "bientity_action": {
        "type": "apoli:actor_action",
        "action": { "type": "aea:refill_ammo" }
    }
}
```

Each kill fills the magazine of the gun in hand.

```json
{
    "type": "aea:action_on_bullet_hit_block",
    "gun_type": "shotgun",
    "block_condition": { "type": "apoli:block", "block": "minecraft:glass" },
    "block_action": { "type": "apoli:execute_command", "command": "setblock ~ ~ ~ air destroy" }
}
```

Shotgun pellets break glass.

```json
{
    "type": "aea:action_on_gun_reload",
    "when": "finish",
    "entity_action": {
        "type": "apoli:apply_effect",
        "effect": { "effect": "minecraft:speed", "duration": 60 }
    }
}
```

Finishing a reload gives Speed for 3 seconds.
