---
title: "Aiming Gun and Reloading Gun (Entity Condition Types)"
nav_title: "Aiming / Reloading"
description: "Check whether the entity is aiming down sights or reloading a TaCZ gun."
order: 6
---

`aea:aiming_gun` passes while the entity aims down the sights of the TaCZ gun in its main hand. `aea:reloading_gun` passes while it reloads that gun.

Requires TaCZ. Type IDs: `aea:aiming_gun`, `aea:reloading_gun`

These types have no fields.

## Examples

```json
{
    "type": "apoli:modify_damage_taken",
    "condition": { "type": "aea:reloading_gun" },
    "modifier": { "operation": "multiply_total_multiplicative", "amount": -0.3 }
}
```

The player takes 30% less damage while reloading.
