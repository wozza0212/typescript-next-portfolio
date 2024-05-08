import Image from 'next/image';
import { FunctionComponent } from 'react';
type Props = {
    post: BlogPost;
    index: number;
};


type BlogPost = {
    title: string;
    author: string
    description: string;
    date: string;
    image: string;
  };

const BlogItem : FunctionComponent<Props> = (props : Props) => {
    const { post, index } = props;
    return (
        <div key={index} className='p-10 border-white border-2 m-10'>
        <h2>{post.title}</h2>
        <h2>{post.author}</h2>
        <p>{post.date}</p>
        <p>{post.description}</p>
        <Image src={post.image} alt={post.title} width={200} height={200} />
        <br />
      </div>
    )
}

export default BlogItem;