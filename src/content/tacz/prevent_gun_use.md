---
title: "Prevent Gun Use (Power Type)"
nav_title: "Prevent Gun Use"
description: "Stops the player from shooting, aiming, reloading or using melee with TaCZ guns."
order: 2
---

Stops the entity from shooting, aiming, reloading or making melee attacks with TaCZ guns. Each can be switched off on its own. Blocked actions don't happen at all: no round is used, and nothing plays on the player's screen.

Requires TaCZ. Type ID: `aea:prevent_gun_use`

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `gun` | Identifier or Array of Identifiers | _optional_ | See [Gun filter](/tacz/overview#gun-filter). |
| `gun_type` | String or Array of Strings | _optional_ | See [Gun filter](/tacz/overview#gun-filter). |
| `shoot` | Boolean | `true` | Blocks shooting. |
| `aim` | Boolean | `true` | Blocks aiming down sights. |
| `reload` | Boolean | `true` | Blocks reloading. |
| `melee` | Boolean | `true` | Blocks melee attacks with the gun. |
| `message` | [Text Component](https://minecraft.wiki/w/Text_component_format) | _optional_ | Shown above the hotbar when shooting, reloading or melee is blocked. |

## Examples

```json
{
    "type": "aea:prevent_gun_use",
    "message": { "text": "Your paws can't work this.", "color": "red" }
}
```

The player can't use guns at all.

```json
{
    "type": "aea:prevent_gun_use",
    "gun_type": ["sniper", "rpg"],
    "aim": false,
    "reload": false,
    "melee": false
}
```

The player can't fire snipers or rocket launchers, but can still aim, reload and use melee with them.
