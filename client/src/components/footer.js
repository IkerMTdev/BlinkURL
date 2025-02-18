import React from "react";
import "../styles/footer.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-screen-xl mx-auto px-4 sm:py-4 md:py-6 lg:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-12" alt="BlinkURL Logo" />
            <span className="self-center text-3xl whitespace-nowrap">BlinkURL</span>
          </Link>
          <ul className="flex flex-wrap justify-center sm:mb-4">
            <li>
              <a href="https://flowbite.com/" className="me-4 md:me-6 lg:me-8">
                My URLs
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-4 md:my-6 lg:my-8" />
        <span className="block text-sm text-center">
          &copy; 2025{" "}
          <Link to="/" className="hover:underline">
            BlinkURL™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
