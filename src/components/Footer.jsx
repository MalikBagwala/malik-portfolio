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
// const SocialMediaButton = styled.button`
//   height: 3.3rem;
//   width: 3.3rem;
//   border-radius: 50%;
//   background: var(--purple-color);
// `
// const StyledIcon = styled(FontAwesomeIcon)`
//   transition: all 0.3s ease-out;
//   ${SocialMediaButton}:hover {
//     transform: rotate(360deg);
//   }
// `

// const StyledLink = styled.a``

const Footer = () => {
  return (
    <footer id="contact">
      <h1 className="contact">Let's Work Together</h1>
      <p>
        I don't work for people, I collaborate with them. Sound like you? Let’s
        talk!
      </p>
      <StyledButton center purple>
        Contact Me
      </StyledButton>
      <div className="social">
        {/* <StyledLink>
          <SocialMediaButton>
            <StyledIcon color="white" icon={faEnvelope} size="2x" />
          </SocialMediaButton>
        </StyledLink> */}
      </div>
    </footer>
  )
}

export default Footer
