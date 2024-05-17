import BlogList from "@/components/Blog/blog-list";
import { getBlogs } from "../../../lib/blogs";
import { NextPage } from "next";
import BaseLayout from "@/components/Layouts/base-layout";

const Blog: NextPage = () => {
  const blogs = getBlogs();
  return (
    <BaseLayout>
      <div>
        <h1>Blog</h1>
        <p>Blog page content</p>
        <BlogList blogs={blogs} />
      </div>
    </BaseLayout>
  );
};

export default Blog;
