import React from "react"
import classNames from "../../../utils/classNames"
import Icon from "../../atoms/icon/icon.component"

const SocialIcon = ({ className, name, href }) => {
  return (
    <a
      target="__blank"
      href={href}
      className={classNames(
        "bg-gray-800 p-2 rounded-full cursor-pointer hover:bg-gray-700",
        className
      )}
    >
      <Icon name={name} className="fill-current text-gray-100 h-4" />
    </a>
  )
}
const Social = () => {
  return (
    <div className={classNames("flex justify-center mb-4")}>
      <SocialIcon href="https://github.com/MalikBagwala/" name="github" />
      <SocialIcon
        href="https://www.linkedin.com/in/malik-bagwala-b989b5185/"
        name="linkedln"
        className="ml-3"
      />
      <SocialIcon
        className="ml-3"
        href="https://gitlab.com/MalikBagwala"
        name="gitlab"
      />
      <SocialIcon
        href="https://stackoverflow.com/users/10177043/malik-bagwala"
        name="stackoverflow"
        className="ml-3"
      />
    </div>
  )
}

export default Social
