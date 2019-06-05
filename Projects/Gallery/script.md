# Photo Gallery

## 1. Intro

> Finished project, tapping through.

In this tutorial we'll learn how to create an image gallery.

In our prototype, we'll be able to tap on any of our images to see a zoomed in view of that image. We'll also see an overlay showing the name of that image. Tapping on the image again will zoom it back out.

Along the way, we'll learn about managing a prototype's state, using an override's props to create reusable overrides, and a little bit about the useEffect hook in React.

We won't be creating any components in this tutorial, just writing overrides.

If you're in a hurry, you can find a link to the finished project in the video description below. If you're new to Framer but want to follow along, you can grab a fourteen day trial at Framer.com/download.

Ok, see you in the next video!

## 2. Composition

In this video, we'll block in our prototype on the canvas. Let's get started!

> Installing Learn Design System

We'll be building this project using components from the Learn Design System from the Framer X Store. To begin, let's create a new project and install the Learn package.

> Back to the canvas.

Let's begin with a template. Open the components panel and scroll down to the Templates folder. Click on the the Blank template and drag it out onto the canvas. To make it editable, right-click and click Detatch from Master.

> Blank device.

Now let's add our first image. In the Tools tab, select the Frame tool. Next, draw a Frame into the template.

> Open the layers panel.

If we open the layers tab, we'll see that the Frame was automatically added as a child of the template's Content frame. We can select the Frame here or by clicking through to the Frame.

Depending on where you've drawn the Frame, the Framer app may have given it different constraints. For now, let's make sure that the only two constraints are top and left.

Let's give our image an actual image. With the Frame selected, click on the Fill color. Select Image and then click Choose to select an image from your computer.

Let's duplicate this image so that our design includes two.

1. Select the Frame,
2. right click
3. and select Duplicate.

Our last step, but it's very important: let's give each image a unique name.

1. Select the first image.
2. In the layers panel, double click the Frame's name.
3. Give it a unqiue name.
4. And now do the same for the second image.

We'll need a few more images later, but two is enough for now. In the next video, we'll start working out the interactions for these images.

## 3. Image override

In this video, we'll be working out the interactions for our zoomable image.

Before we jump into the code, let's think about what we want to happen. When we tap on the image, we'll want it to get bigger, filling up the space of its parent Frame. So we'll need to change the height and width of our image, but we'll also need to move its position too. When we tap again, we'll want it to go back to its original size and position.

Ok, time to jump into the code! With the image selected:

1. Click **Override** in the properties panel.
2. Select **New File**
3. and then click **Edit Code**.

> Overrides File

## State

Let's start by creating a state for our prototype.

1. At the top of the file, add Data to the list of imports from the `"framer"` package.
2. Next, create a state using the Data object.

To start with, let's just keep track of which image is zoomed. We don't want to start with a zoomed image so for now we'll just keep it at `null`, which is another way of saying nothing.

## Image Override

Next, let's create an override for our images. Even though we have two images, we'll only be writing one override and applying it to both images.

Let's start by changing the name of the default override to GalleryImage.

#### Props argument

> Adding props argument

Overrides are functions, and these functions are called with the props of the components that they override. The default override doesn't use these props, so its arguments are blank; but we'll need them so we'll add props here.

The props argument is a powerful little feature. Remember that we'll be writing just one override for more than one Frame. Each Frame will have different props, however, so props will be our way of making the same code responding differently for each Frame.

> Writing isZoomed

The first thing we want to know in our override is, "is the Frame that we're overriding the zoomed image?" We'll know that the Frame is the zoomed one if `state.zoomedImage` matches the name of the connected Frame. We'll store this under the variable `isZoomed`.

#### Tap event

Now let's write our Frame's tap event. When we tap on the Frame, we want one of two things to happen: if this Frame is already zoomed, then we'll want to clear `state.zoomedImage`. If not, then we'll set `state.zoomedImage` with the Frame's name.

In both cases, making a change to the Data object will cause this override will run again. If we've just set `state.zoomedImage` to the Frame's name, then when the override runs again our `isZoomed` property will evaluate to `true`. If we tap on the image again, then we'll cleared `state.zoomedImage`,making the override run a third time. This time `state.zoomedImage` will be `null`, which won't match the Frame's name, and so `isZoomed` will be false.

