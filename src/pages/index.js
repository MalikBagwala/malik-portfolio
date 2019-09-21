import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Work from "../components/Work"
import "../scss/main.scss"
import About from "../components/About"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Work />
  </Layout>
)

export default IndexPage
