import styled from "styled-components"

const Button = styled.button`
  padding: ${props => (props.card ? "0.7rem 2.3rem" : "1.3rem 2.3rem")};
  align-self: flex-start;
  background-image: linear-gradient(-60deg, #ffba00 0%, #ffdc00 100%);
  border-radius: 40px;
  font-size: ${props => (props.card ? "0.9rem" : "1.3rem")};

  color: var(--purple-color);
  font-weight: bold;
  box-shadow: rgba(101, 41, 255, 0.15) 0px 10px 20px;
  text-transform: uppercase;

  :hover {
    transform: ${props => (props.card ? "translateY(-7px)" : "none")};
    box-shadow: ${props =>
      props.card
        ? "rgba(101, 41, 255, 0.15) 0px 10px 20px"
        : "rgba(22, 22, 22, 0.5) 0px 0px 12rem 0px"};
    transition: all 0.4s ease 0s;
  }
`
export default Button
