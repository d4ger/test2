import React from "react";
import { Link } from "react-router-dom";

function NavigationMe(props) {
  return (
    <>
      <div
        className="fixed bg-white top-0 left-0 w-2/3 xs:2/3 sm:w-2/4 md:w-1/4 lg:w-1/4 h-full z-50 shadow">
          The menu
          <ul>
            <li>
              <Link to="/" className="text-blue-500 py-3 border-t border-b block" onClick={props.closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-blue-500 py-3 border-b block" onClick={props.closeMenu}>About</Link>
            </li>
          </ul>
      </div>
    </>
  );
}

export default NavigationMe;
