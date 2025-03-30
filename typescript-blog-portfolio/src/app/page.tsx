import BlogList from '@/components/Blog/blog-list'
import TutorialList from '@/components/Tutorials/tutorial-list'
import BaseLayout from '@/components/Layouts/base-layout'
import Image from 'next/legacy/image'
import { getBlogs } from '../../lib/blogs'
import { NextPage } from 'next'
import { Blog } from '../../interfaces/Blog'
import { Tutorial } from '../../interfaces/Tutorial'
import { getTutorials } from '../../lib/tutorials'
import { Hero } from '@/components'

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
        <Hero></Hero>
        <h1 className='text-8xl font-bold text-black'>Tech Talks</h1>
        <br />
        <div>
          <div>
            <h3 className='text-3xl font-bold text-black'>Blog Posts</h3>
            <BlogList blogs={blogs} />
          </div>
          <div className='pt-10'>
            <h3 className='text-3xl font-bold text-black'>Tutorials</h3>
            <TutorialList tutorials={tutorials} />
          </div>
        </div>
        <br />
      </main>
    </BaseLayout>
  )
}

export default Home