To make this more visual, let's start presenting this zoomed state. Let's start by creating two variants: `initial` and `zoomed`.

#### Zoomed variant

> Writing `width: state.containerSize.width`...

For the Frame's zoomed state, we'll want to set the Frame's height and width to match our container's height and width, which we've stored under `containerSize`.

#### Initial variant

We do the for our `initial` variant, but by referencing `props` instead. These properties will be the ones from the canvas, so they'll work as our "starting" height and width.

#### Animate prop

Finally, we want to animate to one of these variants depending on whether `isZoomed` is true or false. We can use the ternary operator to express this logic. The way the ternary operator works is basically "if this condition is true then use this value, or else this other value". In our case, the condition we want to test against is `isZoomed`. If it's true then we'll want to animate to `zoomed`, or else we should animate to `initial`.

> Opening preview

Let's see this in the preview. To open the preview, press Command + P or select the play icon in the upper right hand corner of the Framer X app.

> Testing the preview

Well, that's not exactly what we're going for, but at least we're making progress. Tapping our images will toggle them correctly between zoomed an unzoomed. We can tell right away that there are a few things missing:

- We'll need to get the actual height and width from our container
- and we'll need to move the image's position to the top left corner, so that it fills the entire container.
- and we'll also need to make zoomed images appear in front of unzoomed images.

We'll get started on those in the next video.

## 4. Container Override

In this video we'll be setting the container size.

> Hard coding

Now we could hard-code this by just reading the container's height and width from the canvas and inserting them here in our state. However, this would mean that it would be up to _us_ to keep these properties in sync if we ever changed the size of the container. Our time is pretty valuable, so we'll write an override to do that for us. You'll thank me later.

Let's create a new override for our container.

Add props as an argument just as we did with the GalleryImage.

This next part is tricky. When the prototype first loads, we'll want to set the `state.containerSize` property with the container's height and width. However, as we learned in the previous video, making changes to `state` will cause our overrides to run again -- and that would include this one, which would mean we'd be heading into an infinite loop.

Luckily for us, React gives us a way to handle this exact scenario. Let's first import React into this project.

In our override, we'll create a `useEffect` hook. We'll do out work inside of th hook's callback function and give it an empty array as its dependencies, so that it will only ever run once.

So what did we just do?

In the React, what use the word "effect" to describe changes that we make to the project that aren't prompted by user interaction. You can think of these changes as "side effects" of the override running. However, because overrides (like React components) are functions that get run many many times over the course of a user session, we need something to give us some control over when our effects run.

In React, that control is the `useEffect` hook.

The `useEffect` hook is a function that takes two arguments: a callback function for the "effect" and an array of values, called "dependencies", that determine when the effect should run. Each time the override runs, React will compare the values of these depencencies against their values from the last time the override ran. If it finds any changes, then the hook will call the callback function; otherwise, it won't run the callback function.

If we leave out the dependencies altogether, then the effect will run each time the override runs; however, if we give it an empty list of dependencies, then the hook will only run the callback once and then never again.

#### Applying the override

Let's go back to the canvas and apply the override to the container. While we're here, we'll also need to change the constraints so that it has only a top and left constraint.

> Opening preview

Let's preview the project and see what's changed. Now when an image is zoomed in, it'll use the constraint's actual height and width. We still have to set the position, though, and that'll be the subject of the next video.

## 5. Position

In this video, we'll make our image move to the right spot when zoomed. To help us see if our code is working, let's create two more images in the container. I'll show off a trick, too: select the two image Frames, hold the option key on your keyboard, and then drag the Frames to create copies.

Let's also be sure to give them some new names, too, and make sure they're only pinned to the top and left.

> Overrides

Let's return to our GalleryImage override. This is another place where we'll take advantage of the override's `props` - in this case `props.top` and `props.left`.

In our `zoomed` variant, we'll need to calculate a number for the x and y properties, so that the image slides over to the top left corner of the container when it's zoomed. Luckily, our calculation is pretty easy: for the x property, we'll use negative `props.left`, and for the top property, we'll use negative `props.top`.

