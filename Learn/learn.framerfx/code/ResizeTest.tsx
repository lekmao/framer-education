import * as React from "react"
import { Frame, Stack } from "framer"
import { Text } from "./Text"
import { Link } from "./Link"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function ResizeTest() {
    return (
        <Frame size={"100%"}>
            <Stack direction="vertical" height="100%" width="100%">
                <Text border="1px solid #000" />
                <Text resize border="1px solid #000" />
                <Text border="1px solid #000" />
                <Stack
                    direction="horizontal"
                    height="1fr"
                    alignment="center"
                    distribution="center"
                    width="100%"
                >
                    <Text resize="height" border="1px solid #000" />
                    <Text resize="width" border="1px solid #000" />
                    <Text border="1px solid #000" />
                </Stack>
            </Stack>
        </Frame>
    )
}
