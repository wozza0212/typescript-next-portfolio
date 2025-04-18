import { NextPage } from "next";
import BlogItem from "./blog-item";
import { getBlogs } from "../../../lib/blogs";

import { Blog } from "../../../interfaces/Blog";

type BlogPageProps = {
  blogs: Blog[];
};

export const fetchBlogs = async (): Promise<object> => {
  const blogs = getBlogs();
  console.log(blogs);

  return {
    props: { blogs },
  };
};

const BlogList: NextPage<BlogPageProps> = async ({ blogs }) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {blogs.map((post: Blog, index: number) => (
        <BlogItem post={post} index={index} key={index} />
      ))}
    </div>
  );
};

export default BlogList;
