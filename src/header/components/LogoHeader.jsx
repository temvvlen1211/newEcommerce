import Logo from "../../svg/Logo";

function LogoHeader() {
  return (
    <a href="" className="flex items-center space-x-3 rtl:strokeLinejoin">
      <Logo />
      <span className="self-center text-2xl font-semibold uppercase whitespace-nowrap text-white">
        barbercrop
      </span>
    </a>
  );
}
export default LogoHeader;
