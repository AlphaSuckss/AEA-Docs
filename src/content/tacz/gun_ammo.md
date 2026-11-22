---
title: "Gun Ammo (Item Condition Type)"
nav_title: "Gun Ammo"
description: "Checks whether the item is TaCZ ammo."
order: 5
---

Passes when the item is TaCZ ammo, optionally of certain kinds.

Requires TaCZ. Type ID: `aea:gun_ammo`

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `ammo` | Identifier or Array of Identifiers | _optional_ | Ammo ids, such as `"tacz:9mm"`. Absent, any ammo passes. |

## Examples

```json
{
    "type": "aea:gun_ammo",
    "ammo": ["tacz:12g", "tacz:50bmg"]
}
```

The item is 12 gauge shells or .50 BMG rounds.
