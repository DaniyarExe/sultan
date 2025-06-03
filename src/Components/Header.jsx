import React, { useState } from "react";
import { Link } from "react-scroll";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full pt-5 pb-10 bg-black">
      <nav className="w-full flex items-center justify-between px-4">
        <a
          className="font-bold hover:text-white uppercase text-light-gray text-lg tracking-widest"
          href="/"
        >
          Sultan Dzumabekov
        </a>
        {/* Desktop Navigation */}
        <div className="flex items-center gap-6 text-lg text-light-gray max-md:hidden">
          <Link
            to="work-experience"
            smooth={true}
            duration={500}
            className="hover:text-white cursor-pointer"
          >
            Work Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-white cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-white cursor-pointer"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="hidden max-md:flex">
          <button type="button" className="text-white" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-menu-2"
            >
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          </button>
        </div>

        {/* Sliding Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full text-white z-50 transition-transform duration-300 bg-gray-900 shadow-lg ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } w-3/4 max-w-sm mobile-menu`}
        >
          <button
            type="button"
            className="absolute top-5 right-5 text-white"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-x"
            >
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </button>
          <ul className="flex flex-col gap-6 text-lg p-6 border-t border-gray-700">
            <li>
              <Link
                to="work-experience"
                smooth={true}
                duration={500}
                className="hover:text-gray-300 cursor-pointer"
                onClick={toggleMenu}
              >
                Work Experience
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="hover:text-gray-300 cursor-pointer"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-gray-300 cursor-pointer"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
