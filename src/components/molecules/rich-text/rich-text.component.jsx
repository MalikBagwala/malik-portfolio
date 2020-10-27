import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import React from "react"
import Anchor from "../../atoms/anchor/anchor.component"

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <span className="font-semibold">{text}</span>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p className="text-gray-900 dark:text-gray-400 text-lg leading-8">
        {children}
      </p>
    ),
    [INLINES.HYPERLINK]: (node) => (
      <Anchor href={node.data.uri}>{node.content[0].value}</Anchor>
    ),
  },
}
const RichText = ({ document }) => {
  return documentToReactComponents(document, options)
}

export default RichText
