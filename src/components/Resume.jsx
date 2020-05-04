import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ButtonLink from "./ButtonLink"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { StyledIcon } from "./WorkCard"
const Resume = () => {
  return (
    <ButtonLink
      target="__blank"
      href="https://github.com/MalikBagwala/creative-malik-portfolio/blob/master/assets/resume.pdf"
      card={false}
      purple={true}
    >
      <StyledIcon icon={faLink} /> Resume
    </ButtonLink>
  )
}

export default Resume
