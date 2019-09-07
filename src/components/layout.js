import React from "react"
import SEO from "./seo"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <SEO title="Home" />
      {children}
      <Footer />
    </>
  )
}

export default Layout
