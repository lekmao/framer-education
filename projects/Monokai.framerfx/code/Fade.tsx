import * as React from 'react'
import {
	Frame,
	Color,
	ControlType,
	transform,
	MotionValue,
	motionValue,
	addPropertyControls,
} from 'framer'

// Helper functions

const wrap = (x: number, n: number) => ((x % n) + n) % n
const range = (num = 0) => Array.from(Array(num).keys())
const lerp = (a, b, n) => (1 - n) * a + n * b

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

type Block = {
	x: number
	y: number
	point: {
		x: number
		y: number
	}
	fade: {
		start: number
		end: number
	}
}

type Direction = 'horizontal' | 'vertical'

type Props = {
	id: string
	scrollOffset: MotionValue<number>
	color: string
	steps: number
	cWidth: number
	cHeight: number
	height: number
	width: number
	direction: Direction
	flip: boolean
	reverse: boolean
	skew: number
	use8x8: boolean
	style: React.CSSProperties
	gNoise: number
	gStart: number
	gSpread: number
}

export function Fader(props: Props) {
	const {
		id,
		scrollOffset,
		height,
		width,
		color,
		steps,
		cWidth,
		cHeight,
		flip,
		direction,
		reverse,
		skew,
		use8x8,
		style,
		gNoise,
		gStart,
		gSpread,
	} = props

	const canvas = React.useRef<HTMLCanvasElement>()
	const context = React.useRef<CanvasRenderingContext2D>()

	const shades = React.useRef<ImageData[]>([])
	const blocks = React.useRef<Block[]>([])
	const frames = React.useRef<ImageData[]>([])

	const cols = Math.ceil(width / cWidth)
	const rows = Math.ceil(height / cHeight)

	const cMaxY = rows * cHeight
	const cMaxX = cols * cWidth

	React.useEffect(() => {
		const cvs = canvas.current
		context.current = cvs.getContext('2d')
		blocks.current = getBoxes()
		shades.current = getShades()
		// frames.current = cacheBoxes()
		drawBoxes(scrollOffset.get())

		// Set listeners on the motion value to draw shades when that value changes
		// scrollOffset.onChange((v) => drawFrame(v))
		scrollOffset.onChange((v) => drawBoxes(v))
	}, [])

	React.useEffect(() => {
		blocks.current = getBoxes()
		shades.current = getShades()
		// frames.current = cacheBoxes()
		// drawFrame(0)
		drawBoxes(scrollOffset.get())
	}, [height, width, steps, cWidth, cHeight, flip, reverse, direction])

	// Get a set of shades as ImageData
	const getShades = () =>
		getDitheredShades(steps, cWidth, cHeight, use8x8 ? 8 : 4)

	// Calculate a start and end fade
	const max = direction === 'vertical' ? cMaxY : cMaxX
	const dist = max * gSpread + 0.0001

	// Calculate the point where a box's fade begins and ends
	const getFadePoints = () => {
		let start: number, mid: number, end: number

		const noise = Math.random() * gNoise

		// Starting point, based on start prop
		mid = gStart * max
		mid += (dist * (Math.random() > 0.5 ? -noise : noise)) / 2

		// Fade distance below the starting point (randomized)
		start = mid - dist / 2
		start = transform(start, [0, max], [0, max - cHeight])

		// Fade distance above the starting point (randomized)
		end = mid + dist / 2
		end = transform(end, [0, max], [0, max - cHeight])

		return { start, end }
	}

	// Create an object for each box, defining its position in the grid and
	// it's "fade", or where it should begin moving from transparent to opaque
	const getBoxes = () => {
		return range(rows * cols).map((i) => {
			const col = i % cols
			const row = Math.floor(i / cols)

			const x = col * cWidth
			const y = row * cHeight

			let offsetY = -(height % cHeight) / 2
			let offsetX = -(width % cWidth) / 2

			if (direction === 'vertical') {
				if (reverse) {
					offsetY -= cMaxY
				}
			} else {
				if (reverse) {
					offsetX -= cMaxX
				}
			}

			const { start, end } = getFadePoints()

			return {
				x,
				y,
				point: {
					x: x + offsetX,
					y: y + offsetY,
				},
				fade: {
					start,
					end,
				},
			}
		})
	}

	const cacheBoxes = () => {
		const tcvs = document.createElement('canvas')
		tcvs.height = height
		tcvs.width = width

		const tctx = tcvs.getContext('2d')

		let i = 0

		const getFrame = (scrollPoint: number) => {
			// Clear the canvas
			tctx.clearRect(0, 0, width, height)

			// Calculate offsets
			const scrollOffset = reverse ? -scrollPoint : scrollPoint

			i = 0

			// Loop through all of our blocks
			for (let block of blocks.current) {
				i++
				let { x, y } = block.point
				const { start, end } = block.fade
				let shade: number, v: number

				// move the block up (or down if reversed)
				// wrap this value if above max
				// move the block up, if flipped
				// then get the shade for this y value
				if (direction === 'vertical') {
					y += scrollOffset
					y = wrap(y, cMaxY)
					v = y
				} else {
					// Same for x, if scroll is horizontal
					x += scrollOffset
					x = wrap(x, cMaxX)
					v = x
				}

				// Get a shade by transforming the value of v (x or y) by start and end
				shade = Math.floor(transform(v, [end, start], [steps - 1, 0]))

				// Put that shade onto the canvas at the given x and y
				tctx.putImageData(shades.current[shade], x, y)
			}
			return tctx.getImageData(0, 0, width, height)
		}

		return range(height).map((i) => getFrame(height - i))
	}

	const drawFrame = (i) => {
		const ctx = context.current
		if (!ctx) {
			return
		}

		const frame = wrap(-i, direction === 'vertical' ? height : width)
		ctx.putImageData(frames.current[frame], 0, 0)
	}

	// Draw boxes to the canvas
	const drawBoxes = (scrollPoint: number) => {
		const ctx = context.current
		if (!ctx) return

		// Clear the canvas
		ctx.clearRect(0, 0, width, height)

		// Calculate offsets
		const scrollOffset = reverse ? -scrollPoint : scrollPoint

		// Loop through all of our blocks
		for (let block of blocks.current) {
			let { x, y } = block.point
			const { start, end } = block.fade
			let shade: number, v: number

			// move the block up (or down if reversed)
			// wrap this value if above max
			// move the block up, if flipped
			// then get the shade for this y value
			if (direction === 'vertical') {
				y += scrollOffset
				y = wrap(y, cMaxY)
				v = y
			} else {
				// Same for x, if scroll is horizontal
				x += scrollOffset
				x = wrap(x, cMaxX)
				v = x
			}

			// Get a shade by transforming the value of v (x or y) by start and end
			shade = Math.floor(transform(v, [end, start], [steps - 1, 0]))
			// Put that shade onto the canvas at the given x and y
			ctx.putImageData(shades.current[shade], x, y)
		}
	}

	// The images returned by the algorithm are white and transparent,
	// but we'll use an SVG filter color matrix to replace the color
	const { r, g, b, a } = Color(color)
	const n = (v: number) => v / 255

	return (
		<>
			<Frame
				size="100%"
				background="none"
				style={{
					pointerEvents: 'none',
					overflow: 'hidden',
					imageRendering: 'pixelated',
				}}
			>
				<svg height="0px" width="0px" viewBox={`0 0 ${width} ${height}`}>
					<filter
						id={id + '_colorMap'}
						colorInterpolationFilters="sRGB"
						x="0"
						y="0"
						height="100%"
						width="100%"
					>
						<feColorMatrix
							type="matrix"
							values={`${n(r)} 0 0 0 0
                   0 ${n(g)} 0 0 0
                   0 0 ${n(b)} 0 0
                   0 0 0    ${a} 0`}
						/>
					</filter>
				</svg>
				<canvas
					ref={canvas}
					height={height + 100}
					width={width}
					style={{
						pointerEvents: 'none',
						transformOrigin: `center`,
						transform: `skewY(${skew}deg) ${
							flip ? 'rotate(180deg) translateY(100px)' : ``
						}`,
						filter: `url(#${id + '_colorMap'})`,
						...style,
					}}
				/>
			</Frame>
		</>
	)
}

