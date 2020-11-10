import { navigate } from "gatsby"
import React from "react"
import useDarkMode from "use-dark-mode"
import classNames from "../../../utils/classNames"
import Icon from "../../atoms/icon/icon.component"
import Section from "../../templates/section/section.component"
import { base, chevron } from "./hero.module.css"

const Hero = () => {
  const { value } = useDarkMode()
  return (
    <Section
      hero
      className={classNames(
        "h-screen bg-gray-100 dark:bg-gray-900 relative flex items-center justify-center dark:border-b border-gray-800",
        base
      )}
      title="Home"
      alternatingBackground={false}
      subtitle="portfolio"
    >
      <h1
        className={classNames("font-bold text-6xl", {
          "text-yellow-300": value,
          "text-yellow-800": !value,
        })}
      >
        Malik Bagwala
      </h1>
      <Icon
        onClick={(e) => navigate("/#about")}
        className={classNames(
          "text-yellow-800 dark:text-yellow-300 h-6 absolute animate-bounce cursor-pointer",
          chevron
        )}
        name="chevron-double-down"
      />
    </Section>
  )
}

export default Hero
