import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function Component(props) {
    return (
        <Frame
            size="100%"
            background="#efefef"
            borderRadius={8}
            border={`2px ${props.data ? "dotted" : "solid"} #01011f`}
            overflow="hidden"
        >
            <div
                style={{
                    height: 44,
                    backgroundColor: "#FFFFFF",
                    fontSize: 20,
                    fontWeight: 800,
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    paddingLeft: 16,
                    paddingRight: 40,
                    paddingBottom: 4,
                    color: "#000000",
                    marginBottom: 20,
                }}
            >
                {props.name}
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                <div>
                    {props.props.length > 0 && (
                        <>
                            <div
                                style={{
                                    fontSize: 16,
                                    fontWeight: 800,
                                    padding: "0 16px",
                                    color: "#555555",
                                    marginBottom: 8,
                                }}
                            >
                                Props
                            </div>
                            <div
                                style={{
                                    borderRadius: "0 44px 44px 0",
                                    backgroundColor: "#ffffff",
                                    fontSize: 13,
                                    fontWeight: 800,
                                    padding: 16,
                                    paddingRight: 40,
                                    color: "#000000",
                                    marginBottom: 20,
                                    lineHeight: 1.6,
                                    width: "fit-content",
                                }}
                            >
                                {props.props.map(k => (
                                    <div>
                                        <div
                                            style={{
                                                display: "inline-block",
                                                width: 24,
                                                height: 14,
                                                marginRight: -16,
                                                transform:
                                                    "translateY(3px) translateX(-28px)",
                                                borderRadius: "0 16px 16px 0",
                                                background: "#ffffff",
                                                border: "2px solid #000",
                                            }}
                                        />
                                        {k}
                                        {/*<div
                                            style={{
                                                display: "inline-block",
                                                height: 14,
                                                width: 14,
                                                borderRadius: "100%",
                                                border: "2px solid #000",
                                                transform:
                                                    "translateY(3px) translateX(8px)",
                                            }}
                                        />*/}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
                {props.state.length > 0 && (
                    <div>
                        <div
                            style={{
                                fontSize: 16,
                                fontWeight: 800,
                                padding: "0 16px",
                                color: "#555555",
                                marginBottom: 8,
                                textAlign: "right",
                            }}
                        >
                            State
                        </div>
                        <div
                            style={{
                                borderRadius: "44px 0 0 44px",
                                textAlign: "right",
                                backgroundColor: "#ffffff",
                                fontSize: 13,
                                fontWeight: 800,
                                padding: 16,
                                paddingRight: 28,
                                paddingLeft: 40,
                                color: "#0000000",
                                marginBottom: 20,
                                lineHeight: 1.6,
                                width: "fit-content",
                            }}
                        >
                            {props.state.map(k => (
                                <div>
                                    {k}
                                    <div
                                        style={{
                                            display: "inline-block",
                                            width: 24,
                                            height: 14,
                                            marginRight: -24,
                                            transform:
                                                "translateY(3px) translateX(12px)",
                                            borderRadius: "16px 0 0 16px",
                                            background: "#ffffff",
                                            border: "2px solid #000",
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            {props.methods.length > 0 && (
                <div style={{ textAlign: "center" }}>
                    <div
                        style={{
                            fontSize: 16,
                            fontWeight: 800,
                            padding: "0 16px",
                            color: "#555555",
                            marginBottom: 8,
                        }}
                    >
                        Functions
                    </div>
                    {props.methods.map(k => (
                        <div
                            style={{
                                borderRadius: 44,
                                backgroundColor: "#ffffff",
                                fontSize: 13,
                                fontWeight: 800,
                                padding: 8,
                                paddingRight: 28,
                                paddingLeft: 28,
                                color: "#0000000",
                                lineHeight: 1.6,
                                width: "fit-content",
                                margin: "0 auto 8px auto",
                                textAlign: "center",
                            }}
                        >
                            {k}
                        </div>
                    ))}
                </div>
            )}
        </Frame>
    )
}

Component.defaultProps = {
    name: "Rail",
    props: ["background", "borderRadius"],
    state: [],
    methods: [],
    data: false,
}

addPropertyControls(Component, {
    name: {
        type: ControlType.String,
        defaultValue: "Component",
    },
    props: {
        type: ControlType.Array,
        defaultValue: ["background", "borderRadius"],
        propertyControl: {
            type: ControlType.String,
        },
    },
    state: {
        type: ControlType.Array,
        defaultValue: [],
        propertyControl: {
            type: ControlType.String,
        },
    },
    methods: {
        type: ControlType.Array,
        defaultValue: [],
        propertyControl: {
            type: ControlType.String,
        },
    },
    data: {
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
