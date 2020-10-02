import React from "react"
import classNames from "../../../utils/classNames"
import { base } from "./footer.module.css"
import { links } from "../../templates/sidebar/sidebar.module.css"
import Icon from "../../atoms/icon/icon.component"
const Footer = () => {
  return (
    <footer
      className={classNames(
        "bg-gray-900 text-white px-12 py-16 flex justify-between items-center",
        base
      )}
    >
      <div className="text-xs text-white">
        &copy; {new Date().getFullYear()} MALIK. all rights reserved
      </div>
      <h1 className="text-4xl uppercase">Malik</h1>
      <div className={classNames("flex justify-center mb-4", links)}>
        <Icon name="gitlab" className="fill-current text-white h-4" />
        <Icon name="github" className="fill-current text-white h-4 ml-3" />
        <Icon name="linkedln" className="fill-current text-white h-4 ml-3" />
        <Icon name="globe" className="fill-current text-white h-4 ml-3" />
      </div>
    </footer>
  )
}

export default Footer
