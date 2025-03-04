import BlogList from '@/components/Blog/blog-list'
import { getBlogs } from '../../../lib/blogs'
import { NextPage } from 'next'
import BaseLayout from '@/components/Layouts/base-layout'

const Blog: NextPage = () => {
  const blogs = getBlogs()
  return (
    <BaseLayout>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div>
          <h2>Blog page content</h2>
          <BlogList blogs={blogs} />
        </div>
      </main>
    </BaseLayout>
  )
}

export default Blog
