import React from "react"
import Input from "../../atoms/input/input.component"
import Section from "../../templates/section/section.component"
import TextArea from "../../atoms/textarea/textarea.component"
import Button from "../../atoms/button/button.component"
import Icon from "../../atoms/icon/icon.component"
import { graphql, useStaticQuery } from "gatsby"
const Contact = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            socialMedia {
              mail
            }
          }
        }
      }
    `
  )
  return (
    <Section title="contact" subtitle="get in touch">
      <div className="flex">
        <div className="w-1/2">
          <h6 className="">Malik Bagwala</h6>

          <h6 className="flex items-center text-gray-700 mt-6">
            <Icon name="phone" className="h-4 mr-2" /> +91 9975130529
          </h6>
          <h6 className="flex items-center text-gray-700 ">
            <Icon name="mail" className="h-4 mr-2" />{" "}
            {site.siteMetadata.socialMedia.mail}
          </h6>
        </div>
        <div className="w-1/2">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              console.log(e)
            }}
          >
            <div className="flex">
              <Input placeholder="Name" label="Name" />
              <Input placeholder="Email" label="Email" />
            </div>
            <TextArea placeholder="Message" label="message" className="mt-6" />
            <Button type="submit" className="mt-6 ml-3 inline-flex">
              <Icon name="chat" className="h-4 mr-2" /> Submit
            </Button>
          </form>
        </div>
      </div>
    </Section>
  )
}

export default Contact
