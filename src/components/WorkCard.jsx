import { get } from "lodash"
import React from "react"
import Button from "./Button"
import ElevatedImage from "./ElevatedImage"
// import ElevatedGatsbyImage from "./ElevatedGatsbyImage"
const WorkCard = ({ frontmatter, children }) => {
  const title = get(frontmatter, "title")
  const live = get(frontmatter, "live")
  const source = get(frontmatter, "source")
  const thumbnail = get(frontmatter, "thumbnail.childImageSharp")
  return (
    <div className="work-card">
      <ElevatedImage fill={true} src={thumbnail.fluid.src} />
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
