import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        class="text-3xl w-16 h-16 md:hidden lg:hidden my-4"
      >
        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
      </button>
      <div class={`${isMenuOpen ? "block" : "hidden"}`}>
        <ul class="flex flex-col items-center justify-center space-y-4">
          <li>
            <a href="#" class="">
              About
            </a>
          </li>
          <li>
            <a href="#" class="">
              My URLs
            </a>
          </li>
          <li>
            <a href="#" class="">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
