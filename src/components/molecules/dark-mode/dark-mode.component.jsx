import ThemeToggler from "gatsby-plugin-dark-mode/ThemeToggler"
import React from "react"
import Icon from "../../atoms/icon/icon.component"

const DarkModeToggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        return (
          <div className="mt-5 cursor-pointer hover:opacity-75">
            {theme === "dark" ? (
              <Icon
                name="sun"
                onClick={() => toggleTheme("light")}
                className="fill-current h-6 text-white"
              />
            ) : (
              <Icon
                onClick={() => toggleTheme("dark")}
                name="moon"
                className="fill-current h-6 text-gray-900"
              />
            )}
          </div>
        )
      }}
    </ThemeToggler>
  )
}

export default DarkModeToggle
