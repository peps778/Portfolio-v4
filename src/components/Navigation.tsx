import { useState } from "react";
import navLogo from "../assets/images/code - white.png";

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-[#020618] z-30 border-gray-200 font-poppins px-20">
      <div className="max-w-6xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a
          href="https://magbanua-pauljhon.website"
          className="flex items-center space-x-3"
        >
          <img src={navLogo.src} className="h-8" alt="Paul Jhon Magbanua" />
          <span className="self-center text-2xl md:text-3xl font-semibold text-white">
            Paul Jhon Magbanua
          </span>
        </a>

        {/* Mobile Button */}
        <button
  onClick={() => setOpen(!open)}
  type="button"
  className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
>
  <span className="sr-only">Open main menu</span>
  <svg
    className="w-5 h-5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 14"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 1h15M1 7h15M1 13h15"
    />
  </svg>
</button>


        {/* Menu */}
        <div className={`${open ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="text-xl flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-custom-black md:flex-row md:space-x-1 md:mt-0 md:border-0 md:bg-[#020618] text-[#f5f5f5]">
            <li>
              <a href="#Home" className="block py-2 px-3 hover:text-blue-700">
                Home
              </a>
            </li>
            <li>
              <a href="#Skills" className="block py-2 px-3 hover:text-blue-500">
                Skills
              </a>
            </li>
            <li>
              <a href="#Experience" className="block py-2 px-3 hover:text-blue-500">
                Experience
              </a>
            </li>
            <li>
              <a href="#Education" className="block py-2 px-3 hover:text-blue-500">
                Education
              </a>
            </li>
            <li>
              <a href="#Contact" className="block py-2 px-3 hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
