import React from "react"
import styled from "styled-components"
const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const H2 = styled.h2`
  color: var(--purple-color);
  text-transform: uppercase;
  font-weight: lighter;
  font-size: 2.5rem;
  text-align: center;
`

const HR = styled.hr`
  margin: 5px;
  width: 60%;
  height: 2px;
  outline: none;
  border: none;
  background: var(--gray-600);
  align-self: center;
`
const SectionHeader = ({ children }) => {
  return (
    <Div>
      <H2>{children}</H2>
      <HR />
    </Div>
  )
}

export default SectionHeader
