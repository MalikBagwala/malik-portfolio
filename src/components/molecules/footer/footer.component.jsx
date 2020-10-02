import React from "react"
import classNames from "../../../utils/classNames"
import { base } from "./footer.module.css"
const Footer = () => {
  return (
    <footer
      className={classNames(
        "bg-gray-900 text-white px-12 py-20 flex justify-between",
        base
      )}
    >
      <div className="text-xs text-white">
        &copy; {new Date().getFullYear()} MALIK. all rights reserved
      </div>
      <h1 className="text-3xl">Malik</h1>
    </footer>
  )
}

export default Footer
