import React from "react"
import classNames from "../../../utils/classNames"
import { base } from "./button.module.css"
const Button = ({ children, as, className, minimal, ...otherProps }) => {
  const finalClassNames = classNames(
    "text-sm uppercase px-3 py-2  tracking-wider rounded flex justify-center items-center",
    { "bg-gray-900 text-white hover:bg-gray-800": !minimal },
    { "bg-gray-300 text-gray-900 hover:bg-gray-200 ": minimal },
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
