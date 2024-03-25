import React from "react";
import { motion } from "framer-motion";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <motion.div
        className="border-4 border-solid border-gray-300 rounded-full h-12 w-12"
        style={{ borderTopColor: "#7986cb" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      ></motion.div>
    </div>
  );
};

export default Spinner;
