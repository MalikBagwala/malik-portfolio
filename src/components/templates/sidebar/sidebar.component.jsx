import React from "react"
import classNames from "../../../utils/classNames"
import Avatar from "../../molecules/avatar/avatar.component"
import DarkModeToggle from "../../molecules/dark-mode/dark-mode.component"
import NavItem from "../../molecules/nav-item/nav-item.component"
import Social from "../../molecules/social/social.component"
import { copyright, nav, sidebar, title } from "./sidebar.module.css"
const Sidebar = () => {
  return (
    <header
      className={classNames(
        "bg-white dark:bg-gray-900 shadow-lg dark:shadow-none dark:border-r dark:border-gray-800",
        "w-full lg:w-2.8/12 h-8 lg:h-full fixed flex flex-col justify-between bottom-0 lg:top-0 left-0 z-50 py-12 px-8",
        sidebar
      )}
    >
      <div
        className={classNames(
          "text-4xl flex flex-col text-center items-center justify-center",
          title
        )}
      >
        <Avatar />
        <span className="uppercase font-display tracking-wider dark:text-white">
          Malik
        </span>
        <span className="text-base text-gray-800 dark:text-gray-200 tracking-wide">
          front-end developer
        </span>
        <DarkModeToggle />
      </div>

      <nav className={classNames(nav)}>
        <ul>
          <NavItem>Home</NavItem>
          <NavItem id="about">About</NavItem>
          <NavItem id="work">Work</NavItem>
          {/* <NavItem id="skills">Skills</NavItem> */}
          <NavItem id="contact">Contact</NavItem>
        </ul>
      </nav>
      <div
        className={classNames(
          "flex flex-col justify-center align-baseline",
          copyright
        )}
      >
        <Social />
        <p className="text-sm text-gray-800 dark:text-gray-700 text-center hidden lg:block">
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
