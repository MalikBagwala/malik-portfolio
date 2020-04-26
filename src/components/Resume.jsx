import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ButtonLink from "./ButtonLink"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { StyledIcon } from "./WorkCard"
const Resume = () => {
  const res = useStaticQuery(graphql`
    {
      contentfulFiles(file: { description: { eq: "maliks-resume" } }) {
        contentful_id
        file {
          file {
            url
          }
        }
      }
    }
  `)
  const link = res && res.contentfulFiles.file.file.url
  return (
    <ButtonLink href={link} card={false} purple={true}>
      <StyledIcon icon={faLink} /> Resume
    </ButtonLink>
  )
}

export default Resume
