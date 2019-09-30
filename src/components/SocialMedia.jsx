import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { get } from "lodash"
const A = styled.a`
  background: var(--gray-100);
  margin: 0 0.5rem;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  border: 1px solid var(--gray-400);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-out;
  @media ${props => props.theme.mediaQueries.medium} {
    height: 36px;
    width: 36px;
  }

  &:hover {
    border: 1px solid var(--gray-300);
    background: var(--gray-800);
  }
`
const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--gray-800);
  transition: all 0.2s ease-out;
  font-size: 1.5rem;
  ${A}:hover & {
    color: white;
  }
  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 1.3rem;
  }
  @media ${props => props.theme.mediaQueries.small} {
    font-size: 1.2rem;
  }
  @media ${props => props.theme.mediaQueries.smaller} {
    font-size: 1rem;
  }
`
const SocialMedia = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          socialMedia {
            mail
            github
            gitlab
            linkedin
          }
        }
      }
    }
  `)
  const { mail, github, gitlab, linkedin } = get(
    data,
    "site.siteMetadata.socialMedia",
    {}
  )
  return (
    <>
      <A href={`mailto:${mail}`} aria-label="Contact Me Via Mail">
        <StyledIcon icon={faEnvelope} />
      </A>
      <A href={github} aria-label="Take a look at my github portfolio">
        <StyledIcon icon={faGithub} />
      </A>
      <A href={gitlab} aria-label="Take a look at my gitlab portfolio">
        <StyledIcon icon={faGitlab} />
      </A>
      <A href={linkedin} aria-label="Connect with me on linkedin">
        <StyledIcon icon={faLinkedin} />
      </A>
    </>
  )
}

export default SocialMedia
