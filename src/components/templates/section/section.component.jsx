import React from "react"
import classNames from "../../../utils/classNames"
const Section = ({
  children,
  hero,
  alternatingBackground = true,
  title,
  subtitle,
  className,
}) => {
  return (
    <section
      id={title.toLowerCase()}
      className={classNames(
        "px-6 py-12",
        { "bg-white odd:bg-gray-100": alternatingBackground },
        className
      )}
    >
      {!hero && (
        <header className="mb-8">
          <span className="uppercase text-xs text-gray-600">{subtitle}</span>
          <h6 className="uppercase font-display text-2xl text-gray-800">
            {title}
          </h6>
        </header>
      )}
      {children}
    </section>
  )
}

export default Section
