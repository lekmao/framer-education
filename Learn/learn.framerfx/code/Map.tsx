import * as React from "react"
import { ControlType } from "framer"
import * as mapboxgl from "mapbox-gl"
import * as geoViewport from "@mapbox/geo-viewport"
import * as geojsonExtent from "geojson-extent"
import "mapbox-gl/dist/mapbox-gl.css"

type Marker = {
    id?: string
    center: [number, number]
    options: mapboxgl.MarkerOptions
}

type MapEvent = (event?: React.MouseEvent<HTMLDivElement>) => void

type Viewport = {
    center: [number, number]
    zoom: number
}

type MarkerEventHandler = (
    marker: Marker,
    elm: mapboxgl.Marker,
    map: mapboxgl.Map
) => void

interface Props {
    accessToken: string
    height: number
    width: number
    style?: string
    styleUrl?: string
    longitude?: number
    latitude?: number
    zoom?: number
    pitch?: number
    bearing?: number
    markers?: Marker[]
    fitBounds?: boolean
    minZoom?: number
    maxZoom?: number
    padding?: number
    onClick?: MapEvent
    onMouseEnter?: MapEvent
    onMouseLeave?: MapEvent
    onStyleLoad?: (map: mapboxgl.Map) => void
    prepareViewport?: (previous: Viewport, next: Viewport) => Viewport
    onViewportChange?: (viewport: Viewport, markers: mapboxgl.Marker[]) => void
    onMarkerClick?: MarkerEventHandler
    onMarkerMouseEnter?: MarkerEventHandler
    onMarkerMouseLeave?: MarkerEventHandler
    onMarkerMouseDown?: MarkerEventHandler
    onMarkerMouseUp?: MarkerEventHandler
    onMarkerDragStart?: MarkerEventHandler
    onMarkerDrag?: MarkerEventHandler
    onMarkerDragEnd?: MarkerEventHandler
}

export class Map extends React.Component<Props> {
    static defaultProps: Props = {
        accessToken: "",
        style: "light-v9",
        styleUrl: "",
        longitude: 83.0769,
        latitude: 13.8462,
        zoom: 2,
        pitch: 0,
        bearing: 0,
        markers: [],
        fitBounds: true,
        minZoom: 12,
        maxZoom: 15,
        padding: 32,
        width: 200,
        height: 200,
        prepareViewport: undefined,
        onViewportChange: () => null,
        onStyleLoad: () => null,
        onMarkerClick: () => null,
        onMarkerMouseEnter: () => null,
        onMarkerMouseLeave: () => null,
        onMarkerMouseDown: () => null,
        onMarkerMouseUp: () => null,
        onMarkerDragStart: () => null,
        onMarkerDrag: () => null,
        onMarkerDragEnd: () => null,
    }

    mapRef = React.createRef<HTMLDivElement>()
    map?: mapboxgl.Map
    markers: mapboxgl.Marker[] = []

    viewport: Viewport = {
        center: [this.props.longitude, this.props.latitude],
        zoom: this.props.zoom,
    }

    static propertyControls = {
        accessToken: {
            title: "Access Token",
            type: ControlType.String,
        },
        style: {
            title: "Style",
            type: ControlType.Enum,
            options: [
                "light-v9",
                "dark-v10",
                "streets-v11",
                "outdoors-v11",
                "satellite-v9",
                "satellite-streets-v11",
                "custom",
            ],
            optionTitles: [
                "Light",
                "Dark",
                "Streets",
                "Outdoors",
                "Satellite",
                "Satellite Streets",
                "Custom",
            ],
            defaultValue: "light-v9",
        },
        styleUrl: {
            title: "Style URL",
            type: ControlType.String,
            defaultValue: "",
            hidden: ({ style }) => style !== "custom",
        },
        longitude: {
            title: "Longitude",
            type: ControlType.Number,
            min: -90,
            max: 90,
            defaultValue: 83.0769,
            step: 0.001,
        },
        latitude: {
            title: "Latitude",
            type: ControlType.Number,
            min: -90,
            max: 90,
            defaultValue: 13.8462,
            step: 0.001,
        },
        zoom: {
            title: "Zoom",
            type: ControlType.Number,
            min: 0,
            max: 22,
            defaultValue: 2,
            step: 0.01,
        },
        pitch: {
            title: "Pitch",
            type: ControlType.Number,
            min: 0,
            max: 60,
            defaultValue: 0,
            step: 1,
        },
        bearing: {
            title: "Bearing",
            type: ControlType.Number,
            min: -180,
            max: 180,
            defaultValue: 0,
            step: 1,
        },
        fitBounds: {
            title: "Fit Bounds",
            type: ControlType.Boolean,
            defaultValue: true,
        },
        minZoom: {
            title: "Min Zoom",
            type: ControlType.Number,
            min: 0,
            max: 20,
            defaultValue: 0,
            step: 0.5,
            hidden: ({ fitBounds }) => !fitBounds,
        },
        maxZoom: {
            title: "Max Zoom",
            type: ControlType.Number,
            min: 0,
            max: 20,
            defaultValue: 0,
            step: 0.5,
            hidden: ({ fitBounds }) => !fitBounds,
        },
        padding: {
            title: "Padding",
            type: ControlType.Number,
            min: 0,
            max: 128,
            defaultValue: 32,
            step: 1,
            hidden: ({ fitBounds }) => !fitBounds,
        },
    }

