import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
   return (
      <header className="bg-[#152232] absolute top-0 left-0 w-full p-3 md:py-4 z-10">
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
