import { GetStaticPaths, GetStaticProps } from "next";
import { WorkDetailType } from "../utils/api.types";
import { getQuery } from "../utils/api.utils";

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await getQuery(
    `query getWork($slug: String) {
      work(where: {slug: $slug}) {
        id
        title
      }
    }`,
    { slug: context.params.slug }
  );
  return {
    props: {
      work: data?.data?.work,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getQuery(
    `
  {
    works{
      slug
    }
  }
  `
  );

  return {
    paths: data.data.works.map((work) => ({
      params: {
        slug: work?.slug,
      },
    })),
    fallback: true,
  };
};

interface WorkDetailProps {
  work: WorkDetailType;
}

const WorkDetail: React.FC<WorkDetailProps> = ({ work }) => {
  return (
    <section>
      <h1>Work Detail</h1>
      <p>{work.title}</p>
    </section>
  );
};

export default WorkDetail;
