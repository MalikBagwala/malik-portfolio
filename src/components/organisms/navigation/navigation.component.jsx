import React from "react"
import NavItem from "../../molecules/nav-item/nav-item.component"

const Navigation = () => {
  return (
    <nav>
      <ul className="flex justify-between lg:block">
        <NavItem>Home</NavItem>
        <NavItem id="about">About</NavItem>
        <NavItem id="work">Work</NavItem>
        {/* <NavItem id="skills">Skills</NavItem> */}
        <NavItem id="contact">Contact</NavItem>
      </ul>
    </nav>
  )
}

export default Navigation
