import React from "react"
import classNames from "../../../utils/classNames"

const Tag = ({ title, className }) => {
  return (
    <span
      className={classNames(
        "inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700",
        className
      )}
    >
      {title}
    </span>
  )
}

export default Tag
