import React from "react"
import classNames from "../../../utils/classNames"
import { base } from "./footer.module.css"
const Footer = () => {
  return (
    <footer className={classNames("bg-gray-200 text-gray-800 px-6 py-4", base)}>
      Designed and Developed by Malik Bagwala {new Date().getFullYear()}
    </footer>
  )
}

export default Footer
