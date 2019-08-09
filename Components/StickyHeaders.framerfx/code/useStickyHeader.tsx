import * as React from "react"
import { useTransform, MotionValue } from "framer"

export function useStickyHeader(scrollY: MotionValue<number>) {
    const ref = React.useRef<HTMLElement>()
    const top = React.useRef<number>()

    React.useEffect(() => {
        top.current = ref.current.offsetTop
    }, [])

    const y = useTransform(scrollY, v =>
        v < -top.current ? -v - top.current : 0
    )

    return [ref, y] as [React.MutableRefObject<HTMLElement>, MotionValue<any>]
}
