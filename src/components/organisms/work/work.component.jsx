import { navigate } from "gatsby"
import React from "react"
import classNames from "../../../utils/classNames"
import { card } from "./work.module.css"
import Img from "gatsby-image"
// import Button from "../../atoms/button/button.component"
// import Icon from "../../atoms/icon/icon.component"
const Work = ({ work }) => {
  const description = work && work.shortDescription.childMarkdownRemark.html
  return (
    <div
      onClick={(e) => navigate(work.slug)}
      className={classNames(
        "bg-white dark:bg-gray-200 hover:shadow-lg cursor-pointer rounded-md",
        card
      )}
    >
      <div className="overflow-hidden border-gray-200 shadow-sm rounded-t-md">
        <Img
          className="w-full object-cover"
          fluid={{ ...work.thumbnail.fluid, aspectRatio: 16 / 9 }}
          alt="Sunset in the mountains"
        />
      </div>

      <div className="p-4">
        <h2 className="mb-4 uppercase text-base font-bold text-gray-800">
          {work.title}
        </h2>
        <div
          className="text-gray-700"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      {/* <div className="flex p-4">
        <Button href={work.live} target="__blank" as="a" className="mr-4">
          <Icon name="globe" className="h-4 mr-2" />
          Live
        </Button>
        <Button minimal href={work.source} target="__blank" as="a">
          <Icon name="code" className="h-4 mr-2" /> Code
        </Button>
      </div> */}
    </div>
  )
}

export default Work
