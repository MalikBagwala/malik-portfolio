import React from "react"
import styled from "styled-components"
import { WorkContainer } from "./Work"
import SectionHeader from "./SectionHeader"
import { useStaticQuery, graphql } from "gatsby"
import SkillCard from "./skills/SkillCard"

const Div = styled.div`
  /* ... */
`
const SkillsContainer = styled(WorkContainer)``

const Grid = styled.div`
  margin-top: 3rem;
  display: grid;
  width: 100%;
  row-gap: 30px;
  column-gap: 30px;
  grid-template-columns: repeat(5, 1fr);
  @media ${(props) => props.theme.mediaQueries.large} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${(props) => props.theme.mediaQueries.medium} {
    grid-template-columns: repeat(2, 1fr);
  }
  /* @media ${(props) => props.theme.mediaQueries.small} {
    grid-template-columns: repeat(1, 1fr);
  } */
`

const Skills = () => {
  const skillsData = useStaticQuery(graphql`
    {
      allContentfulTechnology {
        edges {
          node {
            contentful_id
            color
            name
            rating
            link
            logo {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  const skills = skillsData && skillsData.allContentfulTechnology.edges

  return (
    <Div id="skills">
      <SkillsContainer>
        <SectionHeader>Skills</SectionHeader>
        <Grid>
          {skills &&
            skills.map(({ node }) => {
              return <SkillCard key={node.contentful_id} skill={node} />
            })}
        </Grid>
      </SkillsContainer>
    </Div>
  )
}

export default Skills
