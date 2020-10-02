import React from "react"
import { graphql } from "gatsby"
import Layout from "../../organisms/layout/layout.component"
import Section from "../section/section.component"
import Tag from "../../atoms/tag/tag.component"
import Button from "../../atoms/button/button.component"
import Icon from "../../atoms/icon/icon.component"
const WorkDetail = ({ data }) => {
  const work = data.contentfulWork
  return (
    <Layout title={`Work | ${work.title}`}>
      <Section white={true} title={work.title} subtitle="title">
        <div className="flex">
          <div className="images w-2/3">
            <img
              className="mb-8"
              src="http://duruthemes.com/demo/html/addo/white/images/portfolio/08.jpg"
              alt=""
            />
            <img
              src="http://duruthemes.com/demo/html/addo/white/images/portfolio/08.jpg"
              alt=""
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
              <div className="mt-4 mb-10">
                <Tag title="React" />
                <Tag title="Redux" className="ml-2" />
                <Tag title="GraphQL" className="ml-2" />
                <Tag title="Django" className="ml-2" />
                <Tag title="Apollo" className="ml-2" />
              </div>
            </div>
            <div className="flex">
              <Button className="mr-4">
                <Icon name="globe" className="h-4 mr-2" />
                Live
              </Button>
              <Button>
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
      id
      contentful_id
      slug
      title
      description {
        id
      }
    }
  }
`
