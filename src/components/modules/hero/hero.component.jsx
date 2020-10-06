import React from "react"
import classNames from "../../../utils/classNames"
import Icon from "../../atoms/icon/icon.component"
import Section from "../../templates/section/section.component"
import { base, chevron } from "./hero.module.css"
import { navigate } from "gatsby"
const Hero = () => {
  return (
    <Section
      hero
      className={classNames("h-screen bg-gray-900 relative", base)}
      title="Home"
      subtitle="portfolio"
    >
      <Icon
        onClick={(e) => {
          console.log("Clicked")
          navigate("/#about")
        }}
        className={classNames(
          "text-white h-6 absolute animate-bounce cursor-pointer",
          chevron
        )}
        name="chevron-double-down"
      />
    </Section>
  )
}

export default Hero
