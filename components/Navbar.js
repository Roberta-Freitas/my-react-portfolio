import React, { useState } from "react";
// import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Navbar({ darkMode, setDarkMode }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    toggleMenu(); // Close the menu after clicking the hamburger
  };

  return (
    <nav className="py-10 mb-12 flex justify-between dark:text-white">
      <h1 className="font-burtons cursor-pointer mr-4 md:mr-0" onClick={scrollToTop}>
        developedbyroberta
      </h1>

      <div className="flex items-center">

        <BsFillSunFill
          onClick={() => setDarkMode(!darkMode)}
          className="cursor-pointer text-2xl"
        />
        <div className="ml-4 relative">
          <div
            className="cursor-pointer text-4xl"
            onClick={toggleMenu}
          >
            &#8801; {/* Hamburger icon */}
          </div>
          {menuVisible && (
            <ul className="absolute top-10 text-2xl right-0 mt-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <li>
                <ScrollLink
                  className="block mb-2"
                  to="home"
                  spy={true}
                  smooth={true}
                  onClick={toggleMenu}
                >
                  Home
                </ScrollLink>
              </li>

              <li>
                <ScrollLink
                  className="block mb-2"
                  to="projects"
                  spy={true}
                  smooth={true}
                  onClick={toggleMenu}
                >
                  Projects
                </ScrollLink>
              </li>

              <li>
                <ScrollLink
                  className="block mb-2"
                  to="skills"
                  spy={true}
                  smooth={true}
                  onClick={toggleMenu}
                >
                  Skills
                </ScrollLink>
              </li>

              <li>
                <ScrollLink
                  className="block mb-2"
                  to="about"
                  spy={true}
                  smooth={true}
                  onClick={toggleMenu}
                >
                  About
                </ScrollLink>
              </li>

              <li>
                <ScrollLink
                  className="block"
                  to="contact"
                  spy={true}
                  smooth={true}
                  onClick={toggleMenu}
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          )}
        </div>
        {/* <a
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-4 mr-4 md:ml-4 md:mr-4"
          href="https://drive.google.com/file/d/1mqvjkZm2e7UzE1x9bix2g313lnbhomwK/view?usp=sharing"
          target="_blank"
        >
          Resume
        </a> */}
      </div>
    </nav>
  );
}

export default Navbar;
