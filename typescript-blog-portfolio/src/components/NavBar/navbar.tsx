import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="w-screen items-center bg-white p-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center rtl:space-x-reverse">
          <Image src="/Images/NextLogo.png" alt="Logo" width={50} height={50} />
        </Link>
        <span className="">GAP</span>
        <div  className='hidden w-full md:block md:w-auto' id="navbar-default">
          <ul className="flex items-center justify-between">
            <li>
              <Link href="/blog">
                <p className="py-2 px-3 block text-black">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="py-2 px-3 block text-black ">About</p>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <p className="py-2 px-3 block text-black">Blog</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="py-2 px-3 block text-black">GitHub</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
