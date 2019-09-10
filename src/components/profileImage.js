import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const ProfileImage = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "malik-profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  // const imageSource = get(data, "file.childImageSharp.fluid")
  // console.log(data, imageSource)
  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      objectFit="cover"
      objectPosition="50% 50%"
    ></Img>
  )
}

export default ProfileImage
