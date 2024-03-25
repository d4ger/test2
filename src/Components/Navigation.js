import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavigationMe from "./NavigationMe";

function Navigation() {
  const [showMenu, setShowMenu] = useState({
    loading: false,
  });

  return (
    <nav>
      <span className="text-xl">
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
        <div className="fixed bg-white top-0 left-0 w-2/3 xs:2/3 sm:w-2/4 md:w-1/4 lg:w-1/4 h-full z-50 shadow">
          <span className="font-bold">The menu</span>
          <ul>
            <li>
              <Link to="/" className="text-blue-500 block py-2 px-4 mt-4 rounded transition duration-300 ease-in-out hover:bg-blue-100">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-blue-500 block py-2 px-4 mt-4 rounded transition duration-300 ease-in-out hover:bg-blue-100">
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
