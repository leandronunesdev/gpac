import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import OutsideClickHandler from "./OutsideClickHandler";
import SectionLink from "./SectionLink";
import FormInput from "./FormInput";
import Button from "./Button";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const location = useLocation();
  const path = location.pathname;

  console.log(path);

  const handleSearch = () => {
    console.log(search);
    setShowSearch(false);
  };

  return (
    <div className="max-w-[1280px] flex items-center justify-between pt-20 absolute left-0 right-0 mx-auto px-1">
      <div className={`relative p-[8px] ${showMenu ? "bg-white" : ""}`}>
        <OutsideClickHandler onOutsideClick={() => setShowMenu(false)}>
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
                {path === "/contact" ? (
                  <Link to="/">
                    <li className="font-raleway text-[24px] cursor-pointer">
                      home
                    </li>
                  </Link>
                ) : (
                  <>
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
                  </>
                )}
                <SectionLink
                  to="hire"
                  text="contact"
                  onClick={() => setShowMenu(false)}
                />
              </ul>
            </menu>
          )}
        </OutsideClickHandler>
      </div>
      <Logo />
      <div className={`relative p-[8px] ${showSearch ? "bg-white" : ""}`}>
        <OutsideClickHandler onOutsideClick={() => setShowSearch(false)}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="2xl"
            style={showSearch ? { color: "black" } : { color: "#ffffff" }}
            onClick={() => setShowSearch(!showSearch)}
            className="cursor-pointer"
          />
          {showSearch && (
            <menu className="bg-white absolute left-[-152px] top-[48px] p-[8px] w-[200px]">
              <FormInput
                type="text"
                name="search"
                placeholder="search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                text="search"
                version="search"
                onClick={() => handleSearch()}
              />
            </menu>
          )}
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default Header;
