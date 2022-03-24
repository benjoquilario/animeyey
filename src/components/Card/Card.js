import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data, type }) => {
   const { images, title, rank, mal_id, name } = data;

   return (
      <div className="relative w-[112px] min-w-[112px] sm:w-[150px] sm:min-w-[150px] overflow-visible flex flex-wrap rounded-[6px] content-start mx-auto">
         <div className="relative overflow-hidden w-full rounded-[6px] h-[160px] sm:h-[225px] ">
            <div className="relative w-full h-full hover:opacity-80 transition-opacity">
               <Link
                  to={`/${type}/${mal_id ? mal_id : data.entry.mal_id}`}
                  className="inline-block w-full h-full"
               >
                  <img
                     src={
                        images.jpg.image_url
                           ? images.jpg.image_url
                           : data.entry.images.jpg.image_url
                     }
                     className="inline-block w-full h-full"
                     alt={title}
                  />
               </Link>
            </div>
         </div>
         <div className="w-full h-full flex items-start whitespace-normal flex-wrap">
            <div className="absolute top-[2px] right-[3px] w-[38px] h-[38px] inline-block">
               <div className="inline-block w-[38px] h-[38px]">
                  <div className="relative flex items-center w-full h-full text-center">
                     {rank ? (
                        <div
                           className="bg-[#000212] text-white font-semibold flex items-center w-full h-full justify-center z-2 rounded-full"
                           style={{}}
                        >
                           <span className="text-[12px]">#</span>
                           {rank}
                        </div>
                     ) : null}
                  </div>
               </div>
            </div>
            <h2
               className="absolute bottom-[0px] left-0 w-full h-auto p-1 text-center text-white bg-top bg-repeat-x"
               style={{ backgroundImage: "url('/images/mask.png')" }}
            >
               <Link to={`/${type}/${mal_id}`} className="webkit-box">
                  {title ? title : name}
               </Link>
            </h2>
         </div>
      </div>
   );
};

export default Card;
