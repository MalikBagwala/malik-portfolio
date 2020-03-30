import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"
import { Container } from "../utils/styledComponents"
import { useTrail, animated, config } from "react-spring"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faEnvelopeOpenText,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons"
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
  @media ${props => props.theme.mediaQueries.medium} {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
  }
`

const StyledLinkBrand = styled(StyledLink)`
  @media ${props => props.theme.mediaQueries.medium} {
    display: none;
  }
`
const Links = styled.div`
  display: flex;
  @media ${props => props.theme.mediaQueries.medium} {
    width: 100%;
    justify-content: space-around;
  }
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
    height: 55px;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.6),
      0 1px 3px 1px rgba(60, 64, 67, 0.3);

    background: rgba(255, 255, 255, 1);
  }
`

const LinkIcon = styled(FontAwesomeIcon)`
  display: none;
  @media ${props => props.theme.mediaQueries.medium} {
    display: block;
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }
`

const sections = [
  {
    to: "about",
    text: "about",
    icon: faHome,
  },
  {
    to: "work",
    text: "work",
    icon: faLaptopCode,
  },
  {
    to: "contact",
    text: "contact",
    icon: faEnvelopeOpenText,
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
        <StyledLinkBrand to="/">Malik</StyledLinkBrand>
        <Links>
          {navItemsTrail.map((propStyles, index) => (
            <animated.span key={sections[index].to} style={propStyles}>
              <StyledLink
                to={sections[index].to}
                activeClass="link-active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {sections[index].text}
                <LinkIcon icon={sections[index].icon} />
              </StyledLink>
            </animated.span>
          ))}
        </Links>
      </NavContainer>
    </Nav>
  )
}

export default Navbar
