import React from "react"
import classNames from "../../../utils/classNames"
import Icon from "../../atoms/icon/icon.component"
import Section from "../../templates/section/section.component"
import { base, chevron, heading } from "./hero.module.css"
import { navigate } from "gatsby"
const Hero = () => {
  return (
    <Section
      hero
      className={classNames(
        "h-screen bg-gray-900 relative flex items-center justify-center dark:border-b border-gray-800",
        base
      )}
      title="Home"
      alternatingBackground={false}
      subtitle="portfolio"
    >
      <h1 className={heading}>Malik Bagwala</h1>
      <Icon
        onClick={(e) => {
          console.log("Clicked")
          navigate("/#about")
        }}
        className={classNames(
          "text-yellow-300 h-6 absolute animate-bounce cursor-pointer",
          chevron
        )}
        name="chevron-double-down"
      />
    </Section>
  )
}

export default Hero
