import React from "react";
import { WorkSummaryType } from "../../utils/api.types";
import WorkCard from "../organisms/WorkCard";
import Section from "../templates/Section";

interface PortfolioProps {
  works: WorkSummaryType[];
}
const Porfolio: React.FC<PortfolioProps> = ({ works }) => {
  const data = [];
  return (
    <Section title="Work" subtitle="portfolio">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((edge) => {
          const work = edge.node;
          return <WorkCard work={work} key={work.contentful_id} />;
        })}
      </div>
    </Section>
  );
};

export default Porfolio;
