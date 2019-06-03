# Learn

Learn is a design system for Framer X. Both the docs and this package are in progress, so expect some changes!

- Shared Colors
- Icon
- Text
- Image
- Favorite
- Link
- Switch
- Button
- Checkbox
- Radio
- CheckboxGroup
- RadioGroup
- Slider
- Stepper
- TextInput
- Select
- Segment
- Tabs
- Tab Bar
- Navigation Bar
- Card
- Map

# Usage

To use these components inside of your code components, import them from `"@framer/steveruizok.education/code”`.

## Components

```jsx
import * as React from "react"
import { Frame } from "framer"
import { Button, Icon } from "@framer/steveruizok.education/code”

export function MyComponent (props) {
  return (
    <Frame size={“100%”}>
      <Button text=“Click here!”/>
      <Icon icon=“accessible”/>
    </Frame>
  }
}
```

### Colors

You can use the same import to pull the shared colors:

```tsx
import { Override } from “framer"
import { colors } from "@framer/steveruizok.education/code”

export function ColorOverride: Override () {
  return {
    color: colors.Primary
  }
}
```

### Utils

This package also includes several helper utilities.

```tsx
import * as React from "react"
import { Stack, Frame } from "framer"
import { range } from "@framer/steveruizok.education/code”

export function MyComponent (props) {
  return (
    <Stack size={“100%”}>
      { range(10).map(  i => <Frame/>{i}</Frame>) }
    </Stack>
  }
}
```

Learn currently includes:

* `range`
* `rangeFrom`
* `clamp`
* `normalize`
* `pull`
* `pullAtIndex`
 
# Changelog

- Adds Stepper, removes Styled Components, replaces Icon font with SVG Icons (for offline use)
- Adds index for easier imports
- Adds offline icons
- Adds Card
- Adds Navigation, TabBar, Map
- Fixes Text
- Adds Tabs
- Reworks CheckboxGroup, RadioGroup, adds colors to buttons and links, adds RowItem
- Fixes bug on icon buttons / Text with children
- Adds Active color for active state borders, improves interactive states. 
- All code components that previously imported design components no longer do so. (This should fix some import bugs).
- Fixes disabled tap event.
- Fixes sizes when using components in code.
- Fixes tap event.
- Updates template.
- Adds tabs, nerfs docs.
- Updates text position in Links.
- Adds docs component.
- Fixes toggle bug on Button
- Adds select, palette
- Adds icon, button icon
- Reworks many components
- Adds component component, bumps version
- Adds header card
- Fixes button text
- Adds iPhoneX template
- Adds initial set of components, colors and styles