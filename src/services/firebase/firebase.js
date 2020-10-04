import { firebase } from "../../config/config"

const {
  firebaseAuth: auth,
  providers,
  PROVIDER_GOOGLE,
  PROVIDER_TWITTER,
  PROVIDER_FACEBOOK,
  PROVIDER_EMAIL
} = firebase

const login = async ({ email, password }, type) => {
  // returning user and idToken regardless
  // often idToken can be attached to the requests, so the backend can make
  // further authorizations
  switch (type) {
    default:
    case PROVIDER_EMAIL: {
      const user = await auth.signInWithEmailAndPassword(email, password)
      const idToken = await auth.currentUser.getIdToken()
      return { ...user, idToken }
    }
    case PROVIDER_GOOGLE: {
      const user = await auth.signInWithPopup(providers.google)
      const idToken = await auth.currentUser.getIdToken()
      return { ...user, idToken }
    }
    case PROVIDER_TWITTER: {
      const user = await auth.signInWithPopup(providers.twitter)
      const idToken = await auth.currentUser.getIdToken()
      return { ...user, idToken }
    }
    case PROVIDER_FACEBOOK: {
      const user = await auth.signInWithPopup(providers.facebook)
      const idToken = await auth.currentUser.getIdToken()
      return { ...user, idToken }
    }
  }
}

const logout = async () => auth.signOut()

export default { login, logout }
