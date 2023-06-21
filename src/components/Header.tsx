import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="w-[1080px] flex bg-black items-center m-auto justify-between pt-20">
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
