import LogoHeader from "./components/LogoHeader";
import PageHeader from "./components/PageHeader";
import DropDownHeader from "./components/DropDownHeader";

function Header() {
  return (
    <>
      <header className=" top-0 flex justify-center items-center  w-full  border-gray-200 dark:bg-[#202020]  sticky z-50">
        <nav className="container flex flex-wrap items-center justify-between py-10 ">
          {/* logo */}
          <LogoHeader />

          {/* page */}
          <PageHeader />

          {/* dropdown toggle  */}
          <DropDownHeader />
        </nav>
      </header>
    </>
  );
}

export default Header;
