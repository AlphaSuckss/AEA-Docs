---
title: "Power Tags"
nav_title: "Power Tags"
description: "Group powers under one name, the way vanilla tags group items or blocks."
order: 4
---

A power tag groups powers under one name, the way vanilla tags group items or blocks. A field that takes a power tag accepts `#` followed by the tag's name, such as `"#mypack:cloaks"`.

The `source` field of [See Invisible](/powers/see_invisible) takes power tags.

## Adding a power tag

Each tag is a JSON file in the pack's `tags/power` folder, in the same format as vanilla tags:

```text
my_pack/
└── data/
    └── mypack/
        └── tags/
            └── power/
                └── cloaks.json
```

```json
{
    "values": [
        "mypack:cloak",
        "mypack:shadow_step",
        "#mypack:night_powers"
    ]
}
```

The file `data/mypack/tags/power/cloaks.json` adds the tag `#mypack:cloaks`.

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `values` | Array of Strings | | Power IDs, and other power tags written with `#`. |
| `replace` | Boolean | `false` | Replaces what packs loaded earlier put in this tag, instead of adding to it. |

As with vanilla tags, packs that define the same tag add their entries together unless one sets `replace`. An entry can also be written as `{"id": "mypack:cloak", "required": false}`.
