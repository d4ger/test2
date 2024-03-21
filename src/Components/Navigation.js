import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import { navigationMenu } from "./NavigationMenu";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const transitions = useTransition(showMenu, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>

      {transitions(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className="fixed top-0 left-0 z-50 w-full h-full bg-blueGray-t-50"
              onClick={() => setShowMenu(false)}
            >This is the menu</animated.div>
          )
      )}
    </nav>
  );
}

export default Navigation;
