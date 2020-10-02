import React from "react"
import { graphql } from "gatsby"
import Layout from "../../organisms/layout/layout.component"
const WorkDetail = ({ data }) => {
  return (
    <Layout>
      <h1>{data?.contentfulWork?.slug}</h1>
    </Layout>
  )
}

export default WorkDetail

export const query = graphql`
  query contentfulWork($slug: String) {
    contentfulWork(slug: { eq: $slug }) {
      id
      contentful_id
      slug
      description {
        id
      }
    }
  }
`
