------

### Designing a Switch in Framer’s new API

A crash course in code components with the new Framer X API.

![img](https://cdn-images-1.medium.com/max/1600/1*RC1977ScXsMTm6XgqMj-kw.png)

### Hello world

In this article, we’ll be creating a **code component** in Framer X. **If you’re new to Framer X** (or to React), then this tutorial is a great introduction to working with code. 

- We’ll take it slow, explaining each part of the code component as we put it together.
- At the end of the article, we’ll walk through each line of the finished component code.
- If you’d prefer to explore for yourself, you can [download the finished project](https://www.dropbox.com/s/id8vxqw8kkgozln/Switch_Tutorial.framerx?dl=0) and hack away.
- There’s a [second part](https://www.dropbox.com/s/1q45rlsku2fic88/Switch_Tutorial_1.framerx?dl=0) to this article, too!

☝️We’ll be making this project with **Framer X22**. If you don’t have it already, [download a copy](https://www.framer.com/download) and fire up a new project.

### What are we building?

In this article, we’ll be designing a **Switch,** a user interface element used to turn some property on or off. 

![img](https://cdn-images-1.medium.com/max/1600/0*2t3QJjlqxT3AZMMe.gif)A switch has some value that keeps tracks whether it’s on or off. It expresses that value to the user, allows the user to flip that value by tapping on the switch, and updates to show that the value has changed.

Chances are you’re familiar with the Switch pattern already — it is one of the most common elements of a mobile interface. However, because we’ll be building the thing ourselves, let’s go a little deeper and explore the logic behind the component.

#### A Switch, abstractly

A switch can be either on or off. It’s interactive, too: a user can “flip” the switch between on and off by tapping on it. A switch is often used to control some other property, like a form value or application setting. If this property changes in some other way, for example if a user “resets” the value of a form, then this might also flip the switch. 

![img](https://cdn-images-1.medium.com/max/1600/1*96VsrAuPSKpPQjHwOwhVyA.png)The life of a switch, such as it is.

If we wanted to describe the logic behind a switch, we might use a kind of chart that showed how the switch would move between different positions. With this sort of chart, we could imagine the “current state” of the switch as a kind of board game piece that gets be moved between the “off” and “on” states.

![img](https://cdn-images-1.medium.com/max/1200/1*apqpgAEftfLw6qWe2QzsYQ.png)

![img](https://cdn-images-1.medium.com/max/1200/1*C8Nm7ohGnH8Cnzhksn6GuA.png)**Left**: The switch is off. **Right**: The switch is on.

While this describes *how* our button will work, it’s still a pretty complicated representation of whether the switch is *on* or *off*. Instead, we could represent whether the button is “on” or “off” by making a statement —  **“The switch is on.”**, and keeping track of whether that statement is `true` or `false`. If the statement  is true, then we know that the switch is *on*; if the answer is false, then we know that the switch is *off*.

![img](https://cdn-images-1.medium.com/max/2400/1*RA1cOXActR7t8a1ff6lLwQ.png)**Left**: The switch is off. **Right**: The switch is on.

Of course, a switch is more than some boolean value sitting somewhere in an application’s state. A switch is part of a **user interface**, a visual system for *communicating* that state to a user — and for giving that user a way to *change* that state if they wish.

From a design perspective, a well-designed switch should communicate:

- that the switch has two states, *on* or *off*
- which state the switch is currently in
- that the user can interact with the switch
- that a change has occurred

We don’t want to have to *teach* our user how our switch works; so to make this communication work, we’ll rely on our user’s prior experiences — other switches from other products, digital and physical, that all flipped in a certain way — to inform what our switch should look and how it should behave.

![img](https://cdn-images-1.medium.com/max/1600/0*2t3QJjlqxT3AZMMe.gif)

We’ll be writing a bunch of code in this tutorial — 86 lines in all. If you get lost along the way, remember that all we’re doing is *expressing* the above logic and behavior in a a way that Framer understands. If we get it right, it will give us back a switch that looks and does what we just described.

------

### Setting up Framer X

Now that we have our switch figured out, we can start writing a code component that does the things we need it to do .Now that we have our switch figured out, let’s get started in Framer. As noted above, we’ll be using **Framer X v22** for this project. This version is currently in Beta. If you don’t have it already, [download a copy](https://www.framer.com/beta/) to follow along.

#### Creating a device Frame.

The first thing we’ll do is create a Frame where our component will live. 

1. Select **Tool > Frame** in the Menu (or press `F` on your keyboard)
2. Select a **Device** from the panel that appears on the right side of the screen.

Selecting a device will create a Frame matched to the size of that device’s screen. Later, when we preview our Frame, we’ll see our design as if it were displayed on that device’s screen.

#### Creating our code component

Next, we’ll actually create our code component. 

1. From the left sidebar, click the code tab. 
2. At the top of the empty files list, click the **New** button. 
3. Enter a name for our new component. 
4. Click **New Code Component** to create the component*.*

![img](https://cdn-images-1.medium.com/max/1200/1*21BuVmeG-iKdwg66Ag3RXg.png)

![img](https://cdn-images-1.medium.com/max/1200/1*_j-TpaQQllLdcbean1DrHA.png)Left, Creating our Code Component from the code tab. Right, Our Code Component in the components tab.

#### Creating a Switch instance.

Now we’ll create an *instance* of our component. Code components work like design components — or symbols, if you’re coming from Sketch. While we only define our component once, we can create as many instances of it as we want.

1. From the left sidebar, click the **Components** tab (the four boxes). Our new component should be sitting at the top of the components list.
2. To create an instance, click the component and drag it onto the Frame that we’ve just made.

![img](https://cdn-images-1.medium.com/max/1600/1*TgOarV63Wd2uoHYl_x4y6Q.png)

#### Previewing our Frame

We’ll want to see our component as we work on it, so let’s also set up our Preview window. 

1. Click on the Device Frame
2. Open the **Preview** by clicking the play button (or right-facing triangle) in the top-right corner. You can also press `Command + P` on your keyboard.
3. Click the **lock icon** at the top of the Preview window to lock the preview to this Frame.
4. Position your windows so that we can see our Preview window and Framer’s main window at the same time.

![img](https://cdn-images-1.medium.com/max/800/1*6uUAaqbrKcGWDLX8uWJjvQ.png)

![img](https://cdn-images-1.medium.com/max/1600/1*o32FWexZHWfjqCKs7LURgg.png)

#### Coding from scratch

Now that our windows are set up, let’s get ready to write our code. 

1. On the canvas, select our component instance (the big blue rectangle).
2. Click the **Edit Code** button on the properties panel.

We want to start almost from scratch, so clear out the component’s existing code until it looks like this:



<iframe width="700" height="250" src="/media/31eb9423d1c3e82631f401ebd3dd33be" data-media-id="31eb9423d1c3e82631f401ebd3dd33be" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F23072548%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>

Now that we’re all set up, we  can— finally — but cozily!— start writing the our Switch component.

------

### Plan of attack

Knuckles cracked, code on the screen — but where should we begin? There’s really no right answer. Like anything else in design, writing code is a very subjective business; and we might write find a thousand different ways between our requirements and our finished component.

That said, it’s always good to have a plan of attack — and to have reasons for why you’re going about things a certain way. So consider the following both an expression of *my own* way of writing components, as well as an argument for why you might also adopt this approach.

Feel free to find your own way, too.

#### Our plan of attack

We’ll start this component off by describing our component’s **data state** *—* what information will matter to the component, where it will *come from*, and how it will *change* within the component. Once we have our data state worked out, we’ll begin to visually present this data state to our user through Frames and animations.

But why start from data, rather than visuals? As we build out a component’s visual design, we’ll have to introduce abstract concepts like “on” and “off” to describe how the component should look and change. However, if we fix those abstractions to their representations in code from the *start*, we’ll be better able to reason about their interactions and represent them later on.

### Our component’s data

Like all React components, our Switch will respond to two sources of data: **props** and **state**. 

**Props** are data that comes from the outside world. If a component is a [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) — and it technically is — then props is an argument passed to that function. If a component is a [pizza](https://en.wikipedia.org/wiki/Pizza), then props are the pizza order — toppings, crust, etc.

**State**, meanwhile, is data that the component manages *internally*. To reuse our pizza example, we could think of the pizza’s temperature as part of its state, changing over time without any new external input.

> Sharp-eyed readers will notice that we’re using the word “state” twice — once to describe all of the information that matters to a component (it’s **data state**), and again to define a part of that information (the component’s **state**).

> I’m sorry. The word “state” is used to describe data that can change at different times; and while props won’t change once they’ve arrived, the combination of props and data will change as new props arrive.

### Creating the component’s state

Our switch component will need to maintain an internal state to keep track of whether the switch is “on” or “off”. At the moment, however, these are just abstract concepts. In order to really make use of them, we need some way of representing them in code. 

For this project, I’ll be using a boolean property, `isOn`. Boolean properties may have only one of two values, `true` or `false`, so our basic data state may either be `isOn: true` or `isOn: false`.

To get this into our component, we’ll need to use one of React’s hooks, `useState`. We’ll define the initial state using an object with a boolean property that we’ll call `isOn`, as shown below.



<iframe width="700" height="250" src="/media/35a9286a609dbf2e6204798465941fb6" data-media-id="35a9286a609dbf2e6204798465941fb6" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F23072548%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>

Then, just so that we can see that everything is working, let’s also turn this property from a `boolean` to a `string`, so that we can display it in the component.

A state hook gives us an array of two items: the current value of the state hook and a function that we can call to change this value. We can name them whatever we like, but we’ll use `state` for the state and `setState` for the function.

Our Switch should flip when we tap on it, so let’s add that, too.



<iframe width="700" height="250" src="/media/4e8ac3f49eab1b8deb8a826dfe03ea48" data-media-id="4e8ac3f49eab1b8deb8a826dfe03ea48" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F23072548%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>

We’ll first create a function that we’ll call `handleTap`. Inside of this function, we’ll call `setState` with the new state we want to set. That state will need to include our changes to the `state.isOn` property; and, since `state.isOn` is a boolean, we can express this change as `!state.isOn`. 

We can then pass our `handleTap` function to the `onTap` prop of our Frame, and the Frame component will take care of the rest, running our function when the user taps on it.

![img](https://cdn-images-1.medium.com/max/800/1*55WRqy3mYP6lsqheRQGC8Q.gif)

![img](https://cdn-images-1.medium.com/max/1600/1*DwoYaprSYxOhlMxVWX6hEA.png)

### Setting Props

While our switch is already working, we still have to take into account props. Our component will take two props: `isOn`, a property to control the component’s state, and `onValueChange`, a callback function to run when the user flips the switch. We’ll get into using `onValueChange` in a moment.

Since we’re in TypeScript, we can use a **type** to capture these two props as part of the component itself, helping ourselves — and other people using our switch — keep track of what kind of props it can receive. To learn more, check out our introduction to TypeScript.

```
type Props = {
    isOn: boolean
    onValueChange: (isOn: boolean) => any
}
```

We can also add default values for these props using `defaultProps`. We’ll set the default value of `props.isOn` to false and — for now — we’ll set the default value of `props.onValueChange` to a function that alerts the component’s new value.

```
Switch.defaultProps = {
    isOn: false
    onValueChange: (isOn) => window.alert(isOn)
}
```

Next, we’ll return to our component’s `React.useState` hook and change it to use the value of `props.isOn` as its initial value. We’ll also make our handleTap function call props.onValueChange with the value of the next state.



<iframe width="700" height="250" src="/media/8b772872e3e48713fd490c082aeebcef" data-media-id="8b772872e3e48713fd490c082aeebcef" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F23072548%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>

Our data state is almost complete! We can set the component’s initial state from props (using `props.isOn`) and we can then flip the value of this state by tapping on the component. When we do, we’ll call our `props.onValueChange` callback function, announcing the new state to the rest of our project.

### Controlling state from props

There’s still one last missing bit of logic to write, though, and it’s a tough one to spot. At the moment, `props.isOn` will only change the component’s state when it first loads. However, if the component receives a different `props.isOn` value later on, we’ll want this value to *also* overwrite `state.isOn`. This will let us control the component’s state through props, if needed.



<iframe width="700" height="250" src="/media/7ecb55bd7204d746e35aea298b9877ef" data-media-id="7ecb55bd7204d746e35aea298b9877ef" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F23072548%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>

To get this logic into our component, we’ll need to use a second React hook, `useEffect`. This hook takes two arguments: a function and an array of “dependency” values. Each time the component renders, React will compare these values with their values from the previous render. If it finds any differences, React will run the hook’s function.

In our Switch, we’ll use `useEffect` to declare the relationship between `props.isOn` and `state.isOn`: when the component renders, if its `props.isOn` is different than it was before, set `state.isOn` to the value of `props.isOn`.

### Creating property controls

To see this all in action, let’s add a property control to set `props.isOn`. We’ll need to first add `addPropertyControls` and `ControlType` to our list of imports from framer (found at the very top of our file).

```
import { Frame, addPropertyControls, ControlType } from "framer
```

And then we’ll add the property controls themselves below our component, at the bottom of our file.

```
addPropertyControls(Switch, {
    isOn: {
        type: ControlType.Boolean,
        title: "Is On",
    },
})
```

Back on the canvas, we can now see that our component has a control on the properties panel that will let us set the value of `isOn`.

![img](https://cdn-images-1.medium.com/max/1600/1*hvSVsjiZzMH84TM-tOnqSA.png)Our component’s Property Controls give us a way of setting props (like `**props.isOn**`) from the canvas. 

And with that, we’re done with the first big part of writing our component. It technically “works” — it takes the props we want, maintains its state correctly, and will respond to new props by overwriting its current state.



<iframe width="700" height="250" src="/media/eab75965a491138838c09ed7b4b53021" data-media-id="eab75965a491138838c09ed7b4b53021" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F23072548%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>

Of course, the job of our component isn’t just to keep track of this state, but to *present* it to our user. While our “true” and “false” blue rectangle is doing the job, I bet we can do a bit better — and that’s what we’ll get into next.

------

### Presenting our data state

In this section, we’ll be turning our boring blue box into something with stronger visual communication, and which clearly tells our user everything we want them to know about our switch and its current state.

![img](https://cdn-images-1.medium.com/max/1600/1*zKy4-_W2zgCMzYQPxUZ-HA.gif)

Here’s where we get to flex our visual design skills — and to see what Framer X is really capable of in terms of animation and styling. If you’re having any issues with your project — or if you’ve skipped ahead to this point — click **here** to download the project up to this point so far.

#### Creating our Frames

Out component will have two Frames — a round “knob” and a “container” in which the knob will move. We already have a Frame that we can use as our container, so let’s start by changing its size and position in its parent frame. We’ll also want to round the corners using the borderRadius prop. The value we want is half of the height, or 25 in this case.

```
<Frame
    height={50}
    width={80} 
    borderRadius={25} 
    center={true} 
    onTap={handleTap}>
      {state.isOn.toString()}
</Frame>
```

If we want to go a step further here, we could actually set the component’s defaultProps to take this size as the component’s default size. Now, when we drag instances of the component out onto the canvas, they’ll start at the size we want. (Users will always be free to resize them, but at least our switch will stay centered).

```
Switch.defaultProps = {
    isOn: false,
    onValueChange: () => null,
    height: 50,
    width: 80,
}
```

Next up, let’s replace our placeholder state text with a second Frame for the component’s knob. We’ll want this to be completely round, and just less than the height of the container. We’ll need to offset it a bit using constraints (left and top) to get it in the right position. Since our knob will always be white, we can also go ahead and set the background prop.

```
return (
    <Frame
        height={50}
        width={80}
        center
        borderRadius={25}
        onTap={handleTap}
    >
        <Frame
            size={46}
            top={2}
            left={2}
            borderRadius={"100%"}
            background="#FFFFFF"
        />
    </Frame>
)
```

If all’s gone well, we should have something looking like this:

![img](https://cdn-images-1.medium.com/max/1200/1*AFNrvf9GjP5cGanOco-HxQ.png)

#### Creating  our variants

In the last step, we removed the line `{state.isOn.toString()}`. Up to now, this has been our only way of knowing whether our Switch was “on” or “off”, so removing it has left us in the dark. If we click on the Switch now, nothing happens.

But that’s not entirely true. Even though we’ve lost the feedback about our component’s state, that state’s data is still being changed behind the scenes. When we click on our component, bits are still being flipped somewhere in our machine’s memory — they’re just not producing any type of change that we can *see*.

In order to represent this state visually again, let’s create two different **variants** for our knob and container, each of which we’ll display depending on the value of `state.isOn`.

```
<Frame
    height={50}
    width={80}
    center
    borderRadius={25}
    onTap={handleTap}
    variants={{
        off: { background: "#BBBBBB" },
        on: { background: "#0070DF" },
    }}
>
    <Frame
        size={46}
        top={2}
        left={2}
        borderRadius={"100%"}
        background="#FFFFFF"
        variants={{
            off: { x: 0 },
            on: { x: 30 },
        }}
    />
</Frame>
```

A **variant** is groups of properties that Frames can use at different times. To actually use a variant, we’ll need to use the `initial` or `animate` props.

Something worth noting about variants — if we’re using the same variant names for parents and children, then the parent’s variant will, by default, also apply to a Frame’s children. 

In our case, that means that we won’t have to write our initial and animate props on the knob, but rather just the container.

#### Setting our initial variant

To start with, let’s use `state.isOn` to determine the component’s initial variant. We want to express the idea that:

> If `state.isOn` is true, use the “on” variant, otherwise use the “off” variant”.

To write encode this idea in JavaScript, we’ll use JavaScript’s [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) to write as shown below. 

```
<Frame
    height={50}
    width={80}
    center
    borderRadius={25}
    onTap={handleTap}
    variants={{
        off: { background: "#BBBBBB" },
        on: { background: "#0070DF" },
    }}
    initial={props.isOn ? "on" : "off"}
>
    <Frame ... />
</Frame>
```

![img](https://cdn-images-1.medium.com/max/1600/1*cEE2Re1DkPi4acLH4F-0Yg.png)

You’ll see the ternary operator a *lot* in JSX code. It’s worth reading more about how it works — but a quick explanation is that an expression `A ? B : C` will evaluate to`B` if `A` is true and `C` if `A` is false. So:

- `true ? "on" : "off"` will return `"on"`
- `false ? "on" : "off"` will return `"off"`

Remember that in our component is a function: it takes an input and returns an output. Since our component is a React component, that function always takes `props` as an input and always returns [JSX](https://reactjs.org/docs/introducing-jsx.html) (in our case, two Frames) as an output. 

While our input may be different each time the function is called, it will always be called with an actual input. 

In other words, when we’re writing our component, we're responding to the fact that `props.isOn` *might* be either true or false. However, each time the component renders, `props.isOn` *will* be either true or false, so we can imagine how the component would work each way.

#### Animating to the right Variant

Once we have our initial variant set, we’ll want to animate to the `“on”` or `“off”` variant as the user flips the component on or off. As it turns out, the logic for this is identical to the logic for our initial variant.

1. Copy the initial prop from the parent.
2. Paste it onto the next line.
3. Change the prop from `initial` to `animate`.

```
<Frame
    height={50}
    width={80}
    center
    borderRadius={25}
    onTap={handleTap}
    variants={{
        off: { background: "#BBBBBB" },
        on: { background: "#0070DF" },
    }}
    initial={props.isOn ? "on" : "off"}
    animate={state.isOn ? "on" : "off"}
>
    <Frame ... />
</Frame>
```

![img](https://cdn-images-1.medium.com/max/1600/1*wQL9rk6VRfQ0waFIUc5V9A.gif)

We’re almost there! Our component both starts in the correct variant and animates to its correct variant. 

#### Tweaking the transition

Before we’re done, we should dial in that animation — a springy knob doesn’t really feel right. If we want to change this animation, we can pass a custom **transition** to each Frame’s `transition` prop.

```
<Frame
    height={50}
    width={80}
    center
    borderRadius={25}
    onTap={handleTap}
    variants={{
        off: { background: "#BBBBBB" },
        on: { background: "#0070DF" },
    }}
    initial={props.isOn ? "on" : "off"}
    animate={state.isOn ? "on" : "off"}
    transition={{
        type: "tween",
        duration: 0.2,
    }}
>
    <Frame
        size={46}
        top={2}
        left={2}
        borderRadius={"100%"}
        background="#FFFFFF"
        variants={{
            off: { x: 0 },
            on: { x: 30 },
        }}
        transition={{
            type: "tween",
            duration: 0.2,
        }}
    />
</Frame>
```

That feels better — at least on my end. 

Feel free to keep tweaking the design and its animation until it matches your own tastes, but I’m calling this one done!

------

### Our finished component

Let’s take another look at our component. We’ll read it over and then go through point by point of how it works. If you’re lost about what any of the code is doing, here’s your chance to catch up.



<iframe width="700" height="250" src="/media/8ff605797f9b7351d03bb2881ff11c53" data-media-id="8ff605797f9b7351d03bb2881ff11c53" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F23072548%3Fs%3D400%26v%3D4&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>

In the code above, I’ve used footnotes like `// [2]`that match up with each of the points below.

1. At the top of the file, we import the entire React library, as well as all of the elements we need from the `“framer”` library.
2. Next, we create a type, `Props`, for our component’s props. Those props include a boolean property, `isOn`, and a callback function, `onValueChange`.
3. When we create our `Switch` component, we accept a props argument of the type `Props`. 
4. Inside of our component, we call two React hooks, `setState` and `useEffect`. In the `setState` hook, we set our initial state using `props.isOn`. 
5. In the `useEffect` hook, we set `state.isOn` again. This hook only runs when the value of `props.isOn` ever changes.
6. We also have a function, `handleTap`, that first calls `props.onValueChange` with the new value of `state.isOn`, then saves that same value to state using `setState`.
7. The component returns two Frames: a parent and a child. 
8. Both Frames have variants for `“on”` and `“off”` and will transition with an tween animation that takes `.2` seconds to complete.
9. These Frames will also appear differently depending on the value of `state.isOn`. Each time the Switch renders, if `state.isOn` is `true`, then the frames will display their `“on”` variants — otherwise, they’ll display their `“off”` variants. 
10. On the parent Frame, we’ve also added an `onTap` callback function that calls `handleTap`. The Frame component will (as its name suggests) call our `onTap` callback when the user taps on the Frame. 
11. At the bottom of the file, we’ve given our component a set of `defaultProps` that include values `height` and `width`, which set the size of the component’s instances when we create them on the canvas.
12. Finally, we use `addPropertyControls` to give the component a boolean-type property control for `isOn`. This lets us set this property on the canvas through Framer’s interface.

------

### Using our Switch

Building components is rarely an end in itself. More often, we’ll want to somehow connect our components, so that a user’s interactions with one component can make changes to a global state that drives changes elsewhere. 

In the next tutorial, we’ll put our little Switch to work, using it to control the night or day mode for our prototype.

If your project has any lingering bugs — or if you’ve skipped ahead to this part — **click here** to download the project up to this point so far.

![img](https://cdn-images-1.medium.com/max/1600/1*2MGwTvsE3-PqFpz6dUcA_A.gif)

####  