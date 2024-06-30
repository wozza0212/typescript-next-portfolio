import BlogList from "@/components/Blog/blog-list";
import { getBlogs } from "../../../lib/blogs";
import { NextPage } from "next";
import BaseLayout from "@/components/Layouts/base-layout";

const Blog: NextPage = () => {
  const blogs = getBlogs();
  return (
    <BaseLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-2xl font-bold">Blog</h1>
        <div>
          <p>Blog page content</p>
          <BlogList blogs={blogs} />
        </div>
      </main>
    </BaseLayout>
  );
};

export default Blog;
