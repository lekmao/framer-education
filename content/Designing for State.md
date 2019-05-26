# Designing for State

**Outline**

* introduce the idea that a user interface is a function of state
* what is state?
  * data that is relevant to the user experience
  * data that, if changed, would require the interface to also change
  * temporal: state is only state until the state changes
* thinking about state
* 



User interface design has always been a tricky business — some delicate blend of copywriting, visual communication and interaction design. The job of the user interface designer is likewise ambiguous, with descriptions ranging from the fugitive — creating a user experience, supporting a user journey — to the overly concrete — drawing rectangles, composing screens. 

While these are all true in their own way, I’d argue that user interface design is best described by what it sits between, what it touches: on one side, a human user, and, on the other, the *state* of the product. 

If, as its name suggests, a user interface is an intermediary between a user and an product, then the job of the user interface designer is to design a system by which to handle this exchange: a system that both *communicates* an product's state to the user and provides intuitive ways to *change* that state. 

So far so good, however we’re left with a few questions:

* What, exactly, is a product's *state*?
* What is the *relationship* between a state and a user interface?

## Designing for State

Across the aisle, in software development, there’s a notion that a user interface should have a *functional relationship* to the state of the product.

# What is State?

What do we mean when we say that an product has a *state*? The term is slippery: broadly speaking, a software application’s state is *everything the application knows* — the entire contents of its memory. Of course, it’s hardly the job of an interface to communicate *everything* to a user, much less everything to *every* user, so we should narrow this definition to the context at hand.

**State impacts user experience**

We could begin by reducing the state down from *everything* an application knows to only those parts that *matter* to the user’s experience. While this includes data produced by the product, such as the contents of an article, it might also extend to data produced by the user, such as the user’s device size, location, or time of day.

**State can be made up of states**

State is more than just content and settings — it also describes a *configuration* of other states, including states of the user interface itself. A menu may be open or closed, a button may be hovered or pressed, and each of these *local* states can be considered part of the application’s total state.

**State can change over time** 

A product’s state has a fourth dimension: it changes over time. These changes might be sharp and user-directed, such as when a user navigates to a new part of an application, or they may be partial and passive, such as when new messages arrive in an open chat. When we use the word state, we are describing a snapshot of the product’s *present configuration*.

**State changes the user interface**  

Though we risk concluding with a circular definition, it’s may be enough to think of state as all of the information that, if were to change, would require us to change our user interface. In this way, articulating the state (as it relates to the user interface) is very much a product design question — from all of what we know at any given time, what matters enough to really matter?

# Composing states

Though there is always a “state of the product”, we most often discuss state within certain scopes or domains. We can define the *level* of a state according to its influence: if the state were to change, which parts of the user interface would need to update? States at a “lower" level might only influence elements directly related to themselves, whereas states at a “higher” level might influence dozens of elements — or even the entire interface.

This abstraction is usually discussed in terms of *local* and *global* states.

In user interface design, we often work with components such as buttons, menus, and feed. Each of these components might have its own a local state: a button may keep track of whether it is hovered or disabled, while a menu may know whether it is open or closed. While each may contribute to the overall state of the product — the button is hovered, the menu is closed — local states are, by definition, unrelated to one another. 

However, while low level or local states may be unrelated, they may be *influenced* by some “higher” state. If, for example, if a user could open a menu by hovering over a button, then we would have to describe this state at a higher level, and one that could include the combined state of both: the button is hovered, the menu is open, and the header’s menu is “held open".

At the highest level, we could describe properties of a *global state* that determine content across the application. For example, a user’s accessibility preference might determine the size or color of text across the entire interface, or their logged-in state may determine what types of information they see.

As designers, we should know the influence that each part of an application’s state will have on the user interface as it changes.

#The relationship between state and UI

Across the aisle, in software development, there’s a notion that a user interface should have a *functional relationship* to the state of the product.

**What is a functional relationship?**

At core, functions give us a means of expressing abstract relationships. A function has both an input — an *argument* or set of arguments — and an output, some value that it *returns*. As an example, we could say that the concept of an “opposite” is a type of function: it takes some argument and *returns* the inverse — `opposite(down) = up`, `opposite(dark) = light`. While both the input and output may change, we can trust that the *relationship* between the two will remain forever constant. 

This constancy and trustworthiness makes functions a sort of workhorse for software: rather than anticipating every possible input, we can instead craft the abstract relationship between an input and its output, thereby allowing us to throw *any* input at the function and still get the result we want. 

There’s no need to store `doubleTwo = 4` and `doubleThree = 6`, provided we have a function like `double = (value) => value * 2`.

So, if we’re on board with the idea that functions provide consistent relationships between an input and an output, what does it then mean if a user interface has a functional relationship to the state of the application? 

If `userInterface = (state) => design`?

## Imaginary Designs

As a designer, our challenge is to create a relationship between *any possible state* and a use interface that presents that state to the user. 

Of course, representing every possible state is itself an impossibility — there are simply too many configurations, and even with a mature set of styles, components and overrides, there’s no way to beat the numbers.



As a designer, the biggest impact of this functional relationship is that it forces us as designers to confront the immateriality of our designs. We are not making stuff. Instead, we are crafting relationships between data and the presentation of that data. We’re pattern makers.



In a way, this is nothing new — whether or not we’ve realised it, user interface design and interaction design has always been hypothetical. Even in the early years of static content, the range of devices, screen sizes and even connection speeds guaranteed that each user would have an individual experience, with the same *design* producing different results for each user.

 have been a golden moment where the files we produced might have a one-to-one relationship to the website our users would see, this would require constant 

 If we were designing a website, that website isn’t a *thing that exists* so much as an *event that happens*. Even templates are empty structures for variable content. 