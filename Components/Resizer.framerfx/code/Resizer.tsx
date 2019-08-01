import * as React from "react"
import {
    Frame,
    FrameProps,
    useMotionValue,
    addPropertyControls,
    ControlType,
} from "framer"

type Props = FrameProps & {
    text: string
    fitContainer: boolean
    onResize: (width: number, height: number) => void
}

export function Resizer(props: Partial<Props>) {
    const { text, fitContainer, onResize, width, height, size, ...rest } = props

    // [1]
    const contentRef = React.useRef<HTMLDivElement>()

    // [2]
    const mvWidth = useMotionValue(size || width)
    const mvHeight = useMotionValue(size || height)

    // [3]
    const [resizing, setResizing] = React.useState(false)

    // [4]
    React.useLayoutEffect(() => {
        mvWidth.set(size || width)
        mvHeight.set(size || height)

        setResizing(true)
    }, [text, fitContainer, size, height, width])

    // [5]
    React.useLayoutEffect(() => {
        const { offsetWidth, offsetHeight } = contentRef.current

        mvWidth.set(offsetWidth + 1)
        mvHeight.set(offsetHeight)

        // [6]
        onResize(offsetWidth + 1, offsetHeight)

        setResizing(false)
    }, [resizing])

    return (
        <Frame {...rest} width={mvWidth as any} height={mvHeight as any}>
            <div
                ref={contentRef}
                style={{
                    width: "fit-content",
                    height: "fit-content",
                    padding: "8px 16px",
                    // [7]
                    whiteSpace: fitContainer ? "normal" : "nowrap",
                }}
            >
                {text}
            </div>
        </Frame>
    )
}

Resizer.defaultProps = {
    text: "Hello world!",
    fitContainer: false,
    onResize: () => null,
}

addPropertyControls(Resizer, {
    text: {
        type: ControlType.String,
        defaultValue: "Hello world!",
    },
    fitContainer: {
        type: ControlType.Boolean,
        defaultValue: true,
    },
})

/*
Notes ________________

[1]
A ref for our content div.

[2]
Motion Values for our resized height and width.

[3]
A state to track whether the component is between resizes.

[4]
When we get new layout props, trigger a resize.

[5]
When we're resizing, use the actual height and width of the 
content div to set the height and width of the container Frame.

[6]
Other components might need to know when this component resizes,
so we'll share that information through the onResize event prop.

[7]
If we've set fitContainer, then this div will be constrained to
the height and width we provide through props. Otherwise it will
overlap, and the container will adjust to fit the content.
*/
