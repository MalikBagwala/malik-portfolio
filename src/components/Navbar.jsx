import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import { Link } from "react-scroll"
const StyledLink = styled(Link)`
  color: var(--gray-800);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.9rem;
  cursor: pointer;
`
const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="container">
        <StyledLink to="/">Malik</StyledLink>
        <div className="links">
          <StyledLink
            to="about"
            activeClass="link-active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
          >
            About
          </StyledLink>
          <StyledLink
            to="work"
            activeClass="link-active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Work
          </StyledLink>
          <StyledLink
            to="contact"
            activeClass="link-active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </StyledLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
