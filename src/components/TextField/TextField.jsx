import React from "react"
import PropTypes from "prop-types"
import { Input } from "antd"

import styles from "./TextField.module.css"

const InputOverride = ({ variant, ...config }) => (
  <>
    {
      {
        password: (
          <Input.Password {...config} className={styles.rootPassword} />
        ),
        text: <Input {...config} className={styles.root} />
      }[variant]
    }
  </>
)

InputOverride.propTypes = {
  variant: PropTypes.oneOf(["password", "text"]).isRequired
}

export default InputOverride
