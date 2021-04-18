import React from "react"
import classNames from "../../utils/classNames"
import Avatar from "../molecules/Avatar"
import DarkModeToggle from "../molecules/DarkMode"
import Social from "../molecules/social/social.component"
import Navigation from "../organisms/Navigation"
const Sidebar = () => {
  return (
    <header
      className={classNames(
        "bg-white dark:bg-gray-800 lg:dark:bg-gray-900 shadow-lg dark:shadow-none dark:border-r dark:border-gray-800",
        "w-full lg:w-2.8/12 lg:h-full fixed lg:flex flex-col justify-between bottom-0 lg:top-0 left-0 z-50 p-4 lg:py-12 lg:px-8"
      )}
    >
      <div className="flex justify-center flex-col items-center">
        <div
          className={classNames(
            "text-4xl hidden lg:flex flex-col text-center items-center justify-center"
          )}
        >
          <Avatar />
          <span className="inline uppercase font-display tracking-wider dark:text-white">
            Malik
          </span>
          <span className="inline text-base text-gray-800 dark:text-gray-200 tracking-wide">
            front-end developer
          </span>
        </div>
        <DarkModeToggle />
      </div>
      <Navigation />
      <div
        className={classNames("flex flex-col justify-center align-baseline")}
      >
        <Social className="hidden lg:flex" />
        <p className="text-sm text-gray-800 dark:text-gray-700 mt-3 text-center hidden lg:block">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-gray-900 dark:text-gray-600">
            Malik Bagwala
          </span>
        </p>
      </div>
    </header>
  )
}

export default Sidebar
