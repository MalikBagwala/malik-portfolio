import styled from "styled-components"
import { animated } from "react-spring"
const Button = styled(animated.button)`
  padding: ${props => (props.card ? "0.7rem 2rem" : "1.2rem 3.3rem")};
  align-self: ${props => (props.center ? "center" : "start")};
  background-image: ${props =>
    props.purple
      ? "linear-gradient( 88.7deg,  rgba(207,150,207,1) -2.4%, rgba(107,116,179,1) 102% )"
      : props.light
      ? "background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
      : "linear-gradient(-60deg, #ffba00 0%, #ffdc00 100%)"};

  border-radius: 40px;
  font-size: ${props => (props.card ? "0.9rem" : "1.3rem")};

  color: ${props => (props.purple ? "white" : "var(--purple-color)")};
  font-weight: bold;
  box-shadow: rgba(101, 41, 255, 0.15) 0px 10px 20px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props =>
      props.card
        ? "rgba(101, 41, 255, 0.15) 0px 10px 20px"
        : "rgba(22, 22, 22, 0.5) 0px 0px 12rem 0px"};
  }

  &:active {
    transform: translateY(1px);
    box-shadow: ${props =>
      props.card
        ? "rgba(101, 41, 255, 0.15) 0px 10px 20px"
        : "rgba(22, 22, 22, 0.5) 0px 0px 12rem 0px"};
  }
`
export default Button
