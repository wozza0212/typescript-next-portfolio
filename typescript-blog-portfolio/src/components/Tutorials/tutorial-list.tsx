import { NextPage } from "next";
import TutorialItem from "./tutorial-item";
import { getTutorials } from "../../../lib/tutorials";

import { Tutorial } from "../../../interfaces/Tutorial";

type TutorialPageProps = {
  tutorials: Tutorial[];
};

export const fetchTutorials = async (): Promise<object> => {
  const tutorials = getTutorials();
  console.log(tutorials);

  return {
    props: { tutorials },
  };
};

const TutorialList: NextPage<TutorialPageProps> = async ({ tutorials }) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {tutorials.map((post: Tutorial, index: number) => (
        <TutorialItem post={post} index={index} key={index} />
      ))}
    </div>
  );
};

export default TutorialList;
