---
title: "Release Mind Control (Entity Action Type)"
nav_title: "Release Mind Control"
description: "Ends the mind control the entity is part of."
order: 2
---

Ends the [mind control](/actions/mind_control) the entity is part of, whether it is the one in control or the one being controlled. The controlling player goes back to their body.

Type ID: `aea:release_mind_control`

This type has no fields.

## Examples

```json
{
    "type": "apoli:active_self",
    "key": { "key": "key.apoli.secondary_active" },
    "entity_action": { "type": "aea:release_mind_control" },
    "condition": { "type": "aea:mind_controlling" }
}
```

A key power that lets the player return to their body.
