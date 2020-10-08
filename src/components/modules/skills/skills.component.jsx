import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Section from "../../templates/section/section.component"

const Skills = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulTechnology {
        edges {
          node {
            id
            rating
            name
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

  return (
    <Section white title="Skills" subtitle="tech stack">
      <div className="flex flex-wrap">
        {data &&
          data.allContentfulTechnology.edges.map(({ node }) => {
            console.log(node)
            return (
              <div className="flex items-center justify-center flex-col rounded-md shadow p-4 h-32 w-32">
                <img
                  src={node.logo.file.url}
                  height="35"
                  width="35"
                  alt={node.name}
                />
                {node.name}
              </div>
            )
          })}
      </div>
    </Section>
  )
}

export default Skills
