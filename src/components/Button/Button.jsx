import React from "react"
import PropTypes from "prop-types"
import { Button } from "antd"

const ButtonOverride = ({ children, ...config }) => (
  <Button {...config}>{children}</Button>
)

ButtonOverride.propTypes = {
  children: PropTypes.node.isRequired
}

export default ButtonOverride
