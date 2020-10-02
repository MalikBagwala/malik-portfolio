import React from "react"
import classNames from "../../../utils/classNames"
import Section from "../../templates/section/section.component"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"
import Button from "../../atoms/button/button.component"
import Icon from "../../atoms/icon/icon.component"
const About = () => {
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
    <Section title="about" subtitle="information" white>
      <div className={classNames("flex")}>
        <div className="w-1/3">
          <Img
            fluid={data.contentfulAsset.fluid}
            className="w-full shadow-md"
          />
        </div>
        <div className="w-2/3 px-6">
          <h6 className="text-2xl font-display text-gray-800 mb-6">
            Hey I'm Malik 🤞
          </h6>
          <p className="text-gray-700">
            A 21 year old self-taught developer specializing in front-end
            development. I have always been passionate about creating
            user-interfaces that speak, and are a pleasure to use, I like to
            tackle challenges and I am always open to collaboration. My love for
            web development exploded after my bachelor's degree in computer
            science. I like exploring newer and better software engineering
            paradigms and to be completly honest, I do get excited about new
            frameworks 😆, So here are a few of my projects that are built using
            bleeding edge frameworks and technologies.
          </p>
          <Button
            as="a"
            target="__blank"
            href="/resume.pdf"
            className="mt-4 inline-flex"
          >
            <Icon name="report" className="h-4 mr-2" /> Resume
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default About
