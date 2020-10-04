import firebase from "firebase"
import webCredentials from "./firebase-admin"

firebase.initializeApp(webCredentials)

const PROVIDER_GOOGLE = "google"
const PROVIDER_TWITTER = "twitter"
const PROVIDER_FACEBOOK = "facebook"
const PROVIDER_EMAIL = "email"

const firebaseAuth = firebase.auth()
const providers = {
  [PROVIDER_GOOGLE]: new firebase.auth.GoogleAuthProvider(),
  [PROVIDER_TWITTER]: new firebase.auth.TwitterAuthProvider(),
  [PROVIDER_FACEBOOK]: new firebase.auth.FacebookAuthProvider()
}

export default {
  PROVIDER_GOOGLE,
  PROVIDER_TWITTER,
  PROVIDER_FACEBOOK,
  PROVIDER_EMAIL,
  firebaseAuth,
  providers
}
