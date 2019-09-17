import { graphql, useStaticQuery } from "gatsby"
import _ from "lodash"
import React from "react"
import WorkCard from "./WorkCard"
const Work = () => {
  const workData = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              live
              source
              technologies
              title
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 800, maxHeight: 800, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            html
          }
        }
      }
    }
  `)
  const data = _.get(workData, "allMarkdownRemark.edges")
  const works = _.map(data, data => data.node)
  return (
    <div id="work" className="section-area">
      <div className="container">
        <div className="title-content">
          <h2 className="title">Work</h2>
          <hr className="title-ruling" />
        </div>
        {works.map(work => {
          return (
            <WorkCard key={work.id} frontmatter={work.frontmatter}>
              {work.html}
            </WorkCard>
          )
        })}
      </div>
    </div>
  )
}

export default Work
