import React from "react"
import { graphql } from "gatsby"
import Layout from "../../organisms/layout/layout.component"
import Section from "../section/section.component"
import Tag from "../../atoms/tag/tag.component"
import Button from "../../atoms/button/button.component"
import Icon from "../../atoms/icon/icon.component"
import Img from "gatsby-image"
import RichText from "../../molecules/rich-text/rich-text.component"
import { tags } from "./work-detail.module.css"
const WorkDetail = ({ data }) => {
  const work = data.contentfulWork
  return (
    <Layout title={`Work | ${work.title}`}>
      <Section
        className="bg-white dark:bg-gray-900 dark:border-b border-gray-800"
        title={work.title}
        subtitle="title"
        alternatingBackground={false}
      >
        <div className="flex">
          <div className="images w-1/2">
            <Img
              className="mb-8 shadow rounded-lg"
              fluid={work.thumbnail.fluid}
              alt={work.title}
            />
          </div>
          <div className="sticky top-auto flex flex-col overflow-hidden px-6 w-1/2">
            <div>
              <h2 className="text-xl mb-4 dark:text-gray-500">Description</h2>
              <RichText document={JSON.parse(work.description.description)} />
              <div className={tags}>
                {work.tags?.map((t) => (
                  <Tag
                    className="mb-3"
                    key={t.contentful_id}
                    title={t.tagName}
                  />
                ))}
              </div>
            </div>
            <div className="flex">
              <Button href={work.live} target="__blank" as="a" className="mr-4">
                <Icon name="globe" className="h-4 mr-2" />
                Live
              </Button>
              <Button minimal href={work.source} target="__blank" as="a">
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
        description
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
