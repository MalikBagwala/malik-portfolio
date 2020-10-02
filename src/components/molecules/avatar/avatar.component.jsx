import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { base } from "./avatar.module.css"
import classNames from "../../../utils/classNames"
const Avatar = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulAsset(contentful_id: { eq: "5NkOM8Yz5pgnmOXIvBg8qP" }) {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  `)
  return (
    <Img
      className={classNames("rounded-full h-32 w-32 shadow-lg", base)}
      fluid={data.contentfulAsset.fluid}
    />
  )
}

export default Avatar
