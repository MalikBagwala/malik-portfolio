import React from "react"
import styled from "styled-components"

const StyledEmoji = styled.span`
  /* ..usefull for adding future styling. */
`

const Emoji = ({ children, label, ...otherProps }) => {
  return (
    <StyledEmoji
      role="img"
      aria-label={label ? label : " a random emoji"}
      {...otherProps}
    >
      {children}
    </StyledEmoji>
  )
}

export default Emoji
