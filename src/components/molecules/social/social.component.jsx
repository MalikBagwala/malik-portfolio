import React from "react"
import classNames from "../../../utils/classNames"
import Icon from "../../atoms/icon/icon.component"

const SocialIcon = ({ className, name }) => {
  return (
    <div
      className={classNames(
        "bg-gray-800 p-2 rounded-full cursor-pointer hover:bg-gray-700",
        className
      )}
    >
      <Icon name={name} className="fill-current text-gray-100 h-4" />
    </div>
  )
}
const Social = () => {
  return (
    <div className={classNames("flex justify-center mb-4")}>
      <SocialIcon name="gitlab" />
      <SocialIcon name="github" className="ml-3" />
      <SocialIcon name="linkedln" className="ml-3" />
      <SocialIcon name="globe" className="ml-3" />
    </div>
  )
}

export default Social
