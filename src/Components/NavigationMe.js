import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NavigationMe(props) {
  return (
    <>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 120, duration: 0.5 }}
        className="fixed bg-white top-0 left-0 w-2/3 xs:2/3 sm:w-2/4 md:w-1/4 lg:w-1/4 h-full z-50 shadow"
        style={{ padding: "20px", fontFamily: "Arial, sans-serif", fontSize: "20px", fontWeight: "bold" }}
      >
        {/* Contenido del sidebar */}
        Movie app - The menu
        <ul>
          <li>
            <Link
              to="/"
              className="text-blue-500 block py-2 px-4 mt-4 rounded transition duration-300 ease-in-out hover:bg-blue-100"
              onClick={props.closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-blue-500 block py-2 px-4 mt-4 rounded transition duration-300 ease-in-out hover:bg-blue-100"
              onClick={props.closeMenu}
            >
              About
            </Link>
          </li>
        </ul>
      </motion.div>
    </>
  );
}

export default NavigationMe;
