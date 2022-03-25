import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hamburger = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="fixed bottom-8 right-8 z-40 cursor-pointer">
         <div
            className={`${
               isOpen ? 'hidden' : ''
            } bg-white relative flex justify-center  items-center h-[50px] w-[50px] shadow-[0_1_12px_rgba(43,50,90,0.3)] rounded `}
            onClick={() => setIsOpen(true)}
         >
            <svg
               aria-hidden="true"
               focusable="false"
               dataprefix="fas"
               dataicon="bars"
               role="img"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 448 512"
               className="w-8"
            >
               <path
                  fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
               ></path>
            </svg>
         </div>
         <div
            className={`${
               isOpen ? 'flex' : 'hidden'
            } p-3 rounded bg-white gap-3`}
         >
            <Link
               to="/watchlist"
               className="flex justify-center items-center flex-col gap-2 text-[9px]"
               aria-label="watched"
            >
               <svg
                  data-v-8aeb5e9a=""
                  aria-hidden="true"
                  focusable="false"
                  dataprefix="fas"
                  dataicon="play"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-5 h-5"
               >
                  <path
                     fill="currentColor"
                     d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                  ></path>
               </svg>
               Watched
            </Link>
            <Link
               to="/watchlist"
               className="flex justify-center items-center flex-col gap-2 text-[9px]"
               aria-label="watchlist"
            >
               <svg
                  aria-hidden="true"
                  focusable="false"
                  dataprefix="fas"
                  dataicon="book-open"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="w-5 h-5"
               >
                  <path
                     fill="currentColor"
                     d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"
                  ></path>
               </svg>
               Watchlist
            </Link>

            <button
               className="w-3 h-3 self-center"
               aria-label="exit"
               onClick={() => setIsOpen(false)}
            >
               <svg
                  aria-hidden="true"
                  focusable="false"
                  dataprefix="fas"
                  dataicon="times"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 352 512"
               >
                  <path
                     fill="currentColor"
                     d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                  ></path>
               </svg>
            </button>
         </div>
      </div>
   );
};

export default Hamburger;
