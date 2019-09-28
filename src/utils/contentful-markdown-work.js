import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import React from "react"
import styled from "styled-components"
const P = styled.p`
  color: var(--gray-700);
  margin-top: 1.4rem;
  line-height: 1.7;
  font-size: 1.2rem;
`

const A = styled.a`
  border-bottom: 2px solid var(--purple-color);
  transition: all 0.4s ease-out 0s;
  &:hover {
    background: var(--purple-color);
    color: white;
  }
`

const ContentMarkdownWork = ({ content }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <P>{children}</P>,
      [INLINES.HYPERLINK]: node => (
        <A target="__blank" href={node.data.uri}>
          {node.content[0].value}
        </A>
      ),
    },
  }
  return <>{documentToReactComponents(content, options)}</>
}

export default ContentMarkdownWork
