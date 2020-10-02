import React from "react"
import classNames from "../../../utils/classNames"
import { copyright, links, sidebar, title } from "./sidebar.module.css"
import Icon from "../../atoms/icon/icon.component"
const Sidebar = () => {
  return (
    <header
      className={classNames(
        "bg-white border-r-2 py-12 px-8 border-gray-200 h-full fixed flex flex-col justify-between top-0 left-0 overflow-y-hidden",
        sidebar
      )}
    >
      <div
        className={classNames(
          "text-4xl font-display flex flex-col text-center",
          title
        )}
      >
        <span className="uppercase tracking-wider">Malik</span>
        <span className="text-base text-gray-600 tracking-wide">
          front-end developer
        </span>
      </div>
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
