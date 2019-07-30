Learn is an open source design system for Framer X, created to support workshops and tutorials. Every component in the package is built with Framer’s API, so you can use the [package source](https://github.com/framer/framer-education/tree/master/Learn/learn.framerfx) as a reference for doing things in Framer X. Made with 🦋 by [@steveruizok](https://twitter.com/steveruizok).

## ✅ [Read the docs!](https://framer-learn-docs.netlify.com/)

## ✅ [Download the source & examples!](https://github.com/framer/framer-education/)

# Usage

This package is documented separately. 

## Templates

Templates are stored as Design Components. To use them:

- Create an instance of the Template
- Right click the instance and select Detatch from Master

You can find additional templates in the Templates folder at the bottom of the components list.

## Components

The package includes a number of code components that you can use on the canvas and in your code. **All of the components have additional props that may only be set through overrides or JSX.** 

To use the package's components in your code, import them from `"@framer/steveruizok.education/code”`.

Learn more and see examples [in the docs](https://framer-learn-docs.netlify.com/).

### Lists

The package’s Lists are helpers for creating scrolling stacks of content. They are designed to be used with overrides. [Learn more](https://framer-learn-docs.netlify.com/content/ItemList/)


## Colors

The package also includes shared colors. You can use the same import to pull the shared colors from the original package. [Learn more](https://framer-learn-docs.netlify.com/content/Colors/).

## Utils

This package also includes several [helper utilities](https://framer-learn-docs.netlify.com/content/Utils/) for common tasks in your code.

# Changelog

- Fixes clear on Text Input
- Adds Favorite to row item
- Adds colors to sliders
- Adds TextArea
- Adds scroll prop to List
- Tweaks TextInput padding for clearable
- Cleans up content for lists
- Adds Message
- Adds List
- Optitmization
- Updates colors, adds disabled state to stepper buttons (at min / max values), changes props for CardList from `items` to `cards`, adds `emptyText` prop to ItemList.
- Adds Map
- Adds Framer Bridge integration
- Adds ItemList, CardList
- Fixes clearable TextInput
- Rewrites Slider
- Adds link to new docs, adds TabIndex to TextInput, updates Props and exports.
- Fixes text resize on canvas
- Restores index, renames and adds Stack to blank Template
- Adds Modal, AlertModal
- Adds ProgressBar
- Reverses last
- Removes SVG icons and library, replaces with spritesheet
- Removes stepper as default RowItem component
- Adds DatePicker / DatePickerModal
- Adds Glow color.
- Adds background property control to Text.
- Fixes text width on tabs
- Removes left padding from RowItem
- Adds isEmail utility
- Fixes disabled on Checkbox.
- Adds required to inputs, clarifies validation.
- Fixes spacing in links.
- Adds titles to Slider
- Adds sleep utility
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
