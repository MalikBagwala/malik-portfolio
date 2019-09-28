import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { get } from "lodash"
const SocialMedia = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          socialMedia {
            mail
            github
            gitlab
            linkedin
          }
        }
      }
    }
  `)
  const socialLink = get(data, "site.siteMetadata.socialMedia", {})

  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default SocialMedia
