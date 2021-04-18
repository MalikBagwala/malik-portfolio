import React from "react";
import classNames from "../../utils/classNames";

interface SectionProps {
  hero?: boolean;
  alternatingBackground?: boolean;
  title?: string;
  subtitle?: string;
  className?: any;
  white?: boolean;
}
const Section: React.FC<SectionProps> = ({
  children,
  hero,
  alternatingBackground = true,
  title,
  subtitle,
  className,
}) => {
  return (
    <section
      id={title.toLowerCase()}
      className={classNames(
        "px-6 py-12",
        {
          "bg-white odd:bg-gray-100 dark:bg-gray-900 dark:border-b border-gray-800": alternatingBackground,
        },
        className
      )}
    >
      {!hero && (
        <div className="mb-8">
          <span className="uppercase text-xs text-gray-700 dark:text-gray-100">
            {subtitle}
          </span>
          <h1 className="uppercase font-display text-2xl text-gray-800 dark:text-gray-200">
            {title}
          </h1>
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;
