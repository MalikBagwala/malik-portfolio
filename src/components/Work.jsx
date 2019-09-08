import React from "react"
import WorkCard from "./WorkCard"
const Work = () => {
  return (
    <div id="work">
      <div className="container">
        <div className="title-content">
          <h2 className="title">Work</h2>
          <hr className="title-ruling" />
        </div>
        <WorkCard />
      </div>
    </div>
  )
}

export default Work
