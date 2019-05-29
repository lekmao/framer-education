# Learn

Learn is a design system for Framer X. You can find docs for the project’s components [here](https://framer-learn-docs.netlify.com/). If you’re getting advanced with Framer X, these components are a great place to pull from and explore.

Both the docs and this package are in progress, so expect some changes!

# Usage

To use these components inside of your code components, import them from the library like this:

```jsx
import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { Button } from "@framer/steveruizok.education/code/Button"
```

To use the project’s shared colors in your code, you can use this import:

```tsx
import { colors } from "@framer/steveruizok.education/code/canvas”
```

# Changelog

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