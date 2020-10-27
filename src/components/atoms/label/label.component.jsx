import React from "react"

const Label = ({ children, for: labelFor }) => {
  return (
    <label
      className="block uppercase tracking-wide text-gray-700 dark:text-gray-600 text-xs font-bold mb-2"
      for={labelFor}
    >
      {children}
    </label>
  )
}

export default Label
