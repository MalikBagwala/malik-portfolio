import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"
import { Container } from "../utils/styledComponents"
const Nav = styled.nav`
  position: fixed;
  height: 60px;
  background: rgba(255, 255, 255, 0.9);
  width: 100%;
  z-index: 10;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 1px 3px 1px rgba(60, 64, 67, 0.149);
  backdrop-filter: blur(10px);
  a {
    margin: 0px 0.5rem;
    transition: color 0.2s ease-in;
    &:hover {
      color: var(--purple-color);
    }
  }
`
const NavContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledLink = styled(Link)`
  color: var(--gray-800);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.9rem;
  cursor: pointer;
`
const Links = styled.div`
  /* ... */
`

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <StyledLink to="/">Malik</StyledLink>
        <Links>
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
        </Links>
      </NavContainer>
    </Nav>
  )
}

export default Navbar
