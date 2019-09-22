import React from "react"
import About from "../components/About"
import Hero from "../components/Hero"
import Layout from "../layout/layout"
import Work from "../components/Work"
import "../css/style.css"
const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Work />
  </Layout>
)

export default IndexPage
