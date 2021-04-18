import { GetStaticPaths, GetStaticProps } from "next";
import { WorkDetailType } from "../utils/api.types";
import { getQuery } from "../utils/api.utils";
import ReactMarkdown from "react-markdown";
export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await getQuery(
    `query getWork($slug: String) {
      work(where: {slug: $slug}) {
        id
        title
        description
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
    fallback: false,
  };
};

interface WorkDetailProps {
  work: WorkDetailType;
}

const WorkDetail: React.FC<WorkDetailProps> = ({ work }) => {
  console.log(work.description);

  return (
    <section>
      <h1>Work Detail</h1>
      <p>{work?.title}</p>
      <ReactMarkdown children={work?.description} />
    </section>
  );
};

export default WorkDetail;
