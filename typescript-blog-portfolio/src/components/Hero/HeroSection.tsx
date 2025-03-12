'use client'
import { FunctionComponent } from 'react'
import Link from 'next/link'
import { PhotoPlaceholder } from 'react-placeholder-image'
import styles from './hero.module.css'

const Hero: FunctionComponent = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textBox}>
        <div className='text-lg text-black'>
          <h2 className={styles.heroHeading}>
            Combining Design with Application<p>I`m A</p>
          </h2>

          <h2 className={styles.fullStack}>Full Stack Software Engineer</h2>
          <div>
            <p className={styles.thisSitePara}>
              This website is being created with the sole purpose to help{' '}
              <Link href='/about'>me</Link> develop my skills as a softare
              engineer, play with some design features that I dont always get to
              do at work, and hopefully to help teach and inspire others to
              begin or develop their software engineer career
            </p>
          </div>
        </div>
      </div>
      <PhotoPlaceholder className={styles.heroImage} width={650} height={650} />
    </div>
  )
}
export default Hero
