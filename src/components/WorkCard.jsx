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

const WorkCardWrapper = styled.div`
  margin: 3.5rem 0px;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
`

const Content = styled.div`
  padding: 3rem;
  width: 50%;
`

const H1 = styled.h1`
  text-transform: uppercase;
  font-weight: lighter;
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--gray-800);
`

const P = styled.p`
  color: var(--gray-500);
  margin-top: 1.4rem;
  line-height: 1.7;
  font-size: 1.3rem;
`

const ButtonGroup = styled.div`
  margin-top: 2rem;
`

const WorkCard = ({ live, source, title, thumbnail, description }) => {
  const src = thumbnail && get(thumbnail, "fixed.src")
  return (
    <WorkCardWrapper>
      <ElevatedImage src={src} />
      <Content>
        <H1>{title}</H1>
        <P>{documentToReactComponents(description.json)}</P>
        <ButtonGroup>
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
        </ButtonGroup>
      </Content>
    </WorkCardWrapper>
  )
}

export default WorkCard
