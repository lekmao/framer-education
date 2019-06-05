# Photo Gallery

> Finished project, tapping through.

In this tutorial we'll learn how to create an image gallery. In our prototype, we'll be able to tap on any of our images to see a zoomed in view of that image. We'll also see an overlay showing the name of that image. Tapping on the image again will zoom it back out.

Let's get started!

> Installing Learn Design System

We'll be building this project using components from the Learn Design System from the Framer X Store. To start with, let's create a new project and install the Learn package.

> Back to the canvas.

Let's begin with a template. Open the components panel and scroll down to the Templates folder. Click on the the Blank template and drag it out onto the canvas. To make it editable, right-click and click Detatch from Master.

> Blank device.

Now let's add our first image. In the Tools tab, select the Frame tool. Next, draw a Frame into the template.

> Open the layers panel.

If we open the layers tab, we'll see that the Frame was automatically added as a child of the template's Content frame. We can select the Frame here or by clicking through to the Frame.

Depending on where you've drawn the Frame, the Framer app may have given it different constraints. For now, let's make sure that the only two constraints are top and left.

Let's give our image an actual image. With the Frame selected, click on the Fill color. Select Image and then click Choose to select an image from your computer.

We'll need a few more images later, but one is enough for now. In the next video, we'll start working out the interactions for this image.

## Logic

In this video, we'll be working out the interactions for our zoomable image.

Before we jump into the code, let's think about what we want to happen. When we tap on the image, we'll want it to get bigger, filling up the space of its parent Frame. So we'll need to change the height and width of our image, but we'll also need to move its position too. When we tap again, we'll want it to go back to its original size and position.

Ok, time to jump into the code! With the image selected:

1. Click **Override** in the properties panel.
2. Select **New File**
3. and then click **Edit Code**.

> Overrides File

Let's start by changing the name of this default override to GalleryImage.
