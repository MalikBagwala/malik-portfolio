import React from "react"
import classNames from "../../../utils/classNames"
import kebabCase from "../../../utils/kebabCase"
import Label from "../label/label.component"

const Input = ({
  label,
  labelFor,
  placeholder,
  error,
  type = "text",
  className,
}) => {
  const id = labelFor || kebabCase(label)
  return (
    <div className="w-full md:w-1/2 px-3 mb-0 lg:mb-6">
      <Label for={id}>{label}</Label>
      <input
        className={classNames(
          "appearance-none block w-full bg-gray-200 dark:bg-gray-800 text-gray-700 border dark:border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-200",
          {
            "border-red-500": error,
          },
          className
        )}
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  )
}

export default Input
