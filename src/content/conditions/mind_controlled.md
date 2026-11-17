---
title: "Mind Controlled (Entity Condition Type)"
nav_title: "Mind Controlled"
description: "Checks whether the entity is being mind controlled."
order: 2
---

Passes when the entity is being controlled by [`aea:mind_control`](/actions/mind_control).

Type ID: `aea:mind_controlled`

This type has no fields.

## Examples

```json
{
    "type": "apoli:invulnerability",
    "damage_condition": { "type": "apoli:amount", "comparison": ">=", "compare_to": 0 },
    "condition": { "type": "aea:mind_controlled" }
}
```

The entity can't be hurt while it is being controlled.
