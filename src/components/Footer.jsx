import React from "react"
import styled from "styled-components"
import Button from "./Button"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
// import ButtonLink from "./ButtonLink"
const StyledButton = styled(Button)`
  margin-top: 1rem;
  padding: 1rem 2.1rem;
`

const H1 = styled.h1`
  margin-bottom: 1.3rem;
  color: var(--gray-800);
`

const FooterWrapper = styled.footer`
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .social {
    margin: 1rem 0;
  }
  img {
    margin: 0 0.9rem;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`

const P = styled.p`
  font-size: 1.4rem;
  color: var(--gray-500);
`

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <H1>Let's Work Together</H1>
      <P>
        I don't work for people, I collaborate with them. Sound like you? Let’s
        talk!
      </P>
      <StyledButton center purple>
        Contact Me
      </StyledButton>
      <div className="social"></div>
    </FooterWrapper>
  )
}

export default Footer
