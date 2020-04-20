import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
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

  @media ${(props) => props.theme.mediaQueries.medium} {
    font-size: 14px;
    height: 140px;
  }
`

const IMG = styled.img`
  height: 60px;
  width: 60px;
  margin-top: 1rem;
  @media ${(props) => props.theme.mediaQueries.medium} {
    height: 40px;
    width: 40px;
  }
`

const Star = styled(FontAwesomeIcon)`
  margin-top: 1rem;
  margin-left: 3px;
  margin-right: 3px;
`

const Rating = styled.div`
  display: flex;
`

const SkillCard = ({ skill }) => {
  function getRatings(rating) {
    let ratings = []
    for (let i = 0; i < rating; i++) {
      ratings.push(<Star icon={faStar} />)
    }
    return ratings
  }
  return (
    <Div color={skill.color}>
      <p>{skill.name}</p>
      <IMG color={skill.color} src={skill.logo.file.url} />

      <Rating>{getRatings(skill.rating)}</Rating>
    </Div>
  )
}

export default SkillCard
