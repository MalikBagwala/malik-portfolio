import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Work from "../components/Work"
import "../css/style.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Work />
  </Layout>
)

export default IndexPage
