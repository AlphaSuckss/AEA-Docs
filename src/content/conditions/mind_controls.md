---
title: "Mind Controls (Bi-entity Condition Type)"
nav_title: "Mind Controls"
description: "Checks whether the actor is controlling the target."
order: 4
---

Passes when the actor is controlling the target through [`aea:mind_control`](/actions/mind_control).

Type ID: `aea:mind_controls`

This type has no fields.

## Examples

```json
{
    "type": "apoli:modify_damage_dealt",
    "bientity_condition": { "type": "aea:mind_controls", "inverted": true },
    "modifier": { "operation": "multiply_total_multiplicative", "amount": -0.5 }
}
```

Damage dealt to anything other than the controlled entity is halved.
