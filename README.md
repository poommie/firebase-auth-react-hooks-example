# Firebase hooks login example

## Getting Started

This is an open frontend example combining the power of React hooks with firebase authentication. The app exposes protected and public routes, and uses React Context API to manage the logged in user instance. The simple UI is based on ANTD design, and CSS modules.

### Prerequisites

1. Make sure NodeJS and NPM is installed. 
2. Clone and run npm install in the root folder.

```
git clone https://github.com/kondricz/firebase-auth-react-hooks-example.git
cd firebase-auth-react-hooks-example
npm install
```
3. Copy your own firebase SDK snippet into:

`/src/config/firebase-admin.js`

It should look like this:

```

export default {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
}

```

4. Run the app with `npm run start`

## Based on React hooks

This concept is based on hooks. Some of them (beyond `useState`):

`useHistory`:

* [Hooks in React Router](https://dev.to/finallynero/hooks-introduced-in-react-router-v5-1-7g8)

Good use of react hooks to get access to the `history` object and make navigation programmatically.

`useContext`:

* [React hooks: UseContext](https://en.reactjs.org/docs/hooks-reference.html#usecontext)

Simplified and easier way to use React context.

`useAuthState`:

* [React firebase hooks](https://www.npmjs.com/package/react-firebase-hooks)

Wrapper around firebase authentication. For few lines of code, it gives the state of user entity. Does not substitute the login/logout firebase calls though.




## UI

This example does not focus too much on the UI, only on minimal level. It uses however two technologies, which can be integrated smoothly with create-react-app.

* [ANTD](https://ant.design/) - Beatiful UI kit with exciting components
* [Css modules](https://github.com/css-modules/css-modules) - Nonconflicting CSS

## Authors

* **Koppany Kondricz** - *Initial work* - [Koppany Kondricz](https://github.com/kondricz)