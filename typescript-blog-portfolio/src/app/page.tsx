import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Welcome to my blog</h1>
      <p className="text-xl">
        This is my blog where I write about web development and other things I
        find interesting.
      </p>
      <Link href="/blog">
        <p>Blog PAge</p>
      </Link>
    </main>
  );
}
