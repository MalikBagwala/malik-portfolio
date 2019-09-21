import React from "react"
import Button from "./Button"
import Mail from "../images/gmail.png"
import Github from "../images/github.png"
import styled from "styled-components"

const StyledButton = styled(Button)`
  margin-top: 1rem;
  padding: 1rem 2.1rem;
`

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
        <img src={Mail} alt="Gmail" width={32} height={32} />
        <img src={Github} alt="Github" width={32} height={32} />
      </div>
    </footer>
  )
}

export default Footer
