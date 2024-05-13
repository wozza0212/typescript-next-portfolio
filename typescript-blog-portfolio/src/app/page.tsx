import BlogList from "@/components/Blog/blog-list";
import BaseLayout from "@/components/Layouts/base-layout";
import Image from "next/image";
import { getBlogs } from "../../lib/blogs";
import { NextPage } from "next";
import { Blog } from "../../interfaces/Blog";

type BlogPageProps = {
  blogs: Blog[];
};

const Home: NextPage<BlogPageProps> = () => {
  const blogs = getBlogs();
  return (
    <BaseLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-6xl font-bold">Tech Lark</h1>
        <br />
        <div className="h-64 w-96 relative">
          <Image 
            src='/Images/Main/main-image.jpg'
            alt="Main Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            />
        </div>
        <br />
        <div>
          <BlogList blogs={blogs} />
        </div>
        <p className="text-xl">
          This is my blog where I write about web development and other things I
          find interesting.
        </p>
      </main>
    </BaseLayout>
  );
};

export default Home;
