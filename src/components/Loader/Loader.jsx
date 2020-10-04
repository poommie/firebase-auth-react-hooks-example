import React from "react"
import { Spin, Icon } from "antd"

import styles from "./Loader.module.css"

const loadingSpinner = (
  <Icon type="loading" style={{ fontSize: 24, color: "#fff" }} spin />
)

const SpinOverride = config => (
  <Spin {...config} className={styles.root} indicator={loadingSpinner} />
)

export default SpinOverride
