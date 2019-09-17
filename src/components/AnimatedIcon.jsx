import React, { useState } from "react"
import { animated, useTransition } from "react-spring"
import styled from "styled-components"

const Span = styled(animated.span)`
  cursor: pointer;
`

const AnimatedIcon = () => {
  const [toggle, set] = useState(false)
  const transitions = useTransition(toggle, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return transitions.map(({ item, key, props }) =>
    item ? (
      <Span role="img" style={props} onClick={e => set(toggle => !toggle)}>
        ✌
      </Span>
    ) : (
      <Span role="img" style={props} onClick={e => set(toggle => !toggle)}>
        🤞
      </Span>
    )
  )
}

export default AnimatedIcon
