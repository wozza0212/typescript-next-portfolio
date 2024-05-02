import { NextPage } from "next";

type BlogPost = {
  title: string;
  description: string;
  date: string | null;
  //   content: string | null;
};

const mockposts: BlogPost[] = [
  {
    title: "My first post",
    description: "This is my first post",
    date: "2024-05-01",
  },
  {
    title: "My second post",
    description: "This is my second post",
    date: "2024-05-01",
  },
  {
    title: "My third post",
    description: "This is my third post",
    date: "2024-05-01",
  },
  {
    title: "My fourth post",
    description: "This is my fourth post",
    date: "2024-05-01",
  },
];

const BlogPage = ({ mockposts }: { mockposts: BlogPost[] }) => {
  return (
    <div>
      <h1>Blog</h1>
      <p>Blog page content</p>
      <br></br>
      {mockposts.map((post: BlogPost, index: number) => (
        <div key={index}>
          <p>{index}</p>
          <h2>{post.title}</h2>
          <p>{post.date}</p>
          <p>{post.description}</p>
          {/* <p>{post.author}</p>

          <p>{post.content}</p> */}
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
