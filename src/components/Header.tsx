import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="max-w-[1080px] flex bg-black items-center justify-between pt-20 absolute left-0 right-0 mx-auto px-1">
      <FontAwesomeIcon icon={faBars} size="2xl" style={{ color: "#ffffff" }} />
      <Logo />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        size="2xl"
        style={{ color: "#ffffff" }}
      />
    </div>
  );
};

export default Header;
