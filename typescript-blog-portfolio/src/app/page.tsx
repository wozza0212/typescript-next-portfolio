import BlogList from "@/components/Blog/blog-list";
import BaseLayout from "@/components/Layouts/base-layout";

interface BlogPost {
  title: string;
  description: string;
  date: string;
  image: string;
};

const mockposts: BlogPost[] = [
  {
    title: "My first post",
    description: "This is my first post",
    date: "2024-05-01",
    image : '/Images/NextLogo.png'
  },
  {
    title: "My second post",
    description: "This is my second post",
    date: "2024-05-01",
    image : '/Images/NextLogo.png'
  },
  {
    title: "My third post",
    description: "This is my third post",
    date: "2024-05-01",
    image : '/Images/NextLogo.png'
  },
  {
    title: "My fourth post",
    description: "This is my fourth post",
    date: "2024-05-01",
    image : '/Images/NextLogo.png'
  },
];

export default function Home() {
  return (
    <BaseLayout >
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Welcome to my Site</h1>
      <BlogList mockposts={mockposts}/>
      <p className="text-xl">
        This is my blog where I write about web development and other things I
        find interesting.
      </p>
    </main>
    </BaseLayout>
  );
}
