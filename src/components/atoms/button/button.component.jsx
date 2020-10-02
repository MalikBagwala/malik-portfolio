import React from "react"
import classNames from "../../../utils/classNames"
import { base } from "./button.module.css"
// font-size: 16px;
// line-height: 1.75;
// font-weight: 400;
// border-style: solid;
// color: #fff;
// border-width: 0;
// -webkit-transition: background-color 0.15s ease-out;
// transition: background-color 0.15s ease-out;
// background-color: #101010;
// margin-top: 10px;
// border-radius: 0;
// margin-right: 10px;
// float: left;
// user-select: none;
// border: 1px solid transparent;
// padding: 0.375rem 0.75rem;
// text-align: center;
// white-space: nowrap;
// vertical-align: middle;
const Button = ({ children, dark, className }) => {
  return (
    <button
      className={classNames(
        "text-sm uppercase bg-gray-900 text-white px-3 py-2 hover:bg-gray-800 tracking-wider rounded flex justify-center items-center",
        base,
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
