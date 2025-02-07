import React from "react";
import "../styles/footer.css";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:py-4 md:py-6 lg:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-12" alt="BlinkURL Logo" />
            <span className="self-center text-3xl whitespace-nowrap">BlinkURL</span>
          </a>
          <ul className="flex flex-wrap justify-center sm:mb-4">
            <li>
              <a href="https://flowbite.com/" className="me-4 md:me-6 lg:me-8">
                About
              </a>
            </li>
            <li>
              <a href="https://flowbite.com/" className="me-4 md:me-6 lg:me-8">
                My URLs
              </a>
            </li>
            <li>
              <a href="https://flowbite.com/" className="me-4 md:me-6 lg:me-8">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-4 md:my-6 lg:my-8" />
        <span className="block text-sm text-center">
          © 2025{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            BlinkURL™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
