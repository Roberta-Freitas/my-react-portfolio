import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar({ darkMode, setDarkMode }) { 
  return (
    <nav className=" py-10 mb-12 flex justify-between dark:text-white">
      <h1 className=" text-xl font-burtons">developedbyroberta</h1>
      <ul className=" flex items-center">
        <li>
          <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/>
        </li>
        <li>
          <a className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="https://www.canva.com/design/DAFvRumdVu0/6c_zMm19E1jng7eHlDt1aQ/edit?utm_content=DAFvRumdVu0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
