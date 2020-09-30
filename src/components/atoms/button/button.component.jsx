import React from "react"
import classNames from "../../../utils/classNames"
import btnStyles from "./button.module.css"

const Button = ({ children }) => {
  return (
    <button className={classNames("bg-teal-300", btnStyles.btn)}>
      {children}
    </button>
  )
}

export default Button
