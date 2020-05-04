import { faLink } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import ButtonLink from "./ButtonLink"
import { StyledIcon } from "./WorkCard"
const Resume = () => {
  return (
    <ButtonLink
      target="__blank"
      href={`${window.location.href}resume.pdf`}
      card={false}
      purple={true}
    >
      <StyledIcon icon={faLink} /> Resume
    </ButtonLink>
  )
}

export default Resume
