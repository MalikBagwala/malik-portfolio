import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Work from "../../organisms/work/work.component"
import Section from "../../templates/section/section.component"
const Porfolio = () => {
  const data = useStaticQuery(graphql`
    query allContentfulWork {
      allContentfulWork {
        edges {
          node {
            contentful_id
            slug
            title
            description {
              id
            }
            live
            source
            thumbnail {
              contentful_id
              fluid(maxWidth: 800, quality: 80) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Section title="Work" subtitle="portfolio">
      <div className="grid grid-cols-3 gap-6">
        {data.allContentfulWork.edges.map((edge) => {
          const work = edge.node
          return <Work work={work} key={work.contentful_id} />
        })}
      </div>
    </Section>
  )
}

export default Porfolio
