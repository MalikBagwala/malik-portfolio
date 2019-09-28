import styled from "styled-components"

const Container = styled.div`
  width: 80%;
  margin: auto;
`
const TextHighlight = styled.span`
  font-weight: ${props => (props.bold ? "bold" : "lighter")};
  font-size: ${props => (props.size ? props.size : "inherit")};
  color: ${props => (props.color ? props.color : "var(--yellow-color)")};
  font-style: ${props => (props.style ? props.style : "normal")};
`

export { Container, TextHighlight }
