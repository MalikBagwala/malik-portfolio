import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { get } from "lodash"
import React from "react"
import styled from "styled-components"
import ContentMarkdownNote from "../utils/contentful-markdown-note"
import ContentMarkdownWork from "../utils/contentful-markdown-work"
import ButtonLink from "./ButtonLink"
import ElevatedImage from "./ElevatedImage"


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

const ButtonGroup = styled.div`
  margin-top: 2rem;
`

const WorkCard = ({ live, source, title, thumbnail, description, note }) => {
  const src = thumbnail && get(thumbnail, "fixed.src")
  console.log(note)
  return (
    <WorkCardWrapper>
      <ElevatedImage src={src} />
      <Content>
        <H1>{title}</H1>
        <ContentMarkdownWork content={description.json} />
        {note && <ContentMarkdownNote content={note.json} />}
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
