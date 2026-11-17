---
title: "Mind Controlling (Entity Condition Type)"
nav_title: "Mind Controlling"
description: "Checks whether the entity is controlling another with mind control."
order: 3
---

Passes when the entity is a player in control of another entity through [`aea:mind_control`](/actions/mind_control).

Type ID: `aea:mind_controlling`

This type has no fields.

## Examples

```json
{
    "type": "aea:mind_controlling",
    "inverted": true
}
```

Use it on a key power that starts mind control, so it can't be used again while the player is already controlling something.
