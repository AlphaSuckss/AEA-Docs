---
title: "Prevent Spawn Point (Power Type)"
nav_title: "Prevent Spawn Point"
description: "Stops the player's spawn point from being set or moved."
order: 8
---

Stops the spawn point of the player who has the power from being set or moved. Beds, respawn anchors, `/spawnpoint` and anything else that sets a spawn point are covered. The player keeps whatever spawn point they had when the power became active.

The player can still sleep in beds. Clearing a spawn point still works, for example when the player's bed is broken or their anchor runs out of charges.

Type ID: `aea:prevent_spawn_point`

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `source` | String or Array of Strings | all sources | Which ways of setting the spawn point are blocked. See [Sources](#sources). |
| `message` | [Text Component](https://minecraft.wiki/w/Text_component_format) | _optional_ | Shown above the hotbar when the power blocks a spawn point. |

## Sources

| Value | Blocks spawn points set by |
| --- | --- |
| `"bed"` | sleeping in, or using, a bed. |
| `"respawn_anchor"` | using a charged respawn anchor. |
| `"command"` | the `/spawnpoint` command. |
| `"other"` | anything else, such as [`apoli:modify_player_spawn`](https://0vergrown.github.io/Handbook/docs/datapack/powers/modify_player_spawn) or another mod. |

> [!NOTE]
> When `/spawnpoint` is blocked, the command still reports that it set the spawn point. A blocked respawn anchor still plays its sound.

## Examples

```json
{
    "type": "aea:prevent_spawn_point",
    "message": {
        "text": "Your spawn point can't be changed.",
        "color": "red"
    }
}
```

The player's spawn point can't be changed in any way, and they are told so when they try.

```json
{
    "type": "aea:prevent_spawn_point",
    "source": ["bed", "respawn_anchor"]
}
```

Beds and respawn anchors don't set the player's spawn point. `/spawnpoint` and powers still can.
