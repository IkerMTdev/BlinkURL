import React from "react";
import "../styles/header.css";
import logo from "../assets/images/logo.png";
import HamburgerMenu from "./HamburguerMenu";

const Header = () => {
  return (
    <header>
      <nav class="w-full max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:py-4 md:py-6 lg:py-8">
        <div class="flex lg:flex-1">
          <a
            href="#"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img class="h-12 w-auto" src={logo} alt="BlinkURL Logo" />
            <span class="self-center text-3xl whitespace-nowrap">BlinkURL</span>
          </a>
        </div>
        <HamburgerMenu/>

        <div class="flex md:gap-x-8 lg:gap-x-12 hidden md:flex lg:flex">
          <a href="#" class="me-4 md:me-6 lg:me-8">
            About
          </a>
          <a href="#" class="me-4 md:me-6 lg:me-8">
            My URLs
          </a>
          <a href="#" class="me-4 md:me-6 lg:me-8">
            Contact
          </a>
        </div>
        <div class="hidden md:flex lg:flex flex-1 lg:justify-end">
          <button class="me-4">
            <a href="#">LOG IN</a>
          </button>
          <button>
            <a href="#">SIGN UP</a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
