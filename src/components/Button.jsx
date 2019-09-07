import React from "react"
import styled from "styled-components"

const Btn = styled.button`
  align-self: flex-start;
  background: var(--orange-color);
  padding: 1.3rem 2.3rem;
  font-size: 1.3rem;
  color: white;
  font-weight: lighter;
  text-transform: uppercase;
  border-radius: 0px;
  cursor: pointer;
  :hover {
    background: var(--gray-100);
    color: var(--orange-color);
    transition: all 0.3s ease-in;
  }
`

const Button = ({ children, style, className }) => {
  return (
    <Btn className={className} style={style}>
      {children}
    </Btn>
  )
}

export default Button
