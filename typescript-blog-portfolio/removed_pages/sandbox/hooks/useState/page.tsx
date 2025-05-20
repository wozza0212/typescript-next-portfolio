"use client";
import BaseLayout from "@/components/Layouts/base-layout";
import UseStateBasics from "../../../../course/hooks/useState/basics";
import ListUpdater from "../../../../course/hooks/useState/list-states";
const Sandbox = () => {
  return (
    <BaseLayout>
      <div>
        <UseStateBasics />
        <ListUpdater ></ListUpdater>
      </div>
    </BaseLayout>
  );
};

export default Sandbox;
