import React from "react"
import { useSpring, animated } from "react-spring"
import styled from "styled-components"

const ProfileCard = styled(animated.div)`
  width: ${props => (props.fill ? "50%" : "400px")};
  height: ${props => (props.fill ? "100%" : "400px")};

  border-radius: 5px;
  background-image: ${props => `url(${props.src})`};
  background-size: cover;

  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;

  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
]
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const ProfileImage = ({ src, fill }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))
  return (
    <ProfileCard
      src={src}
      fill={fill}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    />
  )
}

ProfileImage.defaultProps = {
  src: "https://picsum.photos/400/400",
}
export default ProfileImage
