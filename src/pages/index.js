import { Link } from "gatsby"
import React from "react"
import Image from "../components/image"
import SEO from "../components/seo"
import "../css/style.css"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Work from "../components/Work"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Work />
  </Layout>
)

export default IndexPage
