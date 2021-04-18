import React from "react";
import classNames from "../../../utils/classNames";
import Icon from "../../atoms/icon/icon.component";
import Section from "../../templates/section/section.component";
import { base, chevron } from "./hero.module.css";

const Hero = () => {
  return (
    <Section
      hero
      className={classNames(
        "h-screen bg-gray-100 dark:bg-gray-900 relative flex items-center justify-center dark:border-b border-gray-800",
        base
      )}
      title="Home"
      alternatingBackground={false}
      subtitle="portfolio"
    >
      <h1 className="font-bold text-6xl dark:text-yellow-300 text-yellow-800">
        Malik Bagwala
      </h1>
      <Icon
        onClick={(e) => {
          // navigate("/#about");
        }}
        className={classNames(
          "text-yellow-800 dark:text-yellow-300 h-6 absolute animate-bounce cursor-pointer",
          chevron
        )}
        name="chevron-double-down"
      />
    </Section>
  );
};

export default Hero;
