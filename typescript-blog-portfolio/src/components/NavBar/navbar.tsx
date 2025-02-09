'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/legacy/image'
import styles from './navbar.module.css'
import { IoMdArrowDropdown } from 'react-icons/io'
//link to sandbox needs adding if cant work dropdown menu

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.outerNavContainer}>
        <div className={styles.navInnerLeft}>
          <Link href='/' className={styles.navLogo}>
            <Image
              src='/Images/NextLogo.png'
              alt='Logo'
              width={40}
              height={40}
            />
          </Link>
          <ul className={styles.dropdown}>
            <button>
              <span>
                <li className={styles.dropdownSpan}>
                  <p>SandBox</p>
                  <IoMdArrowDropdown
                    style={{
                      marginLeft: '8px',
                      verticalAlign: 'middle',
                      marginTop: '4',
                    }}
                  />
                </li>
              </span>
            </button>
            <div className={styles.dropdownContent}>
              <ul>
                <li>
                  <Link href='/sandbox'>
                    <p>Sandbox</p>
                  </Link>
                </li>
                <li>
                  <Link href='/sandbox/form'>
                    <p>Form </p>
                  </Link>
                </li>
                <li>
                  <Link href='/sandbox/pokedex'>
                    <p>Pokedex</p>
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className={styles.navRightUl}>
            <li>
              <Link href='/'>
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
