import React from "react"
import styled from "styled-components"
import SocialMedia from "../components/SocialMedia"
import { Container } from "../utils/styledComponents"

const H1 = styled.h1`
  margin-bottom: 1.3rem;
  color: var(--gray-800);
  text-align: center;
`

const FooterWrapper = styled(Container)`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const P = styled.p`
  font-size: 1.4rem;
  color: var(--gray-500);
  text-align: center;
  @media ${props => props.theme.mediaQueries.larger} {
    text-align: center;
  }
  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 1.2rem;
  }
`

const LinksContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  /* width: 15%;

  @media ${props => props.theme.mediaQueries.larger} {
    width: 20%;
  }
  @media ${props => props.theme.mediaQueries.medium} {
    width: 30%;
  }
  @media ${props => props.theme.mediaQueries.small} {
    width: 45%;
  } */
`

const CopyRight = styled.div`
  height: 40px;
  width: 100%;
  background: var(--gray-100);
  display: flex;
  align-items: center;
  justify-content: center;
`
const CopyText = styled.p`
  font-size: 0.9rem;
  text-align: center;
`

const Footer = () => {
  return (
    <>
      <FooterWrapper id="contact">
        <div>
          <H1>Let's Work Together</H1>
          <P>
            I don't work for people, I collaborate with them. Sound like you?
            Let’s talk!
          </P>
        </div>
        <LinksContainer>
          <SocialMedia />
        </LinksContainer>
      </FooterWrapper>
      <CopyRight>
        <CopyText>
          Copyright &copy; {new Date().getFullYear()} Malik Bagwala
        </CopyText>
      </CopyRight>
    </>
  )
}

export default Footer
