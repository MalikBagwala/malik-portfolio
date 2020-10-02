import React from "react"
import classNames from "../../../utils/classNames"
import { base } from "./section.module.css"
const Section = ({ children }) => {
  return (
    <section className={classNames("bg-gray-100 px-6 py-12", base)}>
      <header className="mb-8">
        <span className="uppercase text-xs text-gray-600">Information</span>
        <h6 className="uppercase text-2xl text-gray-800">About Me</h6>
      </header>
      {children}
    </section>
  )
}

export default Section
