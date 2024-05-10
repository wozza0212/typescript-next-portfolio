import BlogList from "@/components/Blog/blog-list";
import BaseLayout from "@/components/Layouts/base-layout";
import { getBlogs } from "../../lib/blogs";
import { NextPage } from "next";
import { Blog } from "../../interfaces/Blog";

type BlogPageProps = {
  blogs: Blog[];
}

const Home: NextPage<BlogPageProps> = () => {
  const blogs = getBlogs();
  return (
    <BaseLayout >
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Welcome to my Site</h1>
      <BlogList blogs={blogs}/>
      <p className="text-xl">
        This is my blog where I write about web development and other things I
        find interesting.
      </p>
    </main>
    </BaseLayout>
  );
}

export default Home;