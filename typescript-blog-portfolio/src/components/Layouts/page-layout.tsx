import Head from "next/head";
import { FunctionComponent, PropsWithChildren } from "react";

const PageLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Portfolio - Filip Jerga</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"></div>
      <div>{children}</div>
    </>
  );
};

export default PageLayout;
