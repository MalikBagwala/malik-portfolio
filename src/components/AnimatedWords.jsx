import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { animated, useTransition, config } from "react-spring"

const WORDS = [
  { id: 0, text: "self-taught" },
  { id: 1, text: "dedicated" },
  { id: 2, text: "passionate" },
  { id: 3, text: "cutting-edge" },
]

const P = styled(animated.p)`
  font-weight: 600;
  font-style: italic;
`
const AnimatedWords = () => {
  // Subtitle keywords loop
  const [index, setIndex] = useState(0)
  const wordsTransition = useTransition(WORDS[index], span => span.id, {
    config: config.wobbly,
    delay: 500,
    duration: 600,
    from: {
      opacity: 0,
      transform: "scale(0.2)",
      position: "absolute",
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
    },
    leave: {
      opacity: 0,
      transform: "scale(3.8)",
    },
  })
  useEffect(
    () =>
      void setInterval(
        () => setIndex(current => (current + 1) % WORDS.length),
        2500
      ),
    []
  )
  return (
    <>
      {wordsTransition.map(({ item, props, key }) => (
        <P key={key} style={props}>
          {item.text}
        </P>
      ))}
    </>
  )
}

export default AnimatedWords
