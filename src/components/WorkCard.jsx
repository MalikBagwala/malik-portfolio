import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { get } from "lodash"
import React from "react"
import ButtonLink from "./ButtonLink"
import ElevatedImage from "./ElevatedImage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import styled from "styled-components"

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 3px;
`

const WorkCard = ({ live, source, title, thumbnail, description }) => {
  const src = thumbnail && get(thumbnail, "fixed.src")
  return (
    <div className="work-card">
      <ElevatedImage src={src} />
      <div className="content">
        <h3 className="heading">{title}</h3>
        <p className="card-text">
          {documentToReactComponents(description.json)}
        </p>
        <div className="buttons">
          <ButtonLink
            href={live}
            card={true}
            style={{ marginRight: 30 }}
            purple
          >
            <StyledIcon icon={faLink} /> Live
          </ButtonLink>
          <ButtonLink href={source} card={true} purple>
            <StyledIcon icon={faGithub} /> Source
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
