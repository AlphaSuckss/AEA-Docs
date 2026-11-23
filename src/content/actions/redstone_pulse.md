---
title: "Redstone Pulse (Block Action Type)"
nav_title: "Redstone Pulse"
description: "Sends a short redstone signal into a block, or gives out one from a position, without changing any blocks."
order: 3
---

Sends a short redstone signal into a block, or gives out one from a position, for a set number of ticks. No block is placed or changed: the power is invisible, and it ends on its own.

It works on anything that reacts to redstone, vanilla or modded. Pistons, redstone wire, lamps, doors, TNT, repeaters and machines from mods such as Create all read power from the world the same way, so they see the pulse as they would a lever or a redstone block.

Type ID: `aea:redstone_pulse`

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `mode` | String | `"receive"` | `"receive"` powers the block itself: a piston extends, a door opens, wire lights up. `"emit"` makes the position give out power, like a redstone block put there for a moment. It works on air too. |
| `strength` | Integer | `15` | Signal strength, from 1 to 15. Wire carries this level on. |
| `duration` | Integer | `4` | How long the pulse lasts, in game ticks (20 per second). |
| `strong` | Boolean | `false` | Whether the power also goes on through a solid block, like a lever's power goes through the block it sits on. With `"receive"` on a solid block, the block then powers everything next to it. |
| `sides` | [Direction](https://minecraft.wiki/w/Direction) or Array of Directions | _all sides_ | Which sides of the block the power comes in through (`"receive"`) or goes out of (`"emit"`), such as `"north"` or `"up"`. |

Pulsing a position that already has a pulse in the same mode keeps the higher strength and the longer time left.

Redstone reacts on the server only; the action does nothing on the client.

## Command

`/aea redstone pulse <pos> [receive|emit] [strength] [duration] [strong]` sends the same pulse from a command or function. It needs permission level 2. This lets a data pack pulse a position it stored somewhere else, for example at a marker entity:

```
execute at @e[type=marker,tag=linked] run aea redstone pulse ~ ~ ~
```

## Examples

```json
{
    "type": "apoli:active_self",
    "key": { "key": "key.apoli.primary_active" },
    "cooldown": 40,
    "entity_action": {
        "type": "apoli:raycast",
        "distance": 12,
        "block": true,
        "entity": false,
        "block_action": { "type": "aea:redstone_pulse" }
    }
}
```

A key that powers the block the player looks at, up to 12 blocks away: a door, a piston or a machine.

```json
{
    "type": "apoli:active_self",
    "key": { "key": "key.apoli.secondary_active" },
    "cooldown": 20,
    "entity_action": {
        "type": "apoli:and",
        "actions": [
            { "type": "apoli:exhaust", "amount": 2 },
            {
                "type": "apoli:block_action_at",
                "block_action": { "type": "aea:redstone_pulse", "mode": "emit", "duration": 60 }
            }
        ]
    }
}
```

For some hunger, the player becomes a power source for 3 seconds. Wire, lamps and pistons around them turn on.

```json
{
    "type": "apoli:action_over_time",
    "interval": 4,
    "entity_action": {
        "type": "apoli:block_action_at",
        "block_action": {
            "type": "apoli:offset",
            "y": -1,
            "action": { "type": "aea:redstone_pulse", "duration": 6 }
        }
    }
}
```

The block under the player stays powered while they stand on it. Each pulse lasts a little longer than the gap between them, so the power never drops.
