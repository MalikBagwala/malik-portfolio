import React from "react"
import classNames from "../../../utils/classNames"
import { base } from "./button.module.css"
const Button = ({ children, as, className, ...otherProps }) => {
  const finalClassNames = classNames(
    "text-sm uppercase bg-gray-900 text-white px-3 py-2 hover:bg-gray-800 tracking-wider rounded flex justify-center items-center",
    base,
    className
  )
  return (
    <>
      {as === "a" ? (
        <a role="button" className={finalClassNames} {...otherProps}>
          {children}
        </a>
      ) : (
        <button className={finalClassNames} {...otherProps}>
          {children}
        </button>
      )}
    </>
  )
}

export default Button