/* ----------------------------- End Draw Shapes ---------------------------- */

Fader.defaultProps = {
	scrollOffset: motionValue(0),
	color: 'red',
	colorEnd: 'blue',
	steps: 5,
	cWidth: 10,
	cHeight: 20,
	width: 200,
	height: 200,
	direction: 'vertical' as Direction,
	reverse: false,
	skew: 4,
	use8x8: false,
	style: {},
}

addPropertyControls(Fader, {
	color: {
		type: ControlType.Color,
		defaultValue: 'black',
		title: 'Color',
	},
	steps: {
		type: ControlType.Number,
		min: 2,
		max: 100,
		defaultValue: 5,
		title: 'Steps',
	},
	cWidth: {
		type: ControlType.Number,
		min: 1,
		max: 200,
		defaultValue: 10,
		title: 'Width',
	},
	cHeight: {
		type: ControlType.Number,
		min: 1,
		max: 200,
		defaultValue: 20,
		title: 'Height',
	},
	skew: {
		type: ControlType.Number,
		min: -10,
		max: 10,
		defaultValue: 0,
		title: 'Skew',
	},
	direction: {
		type: ControlType.SegmentedEnum,
		options: ['horizontal', 'vertical'],
		title: 'Direction',
	},
	flip: {
		type: ControlType.Boolean,
		defaultValue: false,
		title: 'Flip',
	},
	reverse: {
		type: ControlType.Boolean,
		defaultValue: false,
		title: 'Reverse',
	},
	use8x8: {
		type: ControlType.Boolean,
		enabledTitle: '8x8',
		disabledTitle: '4x4',
		defaultValue: false,
		title: 'Grid',
	},
	gNoise: {
		type: ControlType.Number,
		min: 0,
		max: 1,
		step: 0.01,
		defaultValue: 0.5,
		title: 'Noise',
	},
	gStart: {
		type: ControlType.Number,
		min: 0,
		max: 1,
		step: 0.01,
		defaultValue: 0.5,
		title: 'Start',
	},
	gSpread: {
		type: ControlType.Number,
		min: 0,
		max: 1,
		step: 0.01,
		defaultValue: 0.5,
		title: 'Spread',
	},
})

