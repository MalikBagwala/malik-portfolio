import Link from "next/link";
import React from "react";
import { WorkSummaryType } from "../../utils/api.types";
import routes from "../../utils/app.routes";
import classNames from "../../utils/classNames";
import Image from "next/image";
// import Button from "../../atoms/button/button.component"
// import Icon from "../../atoms/icon/icon.component"
interface WorkCardProps {
  work: WorkSummaryType;
}
const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
  console.log(work);

  return (
    <Link href={{ pathname: routes.workDetail, query: { slug: work.slug } }}>
      <div
        className={classNames(
          "bg-white dark:bg-gray-200 shadow hover:shadow-lg cursor-pointer rounded-md"
        )}
      >
        <div className="overflow-hidden border-gray-200 shadow-sm rounded-t-md">
          {work.thumbnail?.url && (
            <Image
              className="flat-image"
              src={work.thumbnail.url}
              alt={work.slug}
              height={370}
              width={600}
              objectFit="cover"
            />
          )}
          {/* <Img
          className="w-full object-cover"
          fluid={{ ...work.thumbnail.fluid, aspectRatio: 16 / 9 }}
          alt="Sunset in the mountains"
        /> */}
        </div>

        <div className="p-4">
          <h2 className="mb-4 uppercase text-base font-bold text-gray-800">
            {work.title}
          </h2>
          <div
            className="text-gray-700"
            dangerouslySetInnerHTML={{ __html: work.shortDescription }}
          />
        </div>
        {/* <div className="flex p-4">
          <Button href={work.live} target="__blank" as="a" className="mr-4">
            <Icon name="globe" className="h-4 mr-2" />
            Live
          </Button>
          <Button minimal href={work.source} target="__blank" as="a">
            <Icon name="code" className="h-4 mr-2" /> Code
          </Button>
        </div> */}
      </div>
    </Link>
  );
};

export default WorkCard;
