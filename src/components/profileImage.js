import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledImage = styled(Img)`
  border: 1rem solid var(--yellow-color);
  border-radius: 10px;
  box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
`

const ProfileImage = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "malik-profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 700, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  // const imageSource = get(data, "file.childImageSharp.fluid")
  // console.log(data, imageSource)
  return (
    <StyledImage
      fluid={data.placeholderImage.childImageSharp.fluid}
      objectFit="cover"
      objectPosition="50% 50%"
    ></StyledImage>
  )
}

export default ProfileImage
