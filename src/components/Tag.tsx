import React from "react";
import classNames from "../utils/classNames";

const Tag = ({ title, className, onClick = undefined }) => {
  return (
    <span
      className={classNames(
        "inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700 dark:bg-yellow-500 dark:text-yellow-900",
        {
          "cursor-pointer hover:bg-yellow-300 dark:hover:bg-yellow-300": onClick,
        },
        className
      )}
      onClick={onClick}
    >
      {title}
    </span>
  );
};

export default Tag;
