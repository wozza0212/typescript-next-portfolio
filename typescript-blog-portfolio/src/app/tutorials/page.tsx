import TutorialList from '@/components/Tutorials/tutorial-list'
import { getTutorials } from '../../../lib/tutorials'
import { NextPage } from 'next'
import BaseLayout from '@/components/Layouts/base-layout'

const Tutorial: NextPage = () => {
  const tutorials = getTutorials()
  return (
    <BaseLayout>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div>
          <h2>tutorial page content</h2>
          <TutorialList tutorials={tutorials} />
        </div>
      </main>
    </BaseLayout>
  )
}

export default Tutorial
