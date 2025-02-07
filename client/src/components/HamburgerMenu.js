import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div onClick={closeMenu}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleMenu();
        }}
        className="text-3xl w-16 h-16 md:hidden lg:hidden my-4"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: isMenuOpen ? "0%" : "100%", opacity: isMenuOpen ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50"
      >
        <div className="flex justify-center items-center h-full">
          <ul className="text-white text-center space-y-28">
            <li>
              <a href="/" className="text-5xl">
                About
              </a>
            </li>
            <li>
              <a href="/" className="text-5xl">
                My URLs
              </a>
            </li>
            <li>
              <a href="/" className="text-5xl">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default HamburgerMenu;
