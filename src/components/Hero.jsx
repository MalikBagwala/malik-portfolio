import React from "react"
import Button from "./Button"
import ProfileImage from "./profileImage"
import AnimatedIcon from "./AnimatedIcon"
import styled from "styled-components"
import { Container, TextHighlight } from "../utils/styledComponents"
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

const H1 = styled.h1`
  font-size: 8rem;
  font-weight: lighter;
  @media ${props => props.theme.mediaQueries.larger} {
    font-size: 7rem;
  }
  @media ${props => props.theme.mediaQueries.large} {
    font-size: 6rem;
  }
  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 5rem;
  }
`

const P = styled.p`
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
  return (
    <Background>
      <HeroContainer>
        <Flex>
          <TextContainer>
            <H1>
              Hey <AnimatedIcon />
              <br />
              I'm
              <TextHighlight bold> Malik</TextHighlight>
            </H1>
            <P>
              A <TextHighlight>Designgineer</TextHighlight>
            </P>
            <AboutMe>About Me</AboutMe>
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
