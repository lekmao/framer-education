import * as React from 'react'
import { Frame, addPropertyControls, ControlType, Color } from 'framer'

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

type Props = {
	id: string
	height: number
	width: number
	color: string
	image: string
	lumaPoint: number
	threshold: number
	size: 'fit' | 'fill'
	pattern: 'poster' | 'ordered' | 'floyd_steinberg' | 'bill_atkinson'
	use8x8: boolean
}

const wrap = (x: number, n: number) => ((x % n) + n) % n
const range = (num = 0) => Array.from(Array(num).keys())

export function DitherImage(props) {
	const {
		height,
		width,
		id,
		image,
		threshold,
		size,
		lumaPoint,
		color,
		use8x8,
		pattern,
	} = props

	const [imageURL, setImageURL] = React.useState()

	// Create refs for canvas and context on mount
	React.useEffect(() => {
		setDitheredImage(image)
	}, [])

	// Set the dithered image when props change
	React.useEffect(() => {
		setDitheredImage(image)
	}, [image, threshold, use8x8, lumaPoint, pattern, height, width, size])

	// Dither the image and set it to canvas
	const setDitheredImage = async (src: string) => {
		const image = new Image()
		image.crossOrigin = 'Anonymous'

		const dataURL = await new Promise<string>((resolve) => {
			image.onload = () => {
				resolve(
					getDitheredImageData(
						image,
						width,
						height,
						size,
						threshold,
						lumaPoint,
						pattern,
						use8x8 ? 8 : 4
					)
				)
			}

			image.src = src
		})

		// imageRef.src = dataURL
		setImageURL(dataURL)
	}

	// The images returned by the algorithm are white and transparent,
	// but we'll use an SVG filter color matrix to replace the color
	const { r, g, b, a } = Color(color)
	const n = (v) => v / 255

	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<svg height="0px" width="0px" viewBox={`0 0 ${width} ${height}`}>
				<filter
					id={id + '_colorMap'}
					colorInterpolationFilters="sRGB"
					x="0"
					y="0"
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
			<Frame
				size="100%"
				background="none"
				style={{
					backgroundImage: `url(${imageURL})`,
					imageRendering: 'pixelated',
					backgroundSize: 'fill',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center center',
					filter: `url(#${id + '_colorMap'})`,
				}}
			/>
		</div>
	)
}

DitherImage.defaultProps = {
	color: '#000000',
	threshold: 100,
	blackPoint: 0.5,
	pattern: 'ordered',
	use8x8: false,
	size: 'fit',
}

addPropertyControls(DitherImage, {
	image: {
		type: ControlType.Image,
		title: 'Image',
	},
	color: {
		type: ControlType.Color,
		defaultValue: '#000000',
		title: 'Color',
	},
	lumaPoint: {
		type: ControlType.Number,
		min: 0,
		max: 1,
		defaultValue: 0.5,
		step: 0.001,
		title: 'Luminosity',
	},
	threshold: {
		type: ControlType.Number,
		min: 1,
		max: 255,
		defaultValue: 129,
		title: 'Threshold',
	},
	size: {
		type: ControlType.SegmentedEnum,
		options: ['fit', 'fill'],
		optionTitles: ['Fit', 'Fill'],
		title: 'Size',
	},
	pattern: {
		type: ControlType.Enum,
		options: ['poster', 'ordered', 'floyd_steinberg', 'bill_atkinson'],
		optionTitles: ['Poster', 'Ordered', 'Floyd Steinberg', 'Bill Atkinson'],
		title: 'ordered',
	},
	use8x8: {
		type: ControlType.Boolean,
		enabledTitle: '8x8',
		disabledTitle: '4x4',
		defaultValue: false,
		title: 'Grid',
		hidden: ({ pattern }) => pattern !== 'ordered',
	},
})

/* -------------------------------- Dithering ------------------------------- */

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

