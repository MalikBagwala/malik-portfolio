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
      <div className="grid grid-cols-6 gap-4">
        {data &&
          data.allContentfulTechnology.edges.map(({ node }) => (
            <div className="flex items-center justify-center flex-col rounded-lg bg-gray-100 p-4 h-full">
              <img
                src={node.logo.file.url}
                height="35"
                width="35"
                alt={node.name}
              />
              <span className="mt-2">{node.name}</span>
            </div>
          ))}
      </div>
    </Section>
  )
}

export default Skills
