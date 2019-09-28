import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import styled from "styled-components"
const P = styled.p`
  color: var(--gray-500);
  margin-top: 1.4rem;
  line-height: 1.7;
  font-size: 0.9rem;
`

const A = styled.a`
  transition: all 0.4s ease-out 0s;
  :hover {
    color: var(--gray-800);
  }
`

const ContentMarkdownNote = ({ content }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <P>Note :{children}</P>,
      [INLINES.HYPERLINK]: node => (
        <A target="__blank" href={node.data.uri}>
          {node.content[0].value}
        </A>
      ),
    },
  }
  return <>{documentToReactComponents(content, options)}</>
}

export default ContentMarkdownNote
