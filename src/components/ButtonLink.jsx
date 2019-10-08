import React from "react"
import styled from "styled-components"
import Button from "./Button"

const Link = styled.a`
  /* ... */
`

const ButtonLink = ({
  href,
  target,
  linkProps,
  children,
  purple,
  card,
  ...otherProps
}) => {
  return (
    <Link href={href} target={target} {...linkProps}>
      <Button card={card.toString()} purple={purple.toString()} {...otherProps}>
        {children}
      </Button>
    </Link>
  )
}

export default ButtonLink
