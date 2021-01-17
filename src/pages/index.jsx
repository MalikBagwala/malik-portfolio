import React from "react"
import About from "../components/modules/about/about.component"
import Blog from "../components/modules/blog/blog.component"
import Contact from "../components/modules/contact/contact.component"
import Hero from "../components/modules/hero/hero.component"
import Porfolio from "../components/modules/portfolio/portfolio.component"
// import Skills from "../components/modules/skills/skills.component"
import Layout from "../components/organisms/layout/layout.component"
// Random Comment
const IndexPage = () => {
  return (
    <Layout title="Home Page">
      <Hero />
      <About />
      <Porfolio />
      <Blog />
      <Contact />
    </Layout>
  )
}

export default IndexPage
