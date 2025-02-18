import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/hamburger_menu.css";
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
        className="fixed top-0 left-0 w-full h-full z-50 menu-desplegable"
      >
        <div className="flex justify-center items-start pt-20 h-full">
          <ul className="text-white text-center space-y-8">
            <li>
              <Link to="/urls" className="text-3xl link">
                My URLs
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default HamburgerMenu;
