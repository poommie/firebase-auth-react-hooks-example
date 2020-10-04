import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import { Dashboard, Home } from "./views/views"

import { ProtectedRoute } from "./utils/utils"

const App = () => {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/" component={Dashboard} />
        <Route path="/login" component={Home} />
        <Redirect from="*" to="/login" />
      </Switch>
    </Router>
  )
}

export default App
