import React from "react"
import Button from "./Button"
import ProfileImage from "./ProfileImage"
import AnimatedIcon from "./AnimatedIcon"
import styled from "styled-components"
import { Container, TextHighlight } from "../utils/styledComponents"
import { useSpring, animated, config } from "react-spring"
import ButtonLink from "./ButtonLink"
import { Link } from "react-scroll"
const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--purple-color);
`
const HeroContainer = styled(Container)`
  height: 100%;
  @media ${props => props.theme.mediaQueries.large} {
    width: 90%;
  }
`
const Flex = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.fonts.primary}, sans-serif;
  @media ${props => props.theme.mediaQueries.medium} {
    flex-direction: column-reverse;
    height: 100%;
  }
`
const TextContainer = styled.div`
  width: 60%;
  height: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  @media ${props => props.theme.mediaQueries.medium} {
    width: 100%;
  }
`

const H1 = styled(animated.h1)`
  font-size: 8rem;
  font-weight: lighter;
  @media ${props => props.theme.mediaQueries.larger} {
    font-size: 7rem;
  }
  @media ${props => props.theme.mediaQueries.large} {
    font-size: 6rem;
  }
  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 4rem;
  }
`

const P = styled(animated.p)`
  font-size: 1.8rem;
`

const AboutMe = styled(Button)`
  margin-top: 3rem;
`

const ProfileImageContainer = styled.div`
  height: 400px;
  width: 400px;
  @media ${props => props.theme.mediaQueries.medium} {
    display: none;
  }
`

const Hero = () => {
  const TitleSpring = useSpring({
    config: config.molasses,
    delay: 200,
    opacity: 1,
    transform: "translateX(0px)",
    from: { opacity: 0, transform: "translateX(40px)" },
  })

  // Sub title animation
  const SubTitleSpring = useSpring({
    config: config.stiff,
    delay: 300,
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(40px)" },
  })

  // Button animation
  const ButtonSpring = useSpring({
    config: config.stiff,
    delay: 600,
    opacity: 1,
    from: { opacity: 0 },
  })
  return (
    <Background>
      <HeroContainer>
        <Flex>
          <TextContainer>
            <H1 style={TitleSpring}>
              Hey <AnimatedIcon />
              <br />
              I'm
              <TextHighlight bold> Malik</TextHighlight>
            </H1>
            <P style={SubTitleSpring}>
              A <TextHighlight>Designgineer</TextHighlight>
            </P>
            <Link
              to="about"
              activeClass="link-active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <AboutMe style={ButtonSpring}>About Me</AboutMe>
            </Link>
          </TextContainer>
          <ProfileImageContainer>
            <ProfileImage />
          </ProfileImageContainer>
        </Flex>
      </HeroContainer>
    </Background>
  )
}

export default Hero
