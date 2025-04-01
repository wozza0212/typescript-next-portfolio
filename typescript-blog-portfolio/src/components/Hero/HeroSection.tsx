'use client'
import { FunctionComponent } from 'react'
import Link from 'next/link'
import { PhotoPlaceholder } from 'react-placeholder-image'
import styles from './hero.module.css'
import FormButton from '../Button/form-button'

const Hero: FunctionComponent = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textBox}>
        <div className='text-lg text-black'>
          <h2 className={styles.heroHeading}>
            Design, Create, Build, Learn, Teach
          </h2>
          <div>
            <p className={styles.thisSitePara}>
              Designing and building a website is not easy, especially when you
              {'`'}re doing it from the ground up, with little to no design
              experience! So why would anyone want to do it? Well, I personally
              wanted to become a more well rounded engineer!
            </p>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <FormButton type='button' version='primaryButton' onClick={() => {}}>
            Button1
          </FormButton>
          <FormButton type='button' version='primaryButton' onClick={() => {}}>
            Button2
          </FormButton>
        </div>
      </div>
      <PhotoPlaceholder className={styles.heroImage} width={650} height={650} />
    </div>
  )
}
export default Hero