We'll also want to clear these offsets when the image zooms back out. We'll add an `x` and `y` of `0` to the `initial` variant.

> Opening preview

Let's preview the project and see what's changed. Perfect! Well, almost. Before we move on to the stacking issue, let's tweak that transition so that it's less bouncy.

#### Transition

> Tweaking transition, back to preview

Ok, much better. In the next video, we'll solve the stacking problem.

## 6. Stack

In this video we'll write some code that brings an image forward when it's zoomed.

> Tweaking transition to very slow duration.

Well, not exactly.

Let's slow our transitions down so that we can see what's going on. When we tap on an image, it becomes the "zoomedImage", so we want to bring it forward. When we tap on it again, it's no longer the zoomed image, but we'll still need to keep it in front of all of the other images - at least until a new image gets tapped.

> State

To add this to our prototype, we'll need to add a new property to our state: `frontImage`.

> GalleryImage override

Next, we'll add a new variable to our image override, `isFront`, that works just like `isZoomed` but checks against `state.frontImage`.

> Tap event

When we tap on the Frame, we'll set `state.frontImage` to the Frame's name, too. However, we won't clear it when `isZoomed` is false - we can just let it stand until we zoom in on a new image.

> zIndex

In order to use this property, we'll override the Frame's `zIndex` style property with either `999` if the Frame `isFront`, otherwise we'll just use `1`.

Most of a Frame's properties are shortcuts to style properties. There are, however, a _lot_ of style properties, and not all of them have their own props on Frame. In this case, the style we're after is `zIndex`, which is how the browser keeps track of which things are in front of which. If two items overlay, whichever has the higher `zIndex` will appear in front of the other. In our case, we want the this image to have an arbitrarily high `zIndex` if it's the front one, or else some low `zIndex`. The actual numbers don't matter, just so long as the one is higher than the other.

#### Previewing

> Preview

Let's open the preview and see if it's working. Sure enough, our images now property occlude one another. We're nearly there!

#### Duplication

> Duplicating Frames

Before we end, let's create a few more copies of our Frames and give them their own names.

In the final video, we'll look at how to show a title bar with the zoomed image's name.

## 7. Title

In this video, we'll wrap up by creating a title that shows the name of the zoomed image.

On the canvas, let's get a Text component from the Learn package.

We'll set the type to Header 2 and the background color to Glow. We'll also give it some padding.

We also want to be sure that it's on top of our container, so that our images don't overlap it when they zoom in.

Next, let's create an override for this text.

> Overrides

Compared to our image override, this one will be much shorter. However, it will still use both state.frontImage and state.zoomedImage.

#### Text

For the component's text, we'll want to use state.frontImage. This will change each time we zoom in on a new image.

#### Opacity

We'll want the component to fade in when there's a zoomed Image, then fade out again when we clear the zoomed image. We could set up two variants for these two visual states, but since it's just the one property, let's use the animate prop instead.

For the animate prop, we'll use an opacity of 1 if there is a zoomed image, or else 0.

#### Transition

Let's also copy over the transition from our GalleryImage override.

> Previewing...

Looks good, but reduce the duration by just a bit.

> Previewing.

Pefect! Our gallery prototype is complete - at least for now. In the last video, we'll recap what we've learned and think of how we might go further.

## 8. Wrapup

Hey, congrats on making it through this tutorial. If you've followed along, you should have a working prototype where a user can zoom in and out of images just by clicking on them.

In this tutorial, we've learned a little about effects and managing effects with `React.useEffect` hook. We've only just scratched the surface on effects though, so expect to see that hook again in future tutorials.

We also learned how we can use the props of an override to make the same override reusable between components. This is a really powerful pattern and key to creating more complex prototypes.

We also learned about the `style` prop, which we can use to set all sorts of properties, including `zIndex`.

And finally, we learned how to manage a selection state, update it using user interaction events like `onTap`, and make our overrides conditional on properties of that state.

That's a lot for a little gallery prototype! Thanks for watching. If you've enjoyed this tutorial, give the video a like and let me know in the comments below. You'll also find a link to the finished project in the video description.

See you next time!
