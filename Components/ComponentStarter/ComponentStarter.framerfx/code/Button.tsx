import * as React from "react"
import { Frame, FrameProps, addPropertyControls, ControlType } from "framer"

/*
Writing Code Components
by @steveruizok

In this file, I've written a code component to demonstrate tips, tricks and 
best practices. Throughout the code, you'll find numbers like this [1] that 
correspond to notes at the bottom of this file. You'll also find a skeleton,
component in the Starter.tsx file. 

Good luck!
*/

// [1]
type Props = FrameProps & {
    text: string
    disabled?: boolean
    disabledOpacity?: number
}

//                         [2]
export function Button(props: Props) {
    // [3]
    const { text, disabled, style, onTap, ...rest } = props

    // [4]
    const { color } = props

    // [5]
    const variants = {
        initial: {
            scale: 1,
            shadow: "0 2px 5px rgba(0,0,0,.16)",
            textShadow: `0 0px 32px ${color}`,
        },
        hover: {
            scale: 1.015,
            shadow: "0 3px 8px rgba(0,0,0,.16)",
            textShadow: `0 0px 40px ${color}`,
        },
        active: {
            scale: 0.985,
            shadow: "0 1px 2px rgba(0,0,0,.16)",
            textShadow: `0 0px 40px ${color}`,
        },
    }

    // [6]
    return (
        <Frame
            // [7]
            {...rest}
            // [8]
            borderRadius={8}
            // [9]
            style={{
                ...style,
                fontSize: 18,
                fontWeight: 600,
            }}
            // [10]
            onTap={!disabled && onTap}
            // [11]
            variants={!disabled && variants}
            // [12]
            initial="initial"
            whileHover="hover"
            whileTap="active"
            // [13]
            {...(disabled && { opacity: 0.3 })}
        >
            {text}
        </Frame>
    )
}

// [14]
Button.defaultProps = {
    height: 64,
    width: 200,
    text: "Get started",
    color: "#ffffff",
    background: "#0099ff",
    disabled: false,
    // borderRadius: 200,
    // onTap: () => console.log("Tapped!")
}

// [15]
addPropertyControls(Button, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Get Started",
    },
    color: {
        title: "Color",
        type: ControlType.Color,
        defaultValue: "#ffffff",
        // [16]
        hidden: props => !props.text,
    },
    background: {
        title: "Background",
        type: ControlType.Color,
        defaultValue: "#0099ff",
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})

