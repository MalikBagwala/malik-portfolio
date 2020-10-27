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

  const mail = site.siteMetadata.socialMedia.mail
  return (
    <Section title="contact" subtitle="get in touch">
      <div className="flex">
        <div className="w-1/2">
          <h2 className="dark:text-gray-300">Malik Bagwala</h2>

          <h2 className="flex items-center text-gray-700 dark:text-gray-300 mt-6">
            <Icon name="phone" className="h-4 mr-2" /> +91 9975130529
          </h2>
          <h2 className="flex items-center text-gray-700 dark:text-gray-300">
            <Icon name="mail" className="h-4 mr-2" /> {mail}
          </h2>
        </div>
        <div className="w-1/2">
          <form
            target="__blank"
            action={`https://formsubmit.co/${mail}`}
            method="POST"
          >
            <div className="flex">
              <Input placeholder="Name" label="Name" />
              <Input required type="email" placeholder="Email" label="Email" />
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
