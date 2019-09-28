import React from "react"
import styled from "styled-components"
import SocialMedia from "../components/SocialMedia"

const H1 = styled.h1`
  margin-bottom: 1.3rem;
  color: var(--gray-800);
  text-align: center;
`

const FooterWrapper = styled.footer`
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .social {
    margin: 1rem 0;
  }
  img {
    margin: 0 0.9rem;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`

const P = styled.p`
  font-size: 1.4rem;
  color: var(--gray-500);
`

const LinksContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 15%;

  @media ${props => props.theme.mediaQueries.larger} {
    width: 20%;
  }
  @media ${props => props.theme.mediaQueries.medium} {
    width: 30%;
  }
  @media ${props => props.theme.mediaQueries.small} {
    width: 45%;
  }
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
