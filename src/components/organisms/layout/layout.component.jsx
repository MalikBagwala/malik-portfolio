import React from "react"
import classNames from "../../../utils/classNames"
import SEO from "../../../utils/seo"
import Footer from "../../molecules/footer/footer.component"
import Sidebar from "../../templates/sidebar/sidebar.component"
import { container } from "./layout.module.css"
const Layout = ({ title, children }) => {
  return (
    <section className="h-screen">
      <SEO title={title} />
      <Sidebar />
      <div className={classNames("min-h-screen bg-gray-100", container)}>
        <div>{children}</div>
        <Footer />
      </div>
    </section>
  )
}

export default Layout
