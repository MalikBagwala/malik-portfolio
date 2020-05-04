import { faLink } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import ButtonLink from "./ButtonLink"
import { StyledIcon } from "./WorkCard"
import { useStaticQuery, graphql } from "gatsby"
const Resume = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)
  const url = site.siteMetadata.siteUrl
  return (
    <ButtonLink
      target="__blank"
      href={`${window ? window.location.href : `${url}/`}resume.pdf`}
      card={false}
      purple={true}
    >
      <StyledIcon icon={faLink} /> Resume
    </ButtonLink>
  )
}

export default Resume
