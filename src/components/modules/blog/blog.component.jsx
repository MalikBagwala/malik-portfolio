import { useStaticQuery } from "gatsby"
import React from "react"
import Section from "../../templates/section/section.component"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query allContentfulBlogPost {
      allContentfulBlogPost {
        edges {
          node {
            contentful_id
            publishedAt(formatString: "MMM Do YYYY")
            title
            slug
          }
        }
      }
    }
  `)

  console.log(data)
  return <Section title="Blog" subtitle="publications" />
}

export default Blog
