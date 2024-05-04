import { NextPage } from "next";
import Image from "next/image";
import BlogItem from "./blog-item";

type BlogPost = {
  title: string;
  description: string;
  date: string;
  image: string;
};

type BlogPageProps = {
  mockposts: BlogPost[];
};

const BlogList: NextPage<BlogPageProps> = ({ mockposts }) => {
  return (
    <div>
      <h1>Blog</h1>
      <p>Blog page content</p>
      <br />
      {mockposts.map((post: BlogPost, index: number) => (
        <BlogItem post={post} index={index} key={index} />
      ))}
    </div>
  );
};

export default BlogList;
