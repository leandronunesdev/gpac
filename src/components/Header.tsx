import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import OutsideClickHandler from "./OutsideClickHandler";
import SectionLink from "./SectionLink";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleOutsideClick = () => {
    console.log("Clicked outside the component");
    setShowMenu(false);
  };

  return (
    <div className="max-w-[1080px] flex items-center justify-between pt-20 absolute left-0 right-0 mx-auto px-1">
      <div className={`relative p-[8px] ${showMenu ? "bg-white" : ""}`}>
        <OutsideClickHandler onOutsideClick={handleOutsideClick}>
          <FontAwesomeIcon
            icon={faBars}
            size="2xl"
            style={showMenu ? { color: "black" } : { color: "#ffffff" }}
            onClick={() => setShowMenu(!showMenu)}
            className="cursor-pointer"
          />
          {showMenu && (
            <menu className="bg-white absolute left-0 top-[48px] p-[8px] w-[150px]">
              <ul>
                <SectionLink
                  to="about"
                  text="about us"
                  onClick={() => setShowMenu(false)}
                />
                <SectionLink
                  to="video"
                  text="video"
                  onClick={() => setShowMenu(false)}
                />
                <SectionLink
                  to="playlists"
                  text="playlist"
                  onClick={() => setShowMenu(false)}
                />
                <SectionLink
                  to="contact"
                  text="contact"
                  onClick={() => setShowMenu(false)}
                />
              </ul>
            </menu>
          )}
        </OutsideClickHandler>
      </div>
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
