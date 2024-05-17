import { Metadata, NextPage } from 'next/types';
import PageLayout from '@/components/Layouts/page-layout';
import { getAllBlogSlugs, getBlogBySlugWithMarkdown } from '../../../../lib/blogs';
import { Blog } from '../../../../interfaces/Blog';
import BaseLayout from '@/components/Layouts/base-layout';
const css = {
    h: 'prose-h1:text-white prose-h2:text-white prose-h3:text-white prose-h4:text-white prose-h5:text-white prose-h6:text-white',
    p: 'prose-p:text-yellow'

}

export const generateStaticParams = async () => {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    params: { slug },
  }));
};

interface BlogDetailProps {
  params: {
    slug: string;
  };
}


export const metadata: Metadata = {
  title: "Blog Detail Page",
  description: "By Wozza",
};


const BlogDetail: NextPage<BlogDetailProps> = async ({ params }) => {
  const { slug } = params;
  const blog: Blog = await getBlogBySlugWithMarkdown(slug);
  return (
    <BaseLayout>

        <div className="w-2/3 m-auto">
          <article className={`prose lg:prose-lg ${css.h} ${css.p} markdown-image-50`}>
            <div dangerouslySetInnerHTML={{ __html: blog.content}} />
          </article>
        </div>

    </BaseLayout>
  );
};

export default BlogDetail;