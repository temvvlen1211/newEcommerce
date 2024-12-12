import Burger from "../../svg/Burger";
import { useState } from "react";

function DropDownHeader() {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className="flex items-center space-x-0 md:order-2 md:space-x-7 rtl:strokeLinejoin ">
      <button
        type="button"
        className="hidden text-sm bg-gray-800 rounded-full md:block md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
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
          src="/img/kostum.jpg"
          alt="user photo"
        />
      </button>

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
  );
}
export default DropDownHeader;
