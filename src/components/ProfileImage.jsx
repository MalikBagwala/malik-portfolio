import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Spring, config } from "react-spring/renderprops"
const StyledImage = styled(Img)`
  border: 1rem solid var(--yellow-color);
  border-radius: 10px;
  box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
`

const ProfileImage = () => {
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
    <Spring
      from={{
        opacity: 0,
        transform: "translateY(100px)",
        config: config.wobbly,
      }}
      to={{ opacity: 1, transform: "translateY(0px)" }}
    >
      {props => (
        <StyledImage
          style={props}
          fluid={data.contentfulAsset.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
        ></StyledImage>
      )}
    </Spring>
  )
}

export default ProfileImage
