import React from "react"
import { useSpring, animated } from "react-spring"
import styled from "styled-components"

const ElevatedImg = styled(animated.img)`
  width: 500px;
  height: auto;
  border-radius: 5px;
  background-image: ${props => `url(${props.src})`};
  background-size: cover;
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
  @media ${props => props.theme.mediaQueries.larger} {
    width: 400px;
  }
  @media ${props => props.theme.mediaQueries.large} {
    width: 300px;
  }
  @media ${props => props.theme.mediaQueries.medium} {
    width: 100%;
  }
`

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
]
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const ElevatedImage = ({ src, ...otherProps }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))
  return (
    <ElevatedImg
      {...otherProps}
      src={src}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    />
  )
}

ElevatedImage.defaultProps = {
  src: "https://picsum.photos/400/400",
}
export default ElevatedImage
