import React from "react";
const DarkModeToggle = () => {
  return (
    <div className="lg:mt-5 cursor-pointer hover:opacity-75">
      {/* <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <Icon
            name={theme === "dark" ? "sun" : "moon"}
            onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
            className={classNames("fill-current h-6", {
              "text-white": theme === "dark",
              "text-gray-900": theme === "light",
            })}
          />
        )}
      </ThemeToggler> */}
    </div>
  );
};

export default DarkModeToggle;
