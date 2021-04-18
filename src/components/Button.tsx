import React from "react";
import classNames from "../utils/classNames";
const Button = ({
  children,
  as = undefined,
  className = undefined,
  minimal = false,
  ...otherProps
}) => {
  const finalClassNames = classNames(
    "text-sm uppercase px-3 py-2  tracking-wider rounded flex justify-center items-center",
    {
      "bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700": !minimal,
    },
    { "bg-gray-300 text-gray-900 hover:bg-gray-200 ": minimal },
    className
  );
  return (
    <>
      {as === "a" ? (
        <a role="button" className={finalClassNames} {...otherProps}>
          {children}
        </a>
      ) : (
        <button className={finalClassNames} {...otherProps}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
