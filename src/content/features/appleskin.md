---
title: "AppleSkin Compatibility"
nav_title: "AppleSkin"
description: "AppleSkin's tooltips and hunger bar show the food values that apoli:modify_food gives."
order: 7
---

When [AppleSkin](https://modrinth.com/mod/appleskin) is installed, its food tooltips and hunger bar preview show the nutrition and saturation that `apoli:modify_food` powers give, instead of the item's normal values.

Apoli applies `apoli:modify_food` when the food is eaten, not to the item itself, so without this AppleSkin shows the item's normal values. AEA gives AppleSkin the same values Apoli uses when the food is eaten.

Nothing needs setting up: with both mods installed, it works for every `apoli:modify_food` power. Without AppleSkin, AEA adds nothing.

## Example

```json
{
    "type": "apoli:modify_food",
    "item_condition": { "type": "apoli:nbt", "nbt": "{IsKindnessFood: 1b}" },
    "food_modifiers": [{ "operation": "multiply_base_multiplicative", "value": 1 }],
    "saturation_modifiers": [{ "operation": "multiply_base_multiplicative", "value": 1 }]
}
```

Food marked with `IsKindnessFood` gives twice the nutrition and saturation, and AppleSkin's tooltip shows twice as many shanks.
