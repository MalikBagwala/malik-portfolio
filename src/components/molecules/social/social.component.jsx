import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import classNames from "../../../utils/classNames"
import Icon from "../../atoms/icon/icon.component"
import { container } from "./social.module.css"
const SocialIcon = ({ className, name, href, target = "__blank" }) => {
  return (
    <a
      aria-label={name}
      target={target}
      href={href}
      className={classNames(
        "bg-gray-800 p-2 rounded-full cursor-pointer hover:bg-gray-700",
        className
      )}
    >
      <Icon name={name} className="fill-current text-gray-100 h-4" />
    </a>
  )
}
const Social = () => {
  const site = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          socialMedia {
            github
            linkedln
            gitlab
            mail
            stackoverflow
          }
        }
      }
    }
  `)

  const social = site && site.site.siteMetadata.socialMedia
  console.log(social)
  return (
    <div className={container}>
      {Object.keys(social).map((s) => {
        const link = social[s]
        return (
          <SocialIcon
            target={link.includes("@") ? null : undefined}
            href={link.includes("@") ? `mailto:${link}` : link}
            name={s}
          />
        )
      })}
    </div>
  )
}

export default Social
