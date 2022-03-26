import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
   const [isFixed, setIsFixed] = useState(false);

   useEffect(() => {
      const doc = document.documentElement;

      let currScroll;
      let prevScroll = window.scrollY || doc.scrollTop;
      let currDirection = 0;
      let prevDirection = 0;

      let threshold = 200;
      let toggle;

      const toggleHeader = () => {
         if (currDirection === 2 && currScroll > threshold) {
            setIsFixed(true);
         } else if (currDirection === 1) {
            setIsFixed(false);
         } else {
            toggle = false;
         }

         return toggle;
      };

      const checkScroll = () => {
         currScroll = window.scrollY || doc.scrollTop;

         if (currScroll > prevScroll) {
            currDirection = 2;
         } else {
            currDirection = 1;
         }

         if (currDirection !== prevDirection) {
            toggle = toggleHeader();
         }

         if (toggle) {
            prevDirection = currDirection;
         }

         prevScroll = currScroll;
      };

      window.addEventListener('scroll', checkScroll);

      return () => window.removeEventListener('scroll', checkScroll);
   });

   return (
      <header
         className={`${
            isFixed ? 'top-[-56px]' : 'top-0'
         } bg-[#152232] fixed left-0 w-full p-3 md:py-4 z-10 transition-all shadow-[0_0_12px_-5px_rgba(0,0,0,0.2)]`}
      >
         <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
            <Link
               to="/"
               className="mr-[23px] md:mr-0 text-lg text-white md:text-lg"
            >
               Anime<span className="text-[#e74538]">HI</span>
            </Link>
            <div className="max-w-[500px] w-full relative">{children}</div>
         </div>
      </header>
   );
};

export default Header;
