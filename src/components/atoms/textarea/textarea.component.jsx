import React from "react"
import classNames from "../../../utils/classNames"
import kebabCase from "../../../utils/kebabCase"
import Label from "../label/label.component"

const TextArea = ({
  label,
  labelFor,
  placeholder,
  error,
  type = "text",
  className,
}) => {
  const id = labelFor || kebabCase(label)
  return (
    <div className={classNames("w-full px-3 mb-6 md:mb-0", className)}>
      <Label for={id}>{label}</Label>

      <textarea
        className={classNames(
          "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
          {
            "border-red-500": error,
          }
        )}
        id={id}
        name={id}
        type={type}
        cols="30"
        rows="10"
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  )
}

export default TextArea
