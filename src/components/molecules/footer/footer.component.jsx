import React from "react"
import classNames from "../../../utils/classNames"
import Social from "../social/social.component"
const Footer = () => {
  return (
    <footer
      className={classNames(
        "bg-gray-100 dark:bg-gray-900 text-white px-12 pt-8 pb-20 lg:py-16 flex flex-col lg:flex-row justify-between items-center"
      )}
    >
      <div className="text-xs text-gray-900 dark:text-white order-1 lg:order-none">
        &copy; {new Date().getFullYear()} MALIK. all rights reserved
      </div>
      <h1 className="hidden text-4xl uppercase">Malik</h1>
      <Social className="my-4 lg:mb-4" />
    </footer>
  )
}

export default Footer
