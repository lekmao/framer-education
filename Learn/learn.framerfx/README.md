Learn is a design system for Framer X.

👉 [Explore the code!](https://github.com/framer/framer-education/tree/master/Learn/learn.framerfx)

👉 [Read the docs!](https://github.com/framer/framer-education/wiki)

👉 [See example projects!](https://github.com/framer/framer-education/tree/master/Projects)

# Usage

## Components 

The package currently includes:

- Logo
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

To use these components inside of your code components, import them from `"@framer/steveruizok.education/code"`.

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

## Colors

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

## Utils

This package also includes several helper utilities.

```tsx
import * as React from "react"
import { Stack, Frame } from "framer"
import { range } from "@framer/steveruizok.education/code"

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

- Removes map (performance issues)
- Fixes padding on Text
- Fixes stepper
- Adds stepper to row item
- Updates valid check for slider
- Updates validation checks
- Updates TabBar to accept new tab index
- Updates Image
- Resizing on Icons
- Text reflow on resize
- Updates artwork, title
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