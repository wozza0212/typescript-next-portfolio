import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="w-screen items-center bg-white p-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center rtl:space-x-reverse">
          <Link href="/" className="flex py-2 px-3 items-center rtl:space-x-reverse">
            <Image
              src="/Images/NextLogo.png"
              alt="Logo"
              width={50}
              height={50}
            />
          </Link>
          <ul className="flex items-center float-left ">
            <li>
              <Link href="/sandbox">
                <p className="py-2 px-3 block text-black hover:bg-gray-400 float-left">
                  SandBox
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex items-center justify-between">
            <li>
              <Link href="/blog">
                <p className="py-2 px-3 block text-black hover:bg-gray-400">
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="py-2 px-3 block text-black hover:bg-gray-400">
                  About
                </p>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <p className="py-2 px-3 block text-black hover:bg-gray-400">
                  Blog
                </p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="py-2 px-3 block text-black hover:bg-gray-400">
                  GitHub
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
