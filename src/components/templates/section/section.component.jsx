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
        {
          "bg-white dark:bg-gray-900 odd:bg-gray-100 dark:odd:bg-gray-900": alternatingBackground,
        },
        className
      )}
    >
      {!hero && (
        <div className="mb-8">
          <span className="uppercase text-xs text-gray-700 dark:text-gray-100">
            {subtitle}
          </span>
          <h1 className="uppercase font-display text-2xl text-gray-800 dark:text-gray-200">
            {title}
          </h1>
        </div>
      )}
      {children}
    </section>
  )
}

export default Section
