import { graphql, useStaticQuery } from "gatsby"
import _ from "lodash"
import React from "react"
import WorkCard from "./WorkCard"
import SectionHeader from "./SectionHeader"
import styled from "styled-components"
import { Container } from "../utils/styledComponents"

const WorkWrapper = styled.div`
  background: var(--gray-100);
  .container {
    padding: 6rem 0;
  }
`
const WorkContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 6rem 0;
`

const Work = () => {
  const workData = useStaticQuery(graphql`
    {
      allContentfulWork {
        edges {
          node {
            contentful_id
            title
            note {
              json
            }
            description {
              json
            }
            live
            source
            thumbnail {
              contentful_id
              fixed(height: 500, quality: 100, toFormat: WEBP) {
                src
              }
            }
          }
        }
      }
    }
  `)
  const data = _.get(workData, "allContentfulWork.edges")
  const works = _.map(data, data => data.node)
  return (
    <WorkWrapper id="work">
      <WorkContainer>
        <SectionHeader>Work</SectionHeader>
        {works.map(work => {
          return <WorkCard key={work.contentful_id} {...work}></WorkCard>
        })}
      </WorkContainer>
    </WorkWrapper>
  )
}

export default Work
