import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Header = () => {
   const { theme, clickedClass, switchTheme } = useDarkMode();

   return (
      <header className="bg-white dark:bg-[#2b3945] absolute w-full z-10 left-0 shadow-[0_0_12px_-5px_rgba(0,0,0,0.2)]">
         <div className="w-full max-w-[90rem] mx-auto flex justify-between items-center py-[27px] px-[18px] md:px-[80px]">
            <h2 className="text-[#111517] dark:text-white leading-none select-none text-sm md:text-2xl font-extrabold">
               Where in the world?
            </h2>
            <button
               className={`${
                  theme === 'dark' ? clickedClass : ''
               } flex items-center gap-x-2 text-[#111517] dark:text-white font-semibold`}
               onClick={event => switchTheme(event)}
            >
               <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
               </svg>
               Dark Mode
            </button>
         </div>
      </header>
   );
};

export default Header;
