import { useState } from "react";
import Logo from "../svg/logo";
import Burger from "../svg/Burger";

function Navbar() {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <>
      <nav className=" flex fixed justify-center items-center  w-full bg-[#202020] border-gray-200 dark:bg-[#202020]">
        <div className="container flex flex-wrap items-center justify-between m-7">
          {/* logo */}
          <a href="" className="flex items-center space-x-3 rtl:strokeLinejoin">
            <Logo />
            <span className="self-center text-2xl font-semibold uppercase whitespace-nowrap dark:text-white">
              barbercrop
            </span>
          </a>

          {/* page */}
          <div
            className="relative items-center justify-between hidden md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex   before:content-[''] absolute top-0 font-medium uppercase border border-gray-100 rounded-lg md:p-0 bg-[#202020] gap-10 rtl:strokeLinejoin md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-[#202020] md:dark:bg-[#202020] dark:border-gray-700">
              <li className="">
                <a
                  href="#"
                  className="block text-white bg-white rounded md:bg-transparent md:text-white md:dark:text-white md:hover:text-red-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block text-white bg-white rounded md:bg-transparent md:text-white md:dark:text-white md:hover:text-red-500"
                  aria-current="page"
                >
                  about
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-white bg-white rounded md:bg-transparent md:text-white md:dark:text-white md:hover:text-red-500"
                  aria-current="page"
                >
                  services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-white bg-white rounded md:bg-transparent md:text-white md:dark:text-white md:hover:text-red-500"
                  aria-current="page"
                >
                  blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-white bg-white rounded md:bg-transparent md:text-white md:dark:text-white md:hover:text-red-500"
                  aria-current="page"
                >
                  contacts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-white bg-white rounded md:bg-transparent md:text-white md:dark:text-white md:hover:text-red-500"
                  aria-current="page"
                >
                  pages
                </a>
              </li>
            </ul>
          </div>

          {/* dropdown toggle  */}
          <div className="flex items-center justify-center gap-10 space-x-3 md:order-2 md:space-x-0 rtl:strokeLinejoin">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
              onClick={() => {
                setOpenProfile((prev) => {
                  openProfile && Dropdown;
                });
              }}
            >
              <img
                className="w-8 h-8 rounded-full"
                src="https:via.placeholder.com/100x100"
                alt="user photo"
              />
            </button>
            <button
              type="button"
              className="p-3 text-sm font-medium text-center text-red-700 uppercase border border-red-700 rounded-lg hover:text-white hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
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
        </div>
      </nav>
    </>
  );
}

export default Navbar;

// function Dropdown() {
//   return (
//     <>
//       {/* <!-- Dropdown menu --> */}
//       <div
//         className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
//         id="user-dropdown"
//       >
//         <div className="px-4 py-3">
//           <span className="block text-sm text-gray-900 dark:text-white">
//             Bonnie Green
//           </span>
//           <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
//             name@flowbite.com
//           </span>
//         </div>
//         <ul className="py-2" aria-labelledby="user-menu-button">
//           <li>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//             >
//               Dashboard
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//             >
//               Settings
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//             >
//               Earnings
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//             >
//               Sign out
//             </a>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }
