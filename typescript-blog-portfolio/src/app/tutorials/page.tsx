import TutorialList from "@/components/Tutorials/tutorial-list";
import { getTutorials } from "../../../lib/tutorials";
import { NextPage } from "next";
import BaseLayout from "@/components/Layouts/base-layout";

const tutorial: NextPage = () => {
  const tutorials = getTutorials();
  return (
    <BaseLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-2xl font-bold">tutorial</h1>
        <div>
          <p>tutorial page content</p>
          <TutorialList tutorials={tutorials} />
        </div>
      </main>
    </BaseLayout>
  );
};

export default tutorial;
