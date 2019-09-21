import React from "react"
import styled from "styled-components"
import Button from "./Button"

const Link = styled.a`
  /* ... */
`

const ButtonLink = ({ href, target, linkProps, children, ...otherProps }) => {
  return (
    <Link href={href} target={target} {...linkProps}>
      <Button {...otherProps}>{children}</Button>
    </Link>
  )
}

export default ButtonLink
