import React from "react"

const Emoji = ({ children, label, ...otherProps }) => {
  return (
    // eslint-disable-next-line
    <span
      role="img"
      aria-label={label ? label : " a random emoji"}
      {...otherProps}
    >
      {children}
    </span>
  )
}

export default Emoji
