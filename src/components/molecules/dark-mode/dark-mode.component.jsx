import React from "react"
import useDarkMode from "use-dark-mode"
import classNames from "../../../utils/classNames"
import Icon from "../../atoms/icon/icon.component"

const DarkModeToggle = () => {
  const { value, toggle } = useDarkMode(false, {
    classNameDark: "dark",
    classNameLight: "light",
  })

  return (
    <div className="lg:mt-5 cursor-pointer hover:opacity-75">
      <Icon
        name={value ? "sun" : "moon"}
        onClick={toggle}
        className={classNames("fill-current h-6", {
          "text-white": value,
          "text-gray-900": !value,
        })}
      />
    </div>
  )
}

export default DarkModeToggle
