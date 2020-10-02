import React from "react"
import { graphql } from "gatsby"
import Layout from "../../organisms/layout/layout.component"
import Section from "../section/section.component"
import Tag from "../../atoms/tag/tag.component"
import Button from "../../atoms/button/button.component"
import Icon from "../../atoms/icon/icon.component"
import Img from "gatsby-image"
const WorkDetail = ({ data }) => {
  const work = data.contentfulWork
  console.log(work)
  return (
    <Layout title={`Work | ${work.title}`}>
      <Section white={true} title={work.title} subtitle="title">
        <div className="flex">
          <div className="images w-2/3">
            <Img
              className="mb-8 shadow"
              fluid={work.thumbnail.fluid}
              alt={work.title}
            />
          </div>
          <div className="sticky top-auto flex flex-col overflow-hidden px-6 w-1/3">
            <div>
              <h6 className="text-xl mb-4">Description</h6>
              <p className="text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium quidem dolorum veritatis? Repellat doloribus aut
                accusantium assumenda explicabo? Dolore dignissimos sapiente
                repellat? Nihil, sapiente. Officia aspernatur necessitatibus
                itaque dicta? Natus rem esse placeat quis nisi enim eligendi,
                aliquam quaerat quam necessitatibus voluptatum optio in, illo,
                quae mollitia est assumenda doloremque. Illum accusamus possimus
                doloribus fugit cupiditate ea ab porro eius maiores voluptas id
                voluptatum consequatur soluta debitis ipsum, ipsa explicabo!
              </p>
              <div className="mt-4 mb-10 ">
                {work.tags?.map((t) => (
                  <Tag key={t.contentful_id} title={t.tagName} />
                ))}
              </div>
            </div>
            <div className="flex">
              <Button href={work.live} target="__blank" as="a" className="mr-4">
                <Icon name="globe" className="h-4 mr-2" />
                Live
              </Button>
              <Button href={work.source} target="__blank" as="a">
                <Icon name="code" className="h-4 mr-2" /> Code
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default WorkDetail

export const query = graphql`
  query contentfulWork($slug: String) {
    contentfulWork(slug: { eq: $slug }) {
      contentful_id
      slug
      title
      description {
        id
      }
      live
      source
      tags {
        contentful_id
        tagName
      }
      thumbnail {
        contentful_id
        fluid(maxWidth: 1920, quality: 80) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
