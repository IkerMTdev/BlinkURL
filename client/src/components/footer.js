import React from "react";
import "../styles/footer.css";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer class="rounded-lg shadow-sm m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} class="h-12" alt="BlinkURL Logo" />
            <span class="self-center text-3xl font-semibold whitespace-nowrap">
              BlinkURL
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
            <li>
              <a
                href="https://flowbite.com/"
                class="hover:underline me-4 md:me-6"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="https://flowbite.com/"
                class="hover:underline me-4 md:me-6"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://flowbite.com/"
                class="hover:underline me-4 md:me-6"
              >
                Licensing
              </a>
            </li>
            <li>
              <a href="https://flowbite.com/" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span class="block text-sm sm:text-center">
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