// Returns a dithered image
//(thanks https://github.com/forresto)
const getDitheredImageData = (
	image: HTMLImageElement,
	width: number,
	height: number,
	size: 'fit' | 'fill',
	threshold: number,
	lumaPoint: number,
	pattern: 'poster' | 'ordered' | 'floyd_steinberg' | 'bill_atkinson',
	depth: number
) => {
	// Create off-screen canvas
	const cvs = document.createElement('canvas')
	// let { height, width } = image
	cvs.height = height
	cvs.width = width

	// Get context
	const ctx = cvs.getContext('2d')

	// Draw Image centered on canvas
	if (size === 'fit') {
		var scale = Math.min(cvs.width / image.width, cvs.height / image.height)
		var x = cvs.width / 2 - (image.width / 2) * scale
		var y = cvs.height / 2 - (image.height / 2) * scale
		ctx.drawImage(image, x, y, image.width * scale, image.height * scale)
	} else if (size === 'fill') {
		// get the scale
		var scale = Math.max(cvs.width / image.width, cvs.height / image.height)
		// get the top left position of the image
		var x = cvs.width / 2 - (image.width / 2) * scale
		var y = cvs.height / 2 - (image.height / 2) * scale
		ctx.drawImage(image, x, y, image.width * scale, image.height * scale)
	}

	// Clip just the size of the component
	const imageData = ctx.getImageData(0, 0, width, height)

	// Get the image's data as an array
	const { data } = imageData

	// Which matrix are we using as our threshold map?
	const thresholdMap = depth === 4 ? matrix4x4 : matrix8x8

	const lp = Math.abs(lumaPoint - 1)

	// Turn image into a monochrome
	for (let i = 0; i < data.length; i += 4) {
		let luminosity = Math.floor(
			data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114
		)

		if (luminosity < (lp - 0.5) * 255) {
			luminosity = 0
		} else if (luminosity > (lp + 0.5) * 255) {
			luminosity = 255
		}

		data[i] = luminosity
	}

	const clearPixel = (i) => {
		data.fill(0, i, i + 4)
	}

	const fillPixel = (i) => {
		data.fill(255, i, i + 3)
		data[i + 3] = 255
	}

	// We'll iterate over the image's pixels, values in the data array for each pixel
	for (let i = 0; i < data.length; i += 4) {
		const p = data[i]
		let next = 0,
			err = 0

		if (pattern === 'poster') {
			if (p > threshold) {
				clearPixel(i)
			} else {
				fillPixel(i)
			}
		} else if (pattern === 'ordered') {
			// Ordered dithering
			// https://en.wikipedia.org/wiki/Ordered_dithering
			const x = Math.floor((i / 4) % width)
			const y = Math.floor(i / 4 / width)
			let map = thresholdMap[x % depth][y % depth]

			next = Math.floor((data[i] + map) / 2)

			if (p === 0) {
				// If the pixel is transparent, clear it
				clearPixel(i)
			} else if (next > threshold) {
				// If it should be black, clear it
				clearPixel(i)
			} else {
				// Otherwise, paint it white
				fillPixel(i)
			}
		} else if (pattern === 'floyd_steinberg') {
			// Floyd–Steinberg dithering algorithm
			// https://en.wikipedia.org/wiki/Floyd%E2%80%93Steinberg_dithering
			if (p < threshold) {
				fillPixel(i)
				next = 0
			} else {
				clearPixel(i)
				next = 255
			}

			err = Math.floor((p - next) / 16)

			data[i + 4] += err * 7
			data[i + 4 * width - 4] += err * 3
			data[i + 4 * width] += err * 5
			data[i + 4 * width + 4] += err * 1
		} else if (pattern === 'bill_atkinson') {
			// Bill Atkinson's dithering algorithm
			// https://en.wikipedia.org/wiki/Dither#Algorithms
			if (p < threshold) {
				fillPixel(i)
				next = 0
			} else {
				clearPixel(i)
				next = 255
			}

			err = Math.floor(p - next) / 8

			data[i + 4] += err
			data[i + 8] += err
			data[i + 4 * width - 4] += err
			data[i + 4 * width] += err
			data[i + 4 * width + 4] += err
			data[i + 8 * width] += err
		}
	}

	// Set the new image data on the image
	imageData.data.set(data)

	// Set the image back onto the canvas
	ctx.putImageData(imageData, 0, 0)

	// Export the canvas as a data url
	const dataURL = cvs.toDataURL('image/png')

	return dataURL
}
