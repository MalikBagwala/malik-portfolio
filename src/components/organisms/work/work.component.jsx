import { navigate } from "gatsby"
import React from "react"
import classNames from "../../../utils/classNames"
import { card } from "./work.module.css"
const Work = ({ work }) => {
  return (
    <div className={classNames("bg-white overflow-hidden", card)}>
      <div className="overflow-hidden" onClick={() => navigate(work.slug)}>
        <img
          class="w-full transform hover:scale-150 cursor-pointer"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        ></img>
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
