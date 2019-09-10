import React from "react"
import LightsOut from "./lights-out.jpeg"
import ElevatedImage from "./ElevatedImage"
import { get } from "lodash"
import Button from "./Button"
const WorkCard = ({ frontmatter, children }) => {
  const title = get(frontmatter, "title")
  const live = get(frontmatter, "live")
  const source = get(frontmatter, "source")
  return (
    <div className="work-card">
      <ElevatedImage fill={true} src={LightsOut} />
      <div className="content">
        <h3 className="heading">{title}</h3>
        <p
          className="card-text"
          dangerouslySetInnerHTML={{ __html: children }}
        ></p>
        <div className="buttons">
          <Button as="a" href={live} card={true} style={{ marginRight: 30 }}>
            Live
          </Button>
          <Button as="a" href={source} card={true}>
            Source
          </Button>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
