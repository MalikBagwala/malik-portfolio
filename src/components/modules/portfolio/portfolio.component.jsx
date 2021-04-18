import React from "react";
import Work from "../../organisms/work/work.component";
import Section from "../../templates/section/section.component";
const Porfolio = () => {
  const data = [];
  return (
    <Section title="Work" subtitle="portfolio">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((edge) => {
          const work = edge.node;
          return <Work work={work} key={work.contentful_id} />;
        })}
      </div>
    </Section>
  );
};

export default Porfolio;
