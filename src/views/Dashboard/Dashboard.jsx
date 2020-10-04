import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { Avatar } from "antd"

import styles from "./Dashboard.module.css"

import { Button } from "../../components/components"
import { userContext } from "../../contexts/contexts"

import { firebaseOps } from "../../services/services"

const Dashboard = () => {
  const { photoURL, email } = useContext(userContext)
  const history = useHistory()

  const logout = async () => {
    await firebaseOps.logout()
    history.push("/login")
  }
  return (
    <main className={styles.container}>
      <div>
        <p className={styles.username}>
          <Avatar src={photoURL} /> {email}
        </p>
        <Button icon="logout" block onClick={() => logout()}>
          Logout
        </Button>
      </div>
    </main>
  )
}

export default Dashboard
