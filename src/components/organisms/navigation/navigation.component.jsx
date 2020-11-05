import React from "react"
import classNames from "../../../utils/classNames"
import NavItem from "../../molecules/nav-item/nav-item.component"

const Navigation = () => {
  return (
    <nav className={classNames("hidden lg:block")}>
      <ul>
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
