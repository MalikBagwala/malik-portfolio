import React from "react";
import Icon from "../Icon";
import Layout from "../Layout";
import Section from "./Section";
import Tag from "../Tag";
import Button from "../Button";
import styles from "./work-detail.module.css";
const WorkDetail = ({ data }) => {
  const work: any = {};

  return (
    <Layout title={`Work | ${work.title}`}>
      <Section
        className="bg-white dark:bg-gray-900 dark:border-b border-gray-800"
        title={work.title}
        subtitle="title"
        alternatingBackground={false}
      >
        <div className="flex flex-col lg:flex-row">
          <div className="images w-full lg:w-1/2">
            {/* <Img
              className="mb-8 shadow rounded-lg"
              fluid={work.thumbnail.fluid}
              alt={work.title}
            /> */}
            {work.photos &&
              work.photos.map((p) => {
                return (
                  // <Img
                  //   key={p.contentful_id}
                  //   className="mb-8 shadow rounded-lg"
                  //   fluid={p.fluid}
                  //   alt={p.title}
                  // />
                  null
                );
              })}
          </div>
          <div className="sticky top-auto flex flex-col overflow-hidden px-6 w-full lg:w-1/2">
            <div>
              <h2 className="text-xl mb-4 dark:text-gray-500">Description</h2>
              {/* <RichText document={JSON.parse(work.description.description)} />
              {work.note && (
                <RichText
                  mutedAnchor={true}
                  className="text-sm"
                  document={JSON.parse(work.note.note)}
                />
              )} */}
              <div className={styles.tags}>
                {work.tags?.map((t) => (
                  <Tag
                    className="mb-3"
                    key={t.contentful_id}
                    title={t.tagName}
                  />
                ))}
              </div>
            </div>
            <div className="flex">
              <Button href={work.live} target="__blank" as="a" className="mr-4">
                <Icon name="globe" className="h-4 mr-2" />
                Live
              </Button>
              <Button minimal href={work.source} target="__blank" as="a">
                <Icon name="code" className="h-4 mr-2" /> Code
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default WorkDetail;
