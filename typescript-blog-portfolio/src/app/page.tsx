import BlogList from '@/components/Blog/blog-list'
import TutorialList from '@/components/Tutorials/tutorial-list'
import BaseLayout from '@/components/Layouts/base-layout'
import Image from 'next/legacy/image'
import { getBlogs } from '../../lib/blogs'
import { NextPage } from 'next'
import { Blog } from '../../interfaces/Blog'
import { Tutorial } from '../../interfaces/Tutorial'
import { getTutorials } from '../../lib/tutorials'

type BlogPageProps = {
  blogs: Blog[]
}

type TutorialPageProps = {
  tutorials: Tutorial[]
}

const Home: NextPage<BlogPageProps | TutorialPageProps> = () => {
  const blogs = getBlogs()
  const tutorials = getTutorials()
  return (
    <BaseLayout>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <h1 className='text-6xl font-bold'>Tech Talks</h1>
        <br />
        <div>
          <div>
            <h3>Blog Posts</h3>
            <BlogList blogs={blogs} />
          </div>
          <div className='pt-10'>
            <h3>Tutorials</h3>
            <TutorialList tutorials={tutorials} />
          </div>
        </div>
        <br />
        <div></div>
        <p className='text-xl'>
          This is my blog where I write about web development and other things I
          find interesting.
        </p>
      </main>
    </BaseLayout>
  )
}

export default Home
