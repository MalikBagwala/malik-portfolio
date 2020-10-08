import React from "react"
import classNames from "../../../utils/classNames"
import Social from "../social/social.component"
const Footer = () => {
  return (
    <footer
      className={classNames(
        "bg-gray-900 text-white px-12 py-16 flex justify-between items-center"
      )}
    >
      <div className="text-xs text-white">
        &copy; {new Date().getFullYear()} MALIK. all rights reserved
      </div>
      <h1 className="text-4xl uppercase">Malik</h1>
      <Social />
    </footer>
  )
}

export default Footer
