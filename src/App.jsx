import React from "react"
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import { Dashboard, Home } from "./views/views"
import { ProtectedRoute } from "./utils/utils"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute exact path="/" component={Dashboard} />
        <Route path="/login" component={Home} />
        <Redirect from="*" to="/login" />
      </Switch>
    </BrowserRouter>
  )
}

export default App
