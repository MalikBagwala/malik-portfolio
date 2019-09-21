import { get } from "lodash"
import React from "react"
import Button from "./Button"
import ElevatedImage from "./ElevatedImage"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
const WorkCard = ({
  live,
  source,
  title,
  thumbnail,
  description,
  children,
}) => {
  const src = thumbnail && get(thumbnail, "fixed.src")
  return (
    <div className="work-card">
      <ElevatedImage src={src} />
      <div className="content">
        <h3 className="heading">{title}</h3>
        <p className="card-text">
          {documentToReactComponents(description.json)}
        </p>
        <div className="buttons">
          <Button
            as="a"
            href={live}
            card={true}
            style={{ marginRight: 30 }}
            purple
          >
            Live
          </Button>
          <Button as="a" href={source} card={true} purple>
            Source
          </Button>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
