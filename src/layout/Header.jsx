import { Link } from "react-router-dom";
import Logo from "../svg/Logo";
import Burger from "../svg/Burger";

function Header() {
  return (
    <>
      <header className=" top-0 flex justify-center items-center  w-full  border-gray-200 bg-[#202020]  sticky z-50">
        <nav className="container flex flex-wrap items-center justify-between py-10 ">
          {/* logo */}
          <a href="" className="flex items-center space-x-3 rtl:strokeLinejoin">
            <Logo />
            <span className="self-center text-2xl font-semibold uppercase whitespace-nowrap text-white">
              barbercrop
            </span>
          </a>

          {/* page */}
          <div
            className="items-center justify-between hidden md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex font-medium uppercase border border-gray-100 rounded-lg space-x-7 md:p-0 rtl:strokeLinejoin md:flex-row md:mt-0 md:border-0">
              <Link to="/">
                <li
                  className=" md:bg-transparent md:text-white md:dark:text-white md:hover:text-red-500"
                  aria-current="page"
                >
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li
                  aria-current="page"
                  className=" md:bg-transparent md:text-white md:dark:text-white md:hover:text-red-500"
                >
                  about
                </li>
              </Link>
              <Link to="/services">
                <li
                  aria-current="page"
                  className=" md:bg-transparent md:text-white md:dark:text-white md:hover:text-red-500"
                >
                  Services
                </li>
              </Link>
              <li>
                <a
                  href="#"
                  className="block md:bg-transparent md:text-white md:dark:text-white md:hover:text-red-500"
                  aria-current="page"
                >
                  blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block md:bg-transparent md:text-white md:dark:text-white md:hover:text-red-500"
                  aria-current="page"
                >
                  contacts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block md:bg-transparent md:text-white md:dark:text-white md:hover:text-red-500"
                  aria-current="page"
                >
                  pages
                </a>
              </li>
            </ul>
          </div>

          {/* dropdown toggle  */}
          <div className="flex items-center space-x-0 md:order-2 md:space-x-7 rtl:strokeLinejoin ">
            <button
              type="button"
              className="hidden p-3 ml-6 text-sm font-medium text-center text-red-700 uppercase border border-red-700 rounded-lg md:block hover:text-white hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              book now
            </button>

            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <Burger />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
