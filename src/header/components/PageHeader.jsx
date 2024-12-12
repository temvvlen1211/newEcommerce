function PageHeader() {
  return (
    <div
      className="items-center justify-between hidden md:flex md:w-auto md:order-1"
      id="navbar-user"
    >
      <ul className="flex font-medium uppercase border border-gray-100 rounded-lg space-x-7 md:p-0 rtl:strokeLinejoin md:flex-row md:mt-0 md:border-0">
        <li>
          <a
            href="#"
            className=" md:bg-transparent md:text-white md:dark:text-white md:hover:text-red-500"
            aria-current="page"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#"
            className=" md:bg-transparent md:text-white md:dark:text-white md:hover:text-red-500"
            aria-current="page"
          >
            about
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block md:bg-transparent md:text-white md:dark:text-white md:hover:text-red-500"
            aria-current="page"
          >
            services
          </a>
        </li>
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
  );
}
export default PageHeader;
