import React from "react"
import classNames from "../../../utils/classNames"
import { base } from "./button.module.css"

const Button = ({ children, className }) => {
  return (
    <button
      className={classNames(
        "px-4 py-2 rounded-md bg-purple-700 hover:bg-purple-600 transform hover:-translate-y-1 ease-in text-sm text-white shadow-md",
        base,
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
