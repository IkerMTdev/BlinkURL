import React from "react";
import "../styles/footer.css";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div class="w-full max-w-screen-xl mx-auto px-4 sm:py-4 md:py-6 lg:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} class="h-12" alt="BlinkURL Logo" />
            <span class="self-center text-3xl whitespace-nowrap">BlinkURL</span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 sm:mb-0">
            <li>
              <a href="https://flowbite.com/" class="me-4 md:me-6 lg:me-8">
                About
              </a>
            </li>
            <li>
              <a href="https://flowbite.com/" class="me-4 md:me-6 lg:me-8">
                My URLs
              </a>
            </li>
            <li>
              <a href="https://flowbite.com/" class="me-4 md:me-6 lg:me-8">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-4 md:my-6 lg:my-8" />
        <span class="block text-sm text-center">
          © 2025{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            BlinkURL™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
