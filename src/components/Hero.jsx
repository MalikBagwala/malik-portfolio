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
`
const Flex = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.fonts.primary}, sans-serif;
`
const TextContainer = styled.div`
  width: 60%;
  height: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
`

const H1 = styled.h1`
  font-size: 8rem;
  font-weight: lighter;
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
