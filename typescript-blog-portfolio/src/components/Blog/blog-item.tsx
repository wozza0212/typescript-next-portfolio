import Link from "next/link";
import Image from "next/legacy/image";
import { FunctionComponent } from "react";
type Props = {
  post: BlogPost;
  index: number;
};

type BlogPost = {
  title: string;
  author: string;
  description: string;
  date: string;
  image: string;
  slug: string;
};

const BlogItem: FunctionComponent<Props> = (props: Props) => {
  const { post, index } = props;
  return (
    <div className="group">
      <div
        key={index}
        className="h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40"
      >
        <Link href={`/blog/${post.slug}`}>
          <div className="relative h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40">
            <Image
              src={post.image}
              alt={post.title}
              objectFit="contain"
              layout="fill"
              className="rounded-lg hover:cursor-pointer"
            />
          </div>
        </Link>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h2 className="text-sm text-white font-bold">{post.title}</h2>
          <h2 className="text-sm text-white font-bold">{post.author}</h2>
          <p className="mt-1 text-sm text-gray-500">{post.date}</p>
          <p className="mt-1 text-sm text-gray-500">{post.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
