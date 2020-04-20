import React from "react"
import styled from "styled-components"

const Div = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.gray100};
  transition: all 0.5s ease-in;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  &:hover {
    background: ${(props) => props.color};
    color: white;
    /* box-shadow: var(--shadow-200); */
  }
`

const IMG = styled.img`
  height: 60px;
  width: 60px;
  margin-top: 1rem;
`

const SkillCard = ({ skill }) => {
  return (
    <Div color={skill.color}>
      <p>{skill.name}</p>
      <IMG color={skill.color} src={skill.logo.file.url} />
    </Div>
  )
}

export default SkillCard
