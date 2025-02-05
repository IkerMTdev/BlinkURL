import React from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header class="">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between sm:py-4 md:py-6 lg:py-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a
            href="#"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span class="sr-only">Your Company</span>
            <img class="h-12 w-auto" src={logo} alt="BlinkURL Logo" />
            <span class="self-center text-3xl font-semibold whitespace-nowrap">
              BlinkURL
            </span>
          </a>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a href="#" class="sm:me-4 md:me-6 lg:me-8">
            About
          </a>
          <a href="#" class="sm:me-4 md:me-6 lg:me-8">
            Marketplace
          </a>
          <a href="#" class="sm:me-4 md:me-6 lg:me-8">
            Contact
          </a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <button>
            <a href="#" class="sm:me-4 md:me-6 lg:me-8">
              Log in
            </a>
          </button>
          <button>
            <a href="#" class="sm:me-4 md:me-6 lg:me-8">
              Sign up
            </a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
