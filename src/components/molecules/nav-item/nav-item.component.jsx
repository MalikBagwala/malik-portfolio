import React from "react"
import classNames from "../../../utils/classNames"
import { base } from "./nav-item.module.css"
import { navigate } from "gatsby"
const NavItem = ({ children, id }) => {
  return (
    <li
      onClick={(e) => {
        navigate(id ? `/#${id}` : "/")
      }}
      className={classNames(
        "text-gray-700 cursor-pointer hover:text-gray-900 font-semibold",
        base
      )}
    >
      {children}
    </li>
  )
}

export default NavItem
