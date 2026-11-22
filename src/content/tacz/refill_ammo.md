---
title: "Refill Ammo (Entity and Item Action Type)"
nav_title: "Refill Ammo"
description: "Fills the magazine of a TaCZ gun, or adds some rounds."
order: 8
---

Fills the magazine of a TaCZ gun, or adds a number of rounds without going over the magazine's size. Extended magazines count. No ammo is taken from the inventory.

As an entity action it works on the gun in the entity's main hand. As an item action it works on the item.

Requires TaCZ. Type ID: `aea:refill_ammo`

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `amount` | Integer | _optional_ | Rounds to add. Absent, the magazine is filled. |

## Examples

```json
{
    "type": "apoli:active_self",
    "key": { "key": "key.apoli.primary_active" },
    "cooldown": 600,
    "entity_action": { "type": "aea:refill_ammo" }
}
```

A key that fills the held gun's magazine, usable every 30 seconds.

```json
{
    "type": "apoli:action_over_time",
    "interval": 40,
    "entity_action": { "type": "aea:refill_ammo", "amount": 1 }
}
```

The held gun gains a round every 2 seconds.
