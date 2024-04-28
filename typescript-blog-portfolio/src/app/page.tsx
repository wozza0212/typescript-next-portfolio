import BaseLayout from "@/components/Layouts/base-layout";
import NavBar from "@/components/NavBar/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <BaseLayout >
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Welcome to my Site</h1>
      <p className="text-xl">
        This is my blog where I write about web development and other things I
        find interesting.
      </p>
    </main>
    </BaseLayout>
  );
}
