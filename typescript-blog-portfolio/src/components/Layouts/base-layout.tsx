import type { NextPage } from "next";
import Link from "next/link";
import NavBar from "../NavBar/navbar";
import { FunctionComponent, PropsWithChildren } from "react";

const BaseLayout: FunctionComponent<PropsWithChildren> = ({
  children,
}: any) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex flex-col items-center justify-center flex-1">
          {children}
        </main>
        <footer className="w-full h-12 flex justify-center items-center bg-gray-800 text-white">
          <p>Generic Footer</p>
        </footer>
      </div>
    </>
  );
};

export default BaseLayout;
