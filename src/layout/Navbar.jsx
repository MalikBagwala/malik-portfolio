import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"
import { Container } from "../utils/styledComponents"
import { useTrail, animated, config } from "react-spring"
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
  display: flex;
`
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
  @media ${props => props.theme.mediaQueries.medium} {
    bottom: 0;
    height: 75px;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.6),
      0 1px 3px 1px rgba(60, 64, 67, 0.3);
    backdrop-filter: blur(15px);
    background: rgba(255, 255, 255, 0.8);
    ${StyledLink} {
      font-size: 1.1rem;
    }
  }
  @media ${props => props.theme.mediaQueries.small} {
    ${StyledLink} {
      font-size: 0.95rem;
    }
  }
`
const sections = [
  {
    to: "about",
    text: "about",
  },
  {
    to: "work",
    text: "work",
  },
  {
    to: "contact",
    text: "contact",
  },
]
const Navbar = () => {
  const navItemsTrail = useTrail(sections.length, {
    config: config.wobbly,
    delay: 300,
    opacity: 1,
    transform: "translateY(0px)",
    from: {
      opacity: 0,
      transform: "translateY(-20px)",
      display: "flex",
      cursor: "pointer",
    },
  })
  return (
    <Nav>
      <NavContainer>
        <StyledLink to="/">Malik</StyledLink>
        <Links>
          {navItemsTrail.map((propStyles, index) => (
            <animated.span key={sections.to} style={propStyles}>
              <StyledLink
                to={sections[index].to}
                activeClass="link-active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {sections[index].text}
              </StyledLink>
            </animated.span>
          ))}
        </Links>
      </NavContainer>
    </Nav>
  )
}

export default Navbar
