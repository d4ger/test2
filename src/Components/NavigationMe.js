import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5
    }
  },
  closed: {
    x: "-100%",
    transition: {
      ease: "easeIn",
      duration: 0.5
    }
  }
};

function NavigationMe({ isOpen, closeMenu }) {
  return (
    <motion.div
      className="fixed bg-white top-0 left-0 w-2/3 xs:2/3 sm:w-2/4 md:w-1/4 lg:w-1/4 h-full z-50 shadow"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
    >
      <div>The menu</div>
      <ul>
        <li>
          <Link to="/" className="text-blue-500 py-3 border-t border-b block" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-blue-500 py-3 border-b block" onClick={closeMenu}>About</Link>
        </li>
      </ul>
    </motion.div>
  );
}

export default NavigationMe;
