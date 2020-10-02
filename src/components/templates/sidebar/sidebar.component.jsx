import React from "react"
import classNames from "../../../utils/classNames"
import { copyright, links, sidebar, title, nav } from "./sidebar.module.css"
import Icon from "../../atoms/icon/icon.component"
import NavItem from "../../molecules/nav-item/nav-item.component"
import Avatar from "../../molecules/avatar/avatar.component"
const Sidebar = () => {
  return (
    <header
      className={classNames(
        "bg-white shadow-lg py-12 px-8 h-full fixed flex flex-col justify-between top-0 left-0",
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
        <span className="uppercase font-display tracking-wider">Malik</span>
        <span className="text-base text-gray-600 tracking-wide">
          front-end developer
        </span>
      </div>

      <nav className={classNames(nav)}>
        <ul>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Work</NavItem>
          <NavItem>Skills</NavItem>
          <NavItem>Contact</NavItem>
        </ul>
      </nav>
      <div
        className={classNames(
          "flex flex-col justify-center align-baseline",
          copyright
        )}
      >
        <div className={classNames("flex justify-center mb-4", links)}>
          <Icon name="gitlab" className="h-4" />
          <Icon name="github" className="h-4 ml-3" />
          <Icon name="linkedln" className="h-4 ml-3" />
          <Icon name="globe" className="h-4 ml-3" />
        </div>
        <p className="text-sm text-gray-600 text-center">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-gray-900">Malik Bagwala</span>
        </p>
      </div>
    </header>
  )
}

export default Sidebar
