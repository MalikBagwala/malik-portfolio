import { navigate } from "gatsby"
import React from "react"
import classNames from "../../../utils/classNames"
import { card } from "./work.module.css"
import Img from "gatsby-image"
const Work = ({ work }) => {
  const description = work && work.shortDescription.childMarkdownRemark.html
  return (
    <div
      onClick={(e) => navigate(work.slug)}
      className={classNames(
        "bg-white hover:shadow-lg cursor-pointer rounded-md",
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
        <h2 className="mb-4 text-lg text-black">{work.title}</h2>
        <div
          className="text-gray-800"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  )
}

export default Work
