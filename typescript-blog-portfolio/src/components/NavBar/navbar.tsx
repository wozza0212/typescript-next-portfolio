import Link from 'next/link'
import Image from 'next/image'
import styles from './navbar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.outerNavContainer}>
        <div className={styles.navInnerLeft}>
          <Link href='/' className={styles.navLogo}>
            <Image
              src='/Images/NextLogo.png'
              alt='Logo'
              width={50}
              height={50}
            />
          </Link>
          <ul className=''>
            <li>
              <Link href='/sandbox'>
                <p className={styles.navText}>SandBox</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className={styles.navRightUl}>
            <li>
              <Link href='/blog'>
                <p className={styles.navText}>Home</p>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <p className={styles.navText}>About</p>
              </Link>
            </li>
            <li>
              <Link href='/blog'>
                <p className={styles.navText}>Blog</p>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <p className={styles.navText}>GitHub</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
