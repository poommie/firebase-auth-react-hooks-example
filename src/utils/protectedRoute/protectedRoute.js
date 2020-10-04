import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"

import { firebase } from "../../config/config"
import { userContext as UserContext } from "../../contexts/contexts"

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [user, initialising, error] = useAuthState(firebase.firebaseAuth)
  const MAGIC_URL = ""

  // using the 'true switch' pattern to quickly run through the possible use cases of this wrapper
  // this is equivalent of putting 3 if conditions to cover the logging flow

  switch (true) {
    case initialising:
      // firebase login initialization. If user logged in or not, is not known here yet. Always renders.
      return <div />
    case error:
      // firebase initialized but with an error, don't do much.
      return <p>Something went wrong. Please try to login again.</p>
    case !user:
      // firebase initialized without an error, but user is not logged in.
      return <Redirect to="/login" />
    default:
      // firebase auth managed to grab the user normally, render the resource with context provider
      // containing the user information
      return (
        <Route
          {...rest}
          render={props => (
            <UserContext.Provider
              value={{
                photoURL: user.photoURL || MAGIC_URL,
                email: user.email
              }}
            >
              <Component {...props} />
            </UserContext.Provider>
          )}
        />
      )
  }
}

ProtectedRoute.propTypes = {
  component: PropTypes.node.isRequired
}

export default ProtectedRoute