    /* -------------------------------- Lifecycle ------------------------------- */

    componentDidMount() {
        this.handleUpdate(this.props, {} as Props)
    }

    componentWillReceiveProps(nextProps: Props) {
        this.handleUpdate(nextProps, this.props)
    }

    // Create a new map, based on a new access token
    loadMap = (nextProps: Props, prevProps: Props) => {
        const {
            accessToken,
            style,
            styleUrl,
            minZoom,
            maxZoom,
            bearing,
            pitch,
            zoom,
            onStyleLoad,
        } = nextProps

        return new Promise<mapboxgl.Map>(resolve => {
            // If we have the same token and a map, bail
            if (accessToken === prevProps.accessToken && this.map) {
                resolve()
                return
            }

            // Remove previous map
            this.map && this.map.remove()

            // If we don't have a token, bail
            if (!accessToken || accessToken === "") {
                resolve()
                return
            }

            // Set new access token
            ;(mapboxgl as any).accessToken = accessToken

            // Get style URL
            const url =
                style === "custom"
                    ? styleUrl
                    : `mapbox://styles/mapbox/${style}`

            // Create the map
            const map = new mapboxgl.Map({
                container: this.mapRef.current,
                style: url,
                minZoom,
                maxZoom,
                bearing,
                pitch,
                zoom,
            })

            // When the style is loaded, continue
            map.on("style.load", () => {
                onStyleLoad(map)
                resolve(map)
            })
        })
    }

    // Load a new map, if needed
    handleUpdate = async (nextProps: Props, prevProps: Props) => {
        // Get a function (diff) that accepts keys and returns
        // whether keys include a property is different between
        // the two objects
        const diff = getDiffer(nextProps, prevProps)

        /* 
		Step 1.
        Get a new map, if necessary (or if we can),
        and stop if we don't have a map 
		*/
        this.map = await this.loadMap(nextProps, prevProps)

        if (!this.map) return

        /* 
		Step 2.
        Respond to changes in props.
		*/

        // First, update map size if component has resized
        if (diff("width", "height")) {
            this.map.resize()
        }

        // Second, update map markers
        if (diff("markers")) {
            const {
                markers,
                onMarkerClick,
                onMarkerMouseEnter,
                onMarkerMouseLeave,
                onMarkerMouseDown,
                onMarkerMouseUp,
                onMarkerDragStart,
                onMarkerDrag,
                onMarkerDragEnd,
            } = nextProps

            // ...it's easier just to start fresh, but this could be optimized.

            // Remove previous markers
            this.markers.forEach(marker => marker.remove())

            // Add new markers
            this.markers = markers.map(marker => {
                // Create new marker
                if (marker.options && marker.options.color) {
                    marker.options.color = marker.options.color.toUpperCase()
                }

                const m = new mapboxgl.Marker(marker.options || {})

                // Set the marker's center and add it to map
                m.setLngLat(marker.center).addTo(this.map)

                // Get the marker's HTML element
                const elm = m.getElement()

                // Set event listeners
                elm.onclick = () => onMarkerClick(marker, m, this.map)
                elm.onmouseenter = () => onMarkerMouseEnter(marker, m, this.map)
                elm.onmouseleave = () => onMarkerMouseLeave(marker, m, this.map)
                elm.onmousedown = () => onMarkerMouseDown(marker, m, this.map)
                elm.onmouseup = () => onMarkerMouseUp(marker, m, this.map)
                elm.ondragstart = () => onMarkerDragStart(marker, m, this.map)
                elm.ondrag = () => onMarkerDrag(marker, m, this.map)
                elm.ondragend = () => onMarkerDragEnd(marker, m, this.map)

                return m
            })
        }

        // Get the next viewport (and whether it has changed)
        const { viewport, hasChanged } = await this.calculateViewport(nextProps)

        // ... and if the viewport has changed, move the camera
        if (hasChanged) {
            const { prepareViewport } = nextProps

            // If we have a prepare viewport function, first calculate a starting viewport
            if (prepareViewport) {
                const preparedViewport = prepareViewport(
                    this.viewport,
                    viewport
                )
                this.map.jumpTo(preparedViewport)
            }

            // Fly the map to the new viewport
            this.map.flyTo({
                center: [viewport.center[0], viewport.center[1]],
                zoom: viewport.zoom,
            })

            // Store the viewport for next time
            this.viewport = viewport

            // Alert new viewport
            this.props.onViewportChange(viewport, this.markers)
        } else if (this.markers.length === 0) {
            // If we haven't changed our calculated viewport,
            // but we *have* receive new coordinates as props,
            // update the map using those props
            if (diff("longitude", "latitude")) {
                const { latitude, longitude } = nextProps
                this.map.setCenter([longitude, latitude])
            }
        }

        /* 
		Step 2.
        Finally, update map style using the custom 
        styleUrl prop or the style prop.
		*/
        if (diff("style")) {
            const { style, styleUrl } = nextProps
            const url =
                style === "custom"
                    ? styleUrl
                    : `mapbox://styles/mapbox/${style}`

            this.map.setStyle(url)
        }
    }

