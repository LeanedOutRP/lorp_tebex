import React from "react"
import ReactDOM from "react-dom/client"

import {MantineProvider, createTheme} from "@mantine/core"
import {Notifications} from "@mantine/notifications"

import App from "./App"

import "@mantine/core/styles.css"
import "@mantine/notifications/styles.css"
import "./index.css"

import "./utils/suppressMantineWarnings"

const theme = createTheme({
    primaryColor: "violet",
    colors: {
        violet: [
            "#f7e4ffff",
            "#e7cbfaff",
            "#da9af3ff",
            "#9f64ecff",
            "#9839e6ff",
            "#8a1de3ff",
            "#9b3dff",
            "#7514c4ff",
            "#660daeff",
            "#460097ff",
        ],
        dark: [
            "#FFFFFF",
            "#CCCCCC",
            "#999999",
            "#666666",
            "#2a2a2a",
            "#1a1a1a",
            "#111111",
            "#111111",
            "#111111",
            "#111111",
        ],
    },
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    defaultRadius: "sm",
})

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <MantineProvider theme={theme} defaultColorScheme="dark">
            <Notifications position="top-right"/>
            <App/>
        </MantineProvider>
    </React.StrictMode>,
)