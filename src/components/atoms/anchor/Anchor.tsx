import React from "react";
import classNames from "../../../utils/classNames";
import styles from "./anchor.module.css";

const Anchor = ({
  href,
  children,
  className = undefined,
  muted = undefined,
  ...otherProps
}) => {
  return (
    <a
      href={href}
      target="__blank"
      {...otherProps}
      className={classNames(
        {
          [styles.base]: !muted,
          "dark:hover:bg-yellow-300 dark:hover:text-yellow-900": !muted,
          "font-bold": muted,
        },
        className
      )}
    >
      {children}
    </a>
  );
};

export default Anchor;
