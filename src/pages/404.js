import React from "react"
import Button from "../components/atoms/button/button.component"
import Icon from "../components/atoms/icon/icon.component"
import SEO from "../utils/seo"
import { navigate } from "gatsby"
const NotFoundPage = () => (
  <div className="h-screen flex justify-center items-center w-full flex-col">
    <SEO title="404: Not found" />
    <h1 className="text-7xl font-display font-bold text-gray-800">404</h1>
    <p className="text-lg">Sadness. you just hit a wrong route</p>
    <Button onClick={(e) => navigate("/")} className="mt-4">
      <Icon name="home" className="h-4 mr-2" />
      Home Page
    </Button>
  </div>
)

export default NotFoundPage
