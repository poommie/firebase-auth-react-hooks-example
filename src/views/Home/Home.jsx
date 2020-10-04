import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import styles from "./Home.module.css"

import { Button, TextField, Loader } from "../../components/components"

import {
  emailCoreConfig,
  passwordCoreConfig,
  buttonCoreConfig
} from "./Home.config"

import { firebaseOps } from "../../services/services"

const Home = () => {
  const history = useHistory()
  const [email, updateEmail] = useState("")
  const [password, updatePassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [{ errStatus, errMessage }, setErrorMessage] = useState({
    errStatus: false,
    errMessage: ""
  })

  const triggerLogin = async loginType => {
    try {
      setLoading(true)
      setErrorMessage(() => ({ status: false, message: "" }))
      await firebaseOps.login({ email, password }, loginType)
      history.push("/")
    } catch (err) {
      setErrorMessage(() => ({ errStatus: true, errMessage: err.message }))
      setLoading(false)
    }
  }

  return (
    <main className={styles.container}>
      <div className={styles.innerBox}>
        <TextField
          {...emailCoreConfig}
          value={email || ""}
          onChange={e => updateEmail(e.target.value)}
        />
        <TextField
          {...passwordCoreConfig}
          value={password || ""}
          onChange={e => updatePassword(e.target.value)}
        />
        <Button {...buttonCoreConfig} onClick={() => triggerLogin("email")}>
          {loading ? <Loader /> : "Log in"}
        </Button>
        {errStatus && <p>{errMessage}</p>}
      </div>
    </main>
  )
}

export default Home
