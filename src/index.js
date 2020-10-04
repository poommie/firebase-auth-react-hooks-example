import React from "react"
import ReactDOM from "react-dom"

import "./index.css"
import "antd/dist/antd.css"

import App from "./App"
import { registerServiceWorker } from "./utils/utils"

ReactDOM.render(<App />, document.getElementById("root"))

registerServiceWorker()
