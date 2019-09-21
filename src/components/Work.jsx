import { graphql, useStaticQuery } from "gatsby"
import _ from "lodash"
import React from "react"
import WorkCard from "./WorkCard"
const Work = () => {
  const workData = useStaticQuery(graphql`
    {
      allContentfulWork {
        edges {
          node {
            contentful_id
            title
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
  const handleScroll = e => {
    console.log(e)
  }
  console.log(data)
  return (
    <div id="work" className="section-area" onScroll={handleScroll}>
      <div className="container">
        <div className="title-content">
          <h2 className="title">Work</h2>
          <hr className="title-ruling" />
        </div>
        {works.map(work => {
          return <WorkCard key={work.contentful_id} {...work}></WorkCard>
        })}
      </div>
    </div>
  )
}

export default Work
