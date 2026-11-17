---
title: "Mind Control (Bi-entity Action Type)"
nav_title: "Mind Control"
description: "The actor, a player, takes control of the target: a mob or another player."
order: 1
---

The actor takes control of the target. The actor must be a player; the target can be any mob or another player. While in control, the player sees through the target's eyes, and their keys and mouse move the target, swing and use its hands, pick its hotbar slot and so on.

It works at any distance and in any dimension. The player's mind follows the target, and their body stays where they stood, wearing their skin, armour and held items. The body can be hit, and every hit on it lands on the player. If a hit would kill them, control ends first and they die in their body.

Control ends when:

- it runs out (`duration`) or `release_condition` passes;
- the target struggles free (`struggle`);
- [`aea:release_mind_control`](/actions/release_mind_control) runs on either of them;
- the controlling player dies, logs out, or has their game mode changed;
- a controlled mob dies or is removed.

A controlled player who dies stays controlled after they respawn. A controlled player who logs out is set free.

When control ends, the player is put back in their body, in the game mode they had. This also happens on their next login if the server stopped or they disconnected mid-control.

Type ID: `aea:mind_control`

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `controls` | String or Array of Strings | all of them | What the player takes over. See [Controls](#controls). Anything not listed stays with the target. |
| `duration` | Integer | _optional_ | How many ticks control lasts. Without it, control lasts until something else ends it. |
| `release_condition` | [Bi-entity Condition Type](https://0vergrown.github.io/Handbook/docs/datapack/bientity-conditions) | _optional_ | Checked every tick, with the controlling player as the actor and the target as the target. Control ends when it passes. |
| `struggle` | Integer | _optional_ | A controlled player breaks free after pressing this many of the keys the controller has taken. Without it, they can't struggle free. |
| `kill_credit` | Boolean | `false` | When `true`, the controlling player gets the kill if the target dies to a fall, lava or anything else with no attacker. Kills the target makes read "X was slain by Target (controlled by Player)". |
| `close_screens` | Boolean | `false` | When `true`, chests and other containers the target opens are closed straight away. |
| `on_start` | [Bi-entity Action Type](https://0vergrown.github.io/Handbook/docs/datapack/bientity-actions) | _optional_ | Runs when control starts, with the controlling player as the actor. |
| `on_release` | [Bi-entity Action Type](https://0vergrown.github.io/Handbook/docs/datapack/bientity-actions) | _optional_ | Runs when control ends, if both are still there. |

## Controls

| Value | The player controls |
| --- | --- |
| `"move"` | Walking forward, back and sideways. |
| `"look"` | Where the target looks. |
| `"jump"` | Jumping. A flying or swimming mob rises instead. |
| `"sneak"` | Sneaking. A flying or swimming mob sinks instead. |
| `"sprint"` | Sprinting. |
| `"attack"` | Attacking and mining. A mob attacks what it is looking at. |
| `"use"` | Using items and blocks. A creeper ignites, a ghast or blaze shoots where it is looking, and other ranged mobs shoot at the entity they are looking at. |
| `"hotbar"` | Picking hotbar slots with the number keys or the mouse wheel. |
| `"drop"` | Dropping the held item. |
| `"swap_hands"` | Swapping items between hands. |
| `"chat"` | Chat. What the player types is sent as the target, and the target can't chat. |
| `"commands"` | Commands. What the player runs is run as the target, with the target's permissions, and the target can't run commands. |

The target's own keys for everything in `controls` stop working; everything else stays theirs.

> [!NOTE]
> While in control, the player is a spectator standing where the target is. Conditions on the controlling player, including `release_condition`, see them there, not at their body. Give them a way out, such as a key power that runs [`aea:release_mind_control`](/actions/release_mind_control), or a `duration`.

## Examples

```json
{
    "type": "apoli:raycast",
    "distance": 16,
    "entity": true,
    "block": false,
    "bientity_action": {
        "type": "aea:mind_control",
        "duration": 200,
        "struggle": 30,
        "kill_credit": true
    }
}
```

An entity action, for example from a key power: takes over the mob or player the user is looking at for 10 seconds. A controlled player can press keys 30 times to break free.

```json
{
    "type": "aea:mind_control",
    "controls": ["move", "look", "jump"],
    "release_condition": {
        "type": "apoli:target_condition",
        "condition": {
            "type": "apoli:in_block",
            "block_condition": { "type": "apoli:block", "block": "minecraft:water" }
        }
    }
}
```

Walks the target around, but leaves their hands, hotbar, chat and commands alone. Control ends once the target is in water.
