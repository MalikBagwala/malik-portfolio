import React from "react"
import styled from "styled-components"

const StyledInput = styled.input`
  font-size: 1rem;
  width: 100%;
  /* height: 70px; */
  padding: 10px;
  display: block;
  border-radius: 6px;
  border: 2px solid #e2e2e2;
  background: #f9f9f9;
  font-weight: 300;
  color: #191a1d;

  &:focus {
    outline: none;
    border: 2px solid var(--purple-color);
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  display: block;
  color: #919191;
  font-weight: 500;
`

const Input = ({ path, label }) => {
  return (
    <Div>
      <Label for={path}>{label}</Label>
      <StyledInput name={path} type="text" />
    </Div>
  )
}

export default Input