/* -------------------------- Dithered Shades -------------------------- */

// Turns an ordered set of dithered shades (░▒▓█) using a white for
// the "black" pixels and transparent for the "white" pixels.
const getDitheredShades = (steps = 5, width = 10, height = 20, depth = 4) => {
	// Calculate the difference between each step from 0 (black) to white (255)
	const luminosityStep = 255 / (steps - 1)

	// For each of our steps, get a dithered shade (as ImageData) for that step
	return range(steps).map((i) =>
		getDitheredImageData(luminosityStep * i, width, height, depth)
	)
}

/* ---------------------------- Ordered Dithering --------------------------- */

// 4x4 Dithering Threshold Map (aka Bayer Matrix)
const matrix4x4 = [
	[15, 135, 45, 165],
	[195, 75, 225, 105],
	[60, 180, 30, 150],
	[240, 120, 210, 90],
]

// 8x8 Dithering Threshold Map (aka Bayer Matrix)
const matrix8x8 = [
	[0, 128, 32, 160, 8, 136, 40, 168],
	[192, 64, 224, 96, 200, 72, 232, 104],
	[48, 176, 16, 144, 56, 184, 24, 152],
	[240, 112, 208, 80, 248, 120, 216, 88],
	[12, 140, 44, 172, 4, 132, 36, 164],
	[204, 76, 236, 108, 196, 68, 228, 100],
	[60, 188, 28, 156, 52, 180, 20, 148],
	[252, 124, 220, 92, 244, 116, 212, 84],
]
/*
  Turns a tone (0-255) into a dither pattern, returned as ImageData
  https://en.wikipedia.org/wiki/Ordered_dithering

  In this function, we create an map of image data and use a clever algorithm to 
  decide which pixels in that image we need to fill, and which should be transparent.
  
  Some things to know:
  
  - An image's data is an array of numbers that define which color should get painted
    for each of the image's pixels. 
  
  - An image's colors are 8 bit, defined by one of 256 colors (0 - 255).
  
  - Colors have four channels: red, green, blue, and alpha (the color's opacity).
  
  - Our `data` array includes every channel for every color in our image. 
  
  This means that every four numbers in the array defines one of our image's pixels,
  starting from the top left, in the order of its red, green, blue, and alpha channels. 
  If the array were only [255, 255, 255, 1], it would describe an image with one white 
  pixel, while an array of [255, 255, 255, 1, 0, 0, 0, 127] would have two pixels: a
  white one, and a black one at 50% opacity. https://en.wikipedia.org/wiki/8-bit_color
  */
const getDitheredImageData = (
	luminosity: number,
	width: number,
	height: number,
	depth: number
) => {
	// Create an blank ImageData instance to hold our image's data
	const image = new ImageData(width, height)

	// Get the image's data as an array
	const { data } = image

	// Fill it with white
	data.fill(255)

	// Which matrix are we using as our threshold matrix?
	let thresholdMatrix = depth === 4 ? matrix4x4 : matrix8x8

	// We'll iterate over the image's pixels, setting values in the data array for each pixel
	for (let i = 0; i < data.length; i += 4) {
		// Which pixel in the image are trying to set?
		const x = Math.floor((i / 4) % width)
		const y = Math.floor(i / 4 / width)

		// Which threshold are we using from the threshold matrix?
		let m = thresholdMatrix[x % depth][y % depth]

		// Average the pixel's actual luminance with the threshold value
		let result = Math.floor((luminosity + m) / 2)

		if (result < 127) {
			// If the result is less than 50% white, make it
			// transparent (set all the RGBA values for this
			// pixel to zero)
			data.fill(0, i, i + 4)
		}
	}

	// Set the image with our new data
	image.data.set(data)

	return image
}
