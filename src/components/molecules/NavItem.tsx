import React from "react";
import classNames from "../../utils/classNames";
const NavItem = ({ children, id = undefined }) => {
  return (
    <li
      onClick={(e) => {
        // navigate(id ? `/#${id}` : "/")
      }}
      className={classNames(
        "nav-item",
        "text-gray-700 dark:text-gray-200 cursor-pointer hover:text-gray-900 dark:hover:text-gray-400 font-semibold"
      )}
    >
      {children}
    </li>
  );
};

export default NavItem;