    // Turn our props into a viewport
    calculateViewport = async (props: Props) => {
        const {
            width,
            height,
            longitude,
            latitude,
            zoom,
            markers,
            fitBounds,
            minZoom,
            maxZoom,
            padding,
        } = props

        let viewport: any

        let json = {
            type: "FeatureCollection",
            properties: {},
            features: [],
        }

        const markerFeatures = markers.map((marker, i) => ({
            type: "Feature",
            properties: {},
            geometry: {
                type: "Point",
                coordinates: marker.center,
            },
        }))

        if (fitBounds && markers.length > 0) {
            json.features = [...json.features, ...markerFeatures]

            const bounds = geojsonExtent(json)

            viewport = geoViewport.viewport(
                bounds,
                [width / 2 - padding * 2, height / 2 - padding * 2],
                minZoom,
                maxZoom,
                undefined,
                true
            )
        } else {
            viewport = {
                center: [longitude, latitude],
                zoom,
            }
        }

        const [lng, lat] = this.viewport.center
        const { zoom: pz } = this.viewport

        let same = lng == longitude && lat == longitude && pz == zoom

        return {
            viewport,
            hasChanged: !same,
        }
    }

    /* ----------------------------- Overlay Methods ---------------------------- */

    // Not currently used
    loadGeoJsonSource = (geojson: any) => {
        const waiting = () => {
            if (!this.map.isStyleLoaded()) {
                setTimeout(waiting, 200)
            } else {
                const prev = this.map.getSource("geojson")
                if (prev) {
                    this.map.removeSource("geojson")
                }

                this.map.addSource("geojson", {
                    type: "geojson",
                    data: geojson,
                })
            }
        }

        waiting()
    }

    /* --------------------------------- Render --------------------------------- */

    render() {
        const {
            accessToken,
            onClick,
            onMouseEnter,
            onMouseLeave,
            markers,
        } = this.props

        return (
            <div
                ref={this.mapRef}
                style={{
                    height: "100%",
                    width: "100%",
                    backgroundColor: "#c9d2d3",
                }}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {accessToken === "" && (
                    <div
                        style={{
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            fontSize: 16,
                            fontWeight: 500,
                            padding: 32,
                            color: "#bb88ff",
                            border: "1px solid #8855ff",
                            backgroundColor: "#2f2546",
                            textAlign: "center",
                        }}
                    >
                        <p>Add your Mapbox access token.</p>
                        <p>
                            👉{" "}
                            <a
                                style={{ color: "#bb88ff" }}
                                href="https://account.mapbox.com/"
                            >
                                Get yours here.
                            </a>
                        </p>
                    </div>
                )}
            </div>
        )
    }
}

// Helpers
function getDiffer<T>(sourceA: T, sourceB: T) {
    type Matches = { [key in keyof T]: boolean }

    const matches: Matches = Object.keys(sourceA).reduce((o, key) => {
        o[key] = JSON.stringify(sourceA[key]) === JSON.stringify(sourceB[key])
        return o
    }, {}) as Matches

    return (...keys: Array<keyof T>) => {
        for (let key of keys) {
            if (!matches[key]) {
                return true
            }

            return false
        }
    }
}

// Get the distance between two points
function getDistance(pointA: [number, number], pointB: [number, number]) {
    const [x1, y1] = pointA
    const [x2, y2] = pointB
    var a = x1 - x2
    var b = y1 - y2

    var c = Math.sqrt(a * a + b * b)
}
