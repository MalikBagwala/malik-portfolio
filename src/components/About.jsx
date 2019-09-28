import React from "react"
import styled from "styled-components"
import { Container } from "../utils/styledComponents"
import Emoji from "./Emoji"
import SectionHeader from "./SectionHeader"

const Div = styled.div``
const AboutContainer = styled(Container)`
  padding: 6rem 0;
  @media ${props => props.theme.mediaQueries.large} {
    padding: 4.5rem 0;
  }
  @media ${props => props.theme.mediaQueries.medium} {
    padding: 3rem 0;
  }
  @media ${props => props.theme.mediaQueries.small} {
    padding: 2rem 0;
  }
`

const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  padding: 1rem 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media ${props => props.theme.mediaQueries.large} {
    padding: 1rem 5.5rem;
  }
  @media ${props => props.theme.mediaQueries.medium} {
    padding: 1rem 0;
  }
`
const P = styled.p`
  color: var(--gray-600);
  margin-top: 1.4rem;
  line-height: 1.7;
  font-size: 1.4rem;
  text-align: justify;

  @media ${props => props.theme.mediaQueries.medium} {
    text-align: left;
    margin-top: 1.5rem;
    font-size: 1.2rem;
    line-height: 1.7;
  }
`

const SkillStack = styled(P)`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  color: var(--purple-color);
  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 0.9rem;
    font-weight: 700;
  }
`
const Highlight = styled.span`
  font-weight: normal;
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--gray-800);
`

const About = () => {
  return (
    <Div id="about">
      <AboutContainer>
        <TitleContent>
          <SectionHeader>About</SectionHeader>
          <Content>
            <P>
              I'm Malik, a 21 year old self-taught developer specializing in
              <Highlight> front-end</Highlight> development. I have always been
              passionate about creating user-interfaces that speak, and are a
              pleasure to use, I like to tackle challenges and I am always open
              to collaboration. My love for web development exploded after my
              bachelor's degree in <Highlight>computer science</Highlight>. I
              like exploring newer and better software engineering paradigms and
              to be completly honest, I do get excited about new frameworks{" "}
              <Emoji>😆</Emoji>, So here are a few of my projects that are built
              using <Highlight>bleeding edge </Highlight>
              frameworks and technologies. My skill stack includes but is not
              limited to,
            </P>
            <SkillStack>
              react - redux - firebase - graphql - apollo - mongodb - nodejs -
              express -gatsby
            </SkillStack>
          </Content>
        </TitleContent>
      </AboutContainer>
    </Div>
  )
}

export default About
