import React from "react"
import classNames from "../../../utils/classNames"
import { sidebar } from "./sidebar.module.css"
const Sidebar = () => {
  return (
    <header
      className={classNames(
        "bg-white border-r-2 p-4 border-gray-200 h-full fixed",
        sidebar
      )}
    >
      <h1 className="text-6xl font-display text-gray-700"> Hey guys</h1>
    </header>
  )
}

export default Sidebar
