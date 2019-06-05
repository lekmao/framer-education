import { Data, motionValue, transform, useTransform, Override } from "framer"

// Override Docs: https://framer.com/docs/overrides

const data = Data({
	loadingState: "idle", // loading, loaded
})

const scrollY = motionValue(0)

export function Scroll(): Override {
	return {
		contentOffsetY: scrollY,
		dragEnabled: data.loadingState === "idle",
		onPanEnd: () => {
			if (data.loadingState === "idle" && scrollY.get() > 32) {
				data.loadingState = "loading"
				setTimeout(() => (data.loadingState = "complete"), 1500)
			}
		},
	}
}

export function Content(): Override {
	return {
		animate: {
			y: data.loadingState === "loading" ? 104 : 0,
		},
		onAnimationComplete: () => {
			if (data.loadingState === "complete") {
				data.loadingState = "idle"
			}
		},
	}
}

export function Spinner(): Override {
	return {
		opacity: data.loadingState === "idle" ? 0 : 1,
		animate: {
			rotate: 360,
		},
		transition: {
			curve: "tween",
			ease: "linear",
			loop: Infinity,
			duration: 1,
		},
	}
}

export function Loader(): Override {
	const loadingOpacity = useTransform(scrollY, [64, 80], [0, 1])
	return {
		y: useTransform(scrollY, [0, 96], [-64, 0]),
		opacity: data.loadingState === "idle" ? loadingOpacity : 0,
	}
}