/*
Notes ___________________

[1]
At the top of the component, we define a type for our components props. Our component's props will therefore have two groups: the props of its root component and any custom props that we're adding on top. In Framer, our components usually have a Frame, Stack or Scroll as they're "root" element, or the element that contains of the component's other children. In our case, our root element is a Frame, so we're using the `FrameProps` type, imported from the Framer library. We'll always use the "Partial" keyword to make all of the root component's props optional. We can also make our custom props optional by adding the `?`. In our case, we're making `disabled` optional by adding the `?` after its name.

[2]
In React, our components are functions that take `props` as an argument. We add our `Props` type to that argument in order to tell TypeScript that our props should follow the shape we've just defined above. The editor will now give us suggestions, predictions and warnings as we use those properties. (This kind of "pre-debugging" will save us headaches on more complex components).

[3]
In the body of the function, we "de-structure" our component's `props`. We're picking out the props that we'll use in our code and using the `...` operator to store all of the other properties under the variable `rest`. We'll always want to separate our "custom" props (in this case, `text` and `disabled`). If we're planning to do anything with our root element's `style` prop, we'll need to pull out the `style` prop here, too. Finally, we'll also pull out any props that we might not want to pass to the root element. In this case, we might only want to give our root element an `onTap` prop if `disabled` is false.

[4]
The last step was about doing two things: a) giving us some variables that we can use in our code, and b) creating an object (`rest`) that contains all of the `props` that we want to give to our component's root element. What if we want to use some of our props in our code, but also still give them to our component's root element? In that case, we can de-structure them below.

[5]
Here we're defining a set of variants for our root element, a Frame. Note how we're using the `color` prop, which we de-structured in the previous step, to set our Frame's `textShadow`. These variants are just an object -- they won't do anything until we plug them into our Frame's props.

[6]
Now we're into our JSX, or the elements that our component will return when it renders. Remember that a React project is a "tree" of components, each of which is returning the next "branch" of that tree. In our case, we're returning a Frame that contains some text.

[7]
Our first step is to give our root element (Frame) all of the `rest` props. We use the `...` operator again to "spread" these properties into the component, effectively saying "take whatever this rest object contains and pass it to the Frame as props". This is a powerful pattern: it makes our component as flexible as any other Frame, allowing it to respond to props (like `animate` or `image`) that we haven't specified in our code, but that might want to set later on. And it does this without requiring us to pass them ourselves -- for example, we don't have to write `animate={props.animate}`. This is another reason 

[8]
Remember that `rest` will contain proeprties that have come into our component through its `props` argument. Even though we're passing these properties to our Frame, we can still override those properties ourselves. Here we're setting the `borderRadius` prop to 8. Because we've written this prop _after_ spreading in the properties from `rest`, our `borderRadius={8}` will replace any value that's come into the component through props. In other words, no matter what a "user" does with this component, it will always return a Frame with a border radius of 8.

[9]
This next part is a little obscure. If we want to set our `style` prop, then we'll also need to spread in the values of `props.style`. The reason for this has to do with Framer's Stacks and Fractional Widths, which work by passing values to a component's style prop. If we leave this part out, our Frame won't behave correctly when given a width like "1fr".

[10]
Here we're passing a "conditional expression" to the `onTap` prop. When the computer reads this line, it will "evaluate" the expression, crunching it down into a value. In this case, we're using a "this then that" expression: if disabled is false (`!disabled`) the expression will evaluate to the `onTap` property that we pulled from `props`. If disabled is true, the expression will evaluate to `false`, in which case tapping on our button would produce no effect.

[11]
We'll use the same technique here with `variants`. If disabled is true, we don't want our component to use any variants. However, if the button is _not_ disabled, then we'll want to pass in the `variants` object that we defined in step 5.

[12]
We'll use the names of those variants for our component's different visual states. The Button will start in its `initial` variant, which we're setting to `variants.initial`. When we hover our cursor over the Button, it will animate to the values given in `variants.hover`. When we move our cursor away, it will animate back to `initial`. Likewise for tapping and `active`.

[13]
Here's another obscure one. What if we want to set a prop only if some condition is true? On this line, we're saying "if disabled is true, then set opacity to the value of our `disabledOpacity` prop, otherwise don't do anything at all". The syntax is a little awkward, and you really might never need this one, but here it is for reference.

[14]
A component's defaultProps the values the component will use for properties not otherwise specified by the designer. If a designer _does_ provide a value, the component will use that value instead. For example, creating our Button with the JSX <Button text="Hello world"/> would still produce a Button with `disabled: false`, though the designer could still set that property with <Button text="Hello world" disabled={true}/>.

In Framer, defaultProps help us design our component by giving us a way to experiment with different props. They also give us a way to set the component's "intrinsic size": `defaultProps.height` and `defaultProps.width` will determine its starting height and width when a user creates the component on the canvas.

[15]
At the bottom of our component, we'll define our component's property controls. These are the controls shown on Framer's properties panel when a designer has selected an instance of the component, and that allow the designer to set the component's props through Framer's user interface. Property controls are pretty powerful - but they do have limits. You can read up on them in Framer's API docs here: https://www.framer.com/api/property-controls/

[16]
You might want to hide certain props depending on the value of other props. Here we're using the `hidden` option of our color property control to hide this control when the `text` field is empty.
*/
