import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
   return (
      <div className="text-white min-h-screen flex flex-col justify-center items-center">
         <h1 className="text-[70px] md:text-[120px]">Oops!</h1>
         <p>404 - PAGE NOT FOUND</p>
         <Link
            to="/"
            className="mt-5 bg-[#152232] h-[44px] w-[200px] flex justify-center items-center rounded shadow-[0_0_12px_-5px_rgba(0,0,0,0.2)]"
         >
            Go to Home Page
         </Link>
      </div>
   );
};

export default NotFound;
