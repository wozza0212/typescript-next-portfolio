import Link from 'next/link'
import Image from 'next/legacy/image'
import { FunctionComponent } from 'react'
type Props = {
  post: TutorialPost
  index: number
}

type TutorialPost = {
  title: string
  author: string
  description: string
  date: string
  image: string
  slug: string
}

const TutorialItem: FunctionComponent<Props> = (props: Props) => {
  const { post, index } = props
  return (
    <div className='group'>
      <Link href={`/tutorials/${post.slug}`}>
        <div
          key={index}
          className='h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40'
        >
          <div className='relative h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40'>
            <Image
              src={post.image}
              alt={post.title}
              objectFit='contain'
              layout='fill'
              className='rounded-lg hover:cursor-pointer'
            />
          </div>
        </div>
        <div className='mt-4 flex justify-between'>
          <div>
            <h2 className='text-lg text-black font-bold'>{post.title}</h2>
            <h2 className='text-sm text-white font-bold'>{post.author}</h2>
            <p className='mt-1 text-md text-gray-900'>{post.date}</p>
            <p className='mt-1 text-md text-gray-900'>{post.description}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TutorialItem
