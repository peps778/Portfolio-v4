
function Navigation() {
  return (
    <nav className="sticky top-0 bg-[#020618] z-30 border-gray-200 dark:bg-[#020618]">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://magbanua-pauljhon.website" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../assets/images/programmer.png" className="h-8" alt="Paul Jhon Magbanua" />
        <span className="self-center max-sm:text-2xl sm:text-2xl md:text-3xl xl:text-3xl font-semibold whitespace-nowrap dark:text-[#f5f5f5] text-white">Paul Jhon Magbanua</span>
      </a>
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium text-lg flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#020618] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#020618] text-[#f5f5f5]">
          <li>
            <a href="#hero" className="block py-2 px-3 text-white rounded-sm md:p-0 hover:text-blue-700 hover:md:text-blue-700" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#secondSection" className="block py-2 px-3 text-white rounded-sm hover:text-blue-500 md:p-0">Skills</a>
          </li>
          <li>
            <a href="#thirdSection" className="block py-2 px-3 text-white rounded-sm hover:text-blue-500 md:p-0">Experience</a>
          </li>
          <li>
            <a href="#fourthSection" className="block py-2 px-3 text-white rounded-sm hover:text-blue-500 md:p-0">Education</a>
          </li>
          <li>
            <a href="#contactForm" className="block py-2 px-3 text-white rounded-sm hover:text-blue-500 md:p-0">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navigation;
