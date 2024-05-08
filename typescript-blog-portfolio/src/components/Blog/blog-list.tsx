import { NextPage } from "next";
import BlogItem from "./blog-item";
import { getBlogs } from "../../../lib/blogs";

type BlogPost = {
  title: string;
  description: string;
  date: string;
  image: string;
  author: string;
};

type BlogPageProps = {
  blogs: BlogPost[];
};

export const fetchBlogs = async () : Promise<object> => {

  const blogs = getBlogs();
  console.log(blogs)
  
  return {
    props: {blogs}
  }

}

const BlogList: NextPage<BlogPageProps> = async ({ blogs }) => {
  return (
    <div>
      <br />
      {blogs.map((post: BlogPost, index: number) => (
        <BlogItem post={post} index={index} key={index} />
      ))}
    </div>
  );
};

export default BlogList;
