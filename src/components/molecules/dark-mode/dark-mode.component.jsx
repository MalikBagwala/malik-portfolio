import { ThemeToggler } from "gatsby-plugin-dark-mode"
import React from "react"
import classNames from "../../../utils/classNames"
import Icon from "../../atoms/icon/icon.component"
const DarkModeToggle = () => {
  return (
    <div className="lg:mt-5 cursor-pointer hover:opacity-75">
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <Icon
            name={theme === "dark" ? "sun" : "moon"}
            onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
            className={classNames("fill-current h-6", {
              "text-white": theme === "dark",
              "text-gray-900": theme === "light",
            })}
          />
        )}
      </ThemeToggler>
    </div>
  )
}

export default DarkModeToggle
