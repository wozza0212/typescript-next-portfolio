import { NextPage } from "next";
import Image from "next/image";

type BlogPost = {
  title: string;
  description: string;
  date: string;
  image: string;
};

type BlogPageProps = {
  mockposts: BlogPost[];
};

const BlogPage: NextPage<BlogPageProps> = ({ mockposts }) => {
  return (
    <div>
      <h1>Blog</h1>
      <p>Blog page content</p>
      <br />
      {mockposts.map((post: BlogPost, index: number) => (
        <div key={index}>
          <p>{index}</p>
          <h2>{post.title}</h2>
          <p>{post.date}</p>
          <p>{post.description}</p>
          <Image src={post.image} alt={post.title} width={200} height={200} />
          <br />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
