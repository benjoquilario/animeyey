import React from 'react';

const Cover = ({ images, rank, rating, title, synopsis }) => {
   return (
      <div className="px-[12px] md:px-[40px] grid grid-cols-1 justify-items-center gap-[70px] md:grid-cols-[250px_1fr] md:gap-[18px]">
         <div className="min-w-[220px] w-[220px] h-auto">
            <div className="min-w-[220px] w-[220px] h-[300px] block mt-[-88px] md:mt-[-40px]">
               <div className="w-full min-w-full h-full">
                  <img
                     className="object-cover min-w-full min-h-full h-full w-full"
                     src={images}
                     alt={title}
                  />
               </div>
               <div>
                  <button className="text-sm text-white h-[37px] w-full flex items-center justify-center bg-[#e74538]">
                     Add to List
                  </button>
               </div>
            </div>
         </div>
         <div className="grid auto-rows-min text-white py-4">
            <span className="text-white opacity-80">Rank #{rank}</span>
            <p className="italic text-sm text-white opacity-80">{rating}</p>
            <h1 className="my-4 text-[27px]">{title}</h1>
            <span>Synopsis</span>
            <p className="text-white opacity-80 text-[11px] md:text-[13px]">
               {synopsis}
            </p>
         </div>
      </div>
   );
};

export default Cover;
