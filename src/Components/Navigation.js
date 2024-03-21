import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from '@react-spring/web';
import { Link } from "react-router-dom";
import NavigationMe from "./NavigationMe";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  let menu
  let menuMask

  if(showMenu){
    menu =
    <NavigationMe closeMenu={() => setShowMenu(false)}/>

    menuMask = 
    <div
      className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
      onClick={() => setShowMenu(false)}>

    </div>
  
  }

  const [transitions] = useTransition(showMenu, () => ({
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
  }))


  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} 
        onClick={() => setShowMenu(!showMenu)} />
      </span>

      {menuMask}

      {menu}

      {
        transitions(({props, item}) =>
            item && 
            <animated.div 
                style={props}
                itemID={item}
                className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
            >
              <span className="font-bold">
                The menu
              </span>
              <ul>
          <li>
            <Link to="/" className="text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-500">About</Link>
          </li>
        </ul>
            </animated.div>
            )
        }
    </nav>
  );
}

export default Navigation;
