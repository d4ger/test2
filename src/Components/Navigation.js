import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavigationMe from "./NavigationMe";

function Navigation() {
  const [showMenu, setShowMenu] = useState(null);

  return (
    <nav>
      <span className="text-xl cursor-pointer">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>

      {showMenu && (
        <>
          <div
            className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
            onClick={() => setShowMenu(false)}
          ></div>
          <NavigationMe closeMenu={() => setShowMenu(false)} />
        </>
      )}

      {showMenu && (
        <NavigationMe />
      )}
    </nav>
  );
}

export default Navigation;
