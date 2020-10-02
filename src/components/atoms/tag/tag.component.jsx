import React from "react"
import classNames from "../../../utils/classNames"

const Tag = ({ title, className }) => {
  return (
    <span
      class={classNames(
        "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700",
        className
      )}
    >
      {title}
    </span>
  )
}

export default Tag
