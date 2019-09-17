import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  color: ${props => (props.brand ? "var(--gray-800)" : "var(--gray-500)")};
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.9rem;
`

const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="container">
        <StyledLink to="/" brand>
          Malik
        </StyledLink>
        <div className="links">
          <StyledLink to="#about">About</StyledLink>
          <StyledLink to="#work">Work</StyledLink>
          <StyledLink to="#contact">Contact</StyledLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
