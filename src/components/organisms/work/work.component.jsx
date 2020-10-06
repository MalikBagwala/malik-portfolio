import { navigate } from "gatsby"
import React from "react"
import classNames from "../../../utils/classNames"
import { card } from "./work.module.css"
import Img from "gatsby-image"
const Work = ({ work }) => {
  return (
    <div
      onClick={(e) => navigate(work.slug)}
      className={classNames(
        "bg-white hover:shadow-lg cursor-pointer rounded-md",
        card
      )}
    >
      <div className="overflow-hidden border-gray-200 shadow-sm">
        <Img
          className="w-full object-cover"
          fluid={work.thumbnail.fluid}
          alt="Sunset in the mountains"
        />
      </div>

      <div className="p-4">
        <h6 className="mb-4 text-black">{work.title}</h6>
        <p className="text-sm text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ipsum
          explicabo voluptate cupiditate, aliquam facilis laudantium asperiores
          quisquam amet? Sint quam debitis nostrum id tenetur consequuntur
          ratione, necessitatibus maxime! Repudiandae, facere asperiores in est
          esse rerum necessitatibus quia reprehenderit distinctio.
        </p>
      </div>
    </div>
  )
}

export default Work
