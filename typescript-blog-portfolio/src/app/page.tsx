import BlogPage from "@/components/Blog/blog-page.tsx";
import BaseLayout from "@/components/Layouts/base-layout";

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
      date: "2024-05-01"
  },
  {
      title: "My second post",
      description: "This is my second post",
      date: "2024-05-01"
  },
  {
      title: "My third post",
      description: "This is my third post",
      date: "2024-05-01"
  },
  {
      title: "My fourth post",
      description: "This is my fourth post",
      date: "2024-05-01"
  }
]

export default function Home() {
  return (
    <BaseLayout >
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Welcome to my Site</h1>
      <BlogPage mockposts={mockposts}/>
      <p className="text-xl">
        This is my blog where I write about web development and other things I
        find interesting.
      </p>
    </main>
    </BaseLayout>
  );
}
