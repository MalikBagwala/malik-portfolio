import React from "react"
import classNames from "../../../utils/classNames"
import { base } from "./nav-item.module.css"
const NavItem = ({ children }) => {
  return (
    <li
      className={classNames(
        "text-gray-600 cursor-pointer hover:text-gray-800 font-semibold",
        base
      )}
    >
      {children}
    </li>
  )
}

export default NavItem
