import React, { useEffect } from "react"
import About from "../components/modules/about/about.component"
import Contact from "../components/modules/contact/contact.component"
import Porfolio from "../components/modules/portfolio/portfolio.component"
import Layout from "../components/organisms/layout/layout.component"
// Random Comment
const IndexPage = () => {
  // FIX FOR VH ON MOBILE
  const changeVhVariable = () => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = typeof window !== "undefined" && window.innerHeight * 0.01
    // Then we set the value in the --vh custom property to the root of the document
    typeof document !== "undefined" &&
      document.documentElement.style.setProperty("--vh", `${vh}px`)
  }

  // Run the function to change the VH variable when the browser is resized
  useEffect(() => {
    changeVhVariable()
    window.addEventListener("resize", changeVhVariable)
    return () => window.removeEventListener("resize", changeVhVariable)
  }, [])
  return (
    <Layout title="Home Page">
      <About />
      <Porfolio />
      <Contact />
    </Layout>
  )
}

export default IndexPage
