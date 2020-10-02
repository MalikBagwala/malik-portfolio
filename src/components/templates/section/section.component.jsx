import React from "react"
import classNames from "../../../utils/classNames"
import { base } from "./section.module.css"
const Section = ({ children, title, subtitle }) => {
  return (
    <section className={classNames("bg-gray-100 px-6 py-12", base)}>
      <header className="mb-8">
        <span className="uppercase text-xs text-gray-600">{subtitle}</span>
        <h6 className="uppercase text-2xl text-gray-800">{title}</h6>
      </header>
      {children}
    </section>
  )
}

export default Section
