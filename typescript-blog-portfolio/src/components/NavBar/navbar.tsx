"use client";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "./navbar.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
//link to sandbox needs adding if cant work dropdown menu

const NavBar = () => {

  return (
    <nav className={styles.nav}>
      <div className={styles.outerNavContainer}>
        <div className={styles.navInnerLeft}>
          <Link href="/" className={styles.navLogo}>
            <Image
              src="/Images/NextLogo.png"
              alt="Logo"
              width={40}
              height={40}
            />
          </Link>
          <ul className={styles.navLeftUl}>
          <li className={styles.navListItem}>
              <Link href="/">
                <p className={styles.navText}>Home</p>
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link href="/about">
                <p className={styles.navText}>About</p>
              </Link>
            </li>
          <ul className={styles.dropdown}>
            <button>
              <span>
                <li className={styles.dropdownSpan}>
                  <p>Projects</p>
                  <IoMdArrowDropdown
                    style={{
                      marginLeft: "2px",
                      verticalAlign: "middle",
                      marginTop: "4",
                    }}
                  />
                </li>
              </span>
            </button>
            <div className={styles.dropdownContent}>
              <ul>
                <li>
                  <Link href="/sandbox">
                    <p>Sandbox</p>
                  </Link>
                </li>
                <li>
                  <Link href="/sandbox/form">
                    <p>Form </p>
                  </Link>
                </li>
                <li>
                  <Link href="/sandbox/pokedex">
                    <p>Pokedex</p>
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
          </ul>
        </div>
        <div id="navbar-default">
          <ul className={styles.navRightUl}>
            <li className={styles.navListItem}>
              <Link href="/blog">
                <p className={styles.navText}>Blog</p>
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link href="/tutorials">
                <p className={styles.navText}>Tutorials</p>
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link href="/about">
                <p className={styles.navText}>GitHub</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
