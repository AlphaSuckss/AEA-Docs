---
title: "Hitbox Part (Power Type)"
nav_title: "Hitbox Part"
description: "Adds an extra hit box that follows the entity's body, for models larger than the entity's own box."
order: 5
---

Adds an extra hit box beside the entity that has the power. The box turns with the entity's body, and a hit that lands on it counts as a hit on the entity. Use it when a model sticks out of the entity's own hit box, such as the horse body of a centaur.

Type ID: `aea:hitbox_part`

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `width` | Float | `1.0` | Width and depth of the box in blocks, from `0.05` to `16`. |
| `height` | Float | `1.0` | Height of the box in blocks, from `0.05` to `16`. |
| `forward` | Float | `0.0` | How far in front of the entity the box is centred. A negative value puts it behind. |
| `up` | Float | `0.0` | How far above the entity's feet the bottom of the box is. |
| `right` | Float | `0.0` | How far to the entity's right the box is centred. A negative value puts it to the left. |
| `scale_with_entity` | Boolean | `true` | The size and the offsets grow and shrink with the entity's scale. |

## How the box behaves

- Melee attacks and projectiles that hit the box damage the entity, and the knockback moves the entity.
- The box follows the body, not the head. Looking around does not move it.
- The entity cannot hit its own box, and its own projectiles pass through it.
- The box does not collide with blocks and does not push other entities. The entity still fits through any gap its own hit box fits through.
- The box is removed while the power's `condition` is false or the power is suppressed.
- With hit boxes shown (F3 + B), the box is outlined in green.

Each power adds one box. For several boxes, give the entity several powers, or put them in one [`apoli:multiple`](https://0vergrown.github.io/Handbook/docs/datapack/powers/multiple) power. The power works on mobs as well as players.

## Examples

```json
{
    "type": "aea:hitbox_part",
    "width": 1.2,
    "height": 1.3,
    "forward": -1.1
}
```

A box 1.2 blocks wide and 1.3 tall, centred 1.1 blocks behind the entity. It covers the horse body of a centaur.

```json
{
    "type": "apoli:multiple",
    "left_wing": {
        "type": "aea:hitbox_part",
        "width": 0.9,
        "height": 0.8,
        "up": 0.9,
        "right": -1.0
    },
    "right_wing": {
        "type": "aea:hitbox_part",
        "width": 0.9,
        "height": 0.8,
        "up": 0.9,
        "right": 1.0
    }
}
```

Two boxes at shoulder height, one block out on each side, for a pair of spread wings.
