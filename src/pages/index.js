import React from "react"
import About from "../components/About"
import Hero from "../components/Hero"
import Layout from "../layout/layout"
import Work from "../components/Work"
import "../css/style.css"
import Skills from "../components/Skills"
const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Skills />
    <Work />
  </Layout>
)

export default IndexPage
