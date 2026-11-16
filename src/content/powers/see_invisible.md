---
title: "See Invisible (Power Type)"
nav_title: "See Invisible"
description: "Lets the entity see invisible entities, however they became invisible."
order: 6
---

Lets the entity that has the power see invisible entities. They are drawn see-through, at the opacity the power sets, and their armor, held items and name tag show as well.

The power's own `condition` is checked on the server, so it can use anything the server knows.

Only what the power holder sees changes. The entity is still invisible to everyone else, and the [`apoli:invisible`](https://0vergrown.github.io/Handbook/docs/datapack/entity-conditions/invisible) condition still passes for it.

Type ID: `aea:see_invisible`

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `opacity` | Float | `0.5` | How see-through revealed entities look, from `0` (fully visible) to `1` (fully transparent). |
| `bientity_condition` | [Bi-entity Condition](https://0vergrown.github.io/Handbook/docs/datapack/bientity-conditions) | _optional_ | Which invisible entities are revealed. The actor is the power holder and the target is the invisible entity. |
| `source` | String, Object or Array | `"any"` | Which kinds of invisibility are seen through. See [Sources](#sources). |

## Sources

| Value | Reveals entities that are invisible and |
| --- | --- |
| `"any"` | are invisible for any reason. |
| `"effect"` | have the Invisibility effect. |
| A power ID, such as `"mypack:cloak"` | have that power active. |
| A power tag, such as `"#mypack:cloaks"` | have an active power with that tag in its [`tags`](https://0vergrown.github.io/Handbook/docs/datapack/introduction/powers#tagging-powers). |

A source can also be written as an object, the format AEA for Fabric uses:

| Object | Same as |
| --- | --- |
| `{"type": "any"}` | `"any"` |
| `{"type": "effect"}` | `"effect"`. Add `"effect": "<effect ID>"` to reveal entities that have another effect instead. |
| `{"type": "power", "power": "mypack:cloak"}` | `"mypack:cloak"` |
| `{"type": "power_tag", "tag": "mypack:cloaks"}` | `"#mypack:cloaks"` |

With an array, an entity is revealed when any of the values matches. If the holder has several of these powers, the one that makes the entity most visible is used.

## Examples

```json
{
    "type": "aea:see_invisible",
    "opacity": 0.5
}
```

All invisible entities are drawn half see-through.

```json
{
    "type": "aea:see_invisible",
    "opacity": 0,
    "source": ["effect", "#mypack:cloaks"],
    "bientity_condition": {
        "type": "apoli:target_condition",
        "condition": {
            "type": "apoli:entity_type",
            "entity_type": "minecraft:player"
        }
    }
}
```

Players who are invisible from the Invisibility effect, or from a power tagged `mypack:cloaks`, are drawn fully visible. Other invisible entities stay hidden.
