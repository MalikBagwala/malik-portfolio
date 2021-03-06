import React from "react"
import classNames from "../../../utils/classNames"
import { base } from "./anchor.module.css"

const Anchor = ({ href, children, className, muted, ...otherProps }) => {
  return (
    <a
      href={href}
      target="__blank"
      {...otherProps}
      className={classNames(
        {
          [base]: !muted,
          "dark:hover:bg-yellow-300 dark:hover:text-yellow-900": !muted,
          "font-bold": muted,
        },
        className
      )}
    >
      {children}
    </a>
  )
}

export default Anchor
