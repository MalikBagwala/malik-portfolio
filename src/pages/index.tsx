import { WorkSummaryType } from "../utils/api.types";
import { getQuery } from "../utils/api.utils";
import Link from "next/link";
import routes from "../utils/app.routes";
export async function getStaticProps(context) {
  const { data } = await getQuery(
    `
  {
    works{
      id
      shortDescription
      title
      slug
    }
  }
  `
  );

  return {
    props: {
      works: data?.data?.works,
    },
  };
}
interface HomeProps {
  works: WorkSummaryType[];
}
const Home: React.FC<HomeProps> = ({ works }) => {
  return (
    <div className="bg-gray-100 h-screen">
      <h1>Home Page</h1>
      {works.map((work) => {
        return (
          <Link
            href={{ pathname: routes.workDetail, query: { slug: work.slug } }}
          >
            <section id={work.slug} key={work.id}>
              {work.id}
            </section>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
