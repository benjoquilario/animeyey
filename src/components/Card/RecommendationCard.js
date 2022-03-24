import React from 'react';
import { Link } from 'react-router-dom';

const RecommendationCard = ({ data }) => {
   const { mal_id, images, title } = data;
   return (
      <div className="relative w-[112px] min-w-[112px] sm:w-[118px] sm:min-w-[118px] overflow-visible flex flex-wrap rounded-[6px] content-start mx-auto">
         <div className="relative overflow-hidden w-full rounded-[6px] h-[150px] sm:h-[165px] ">
            <div className="relative w-full h-full hover:opacity-80 transition-opacity">
               <Link
                  to={`/anime/${mal_id}`}
                  className="inline-block w-full h-full"
               >
                  <img
                     src={images.jpg.image_url}
                     className="inline-block w-full h-full"
                     alt={title}
                  />
               </Link>
            </div>
         </div>
         <div className="w-full h-full flex items-start whitespace-normal flex-wrap">
            <div className="absolute top-[2px] right-[3px] w-[38px] h-[38px] inline-block">
               <div className="inline-block w-[38px] h-[38px]">
                  <div className="relative flex items-center w-full h-full text-center"></div>
               </div>
            </div>
            <h2
               className="absolute bottom-[0px] left-0 w-full h-auto p-1 text-center text-white bg-top bg-repeat-x"
               style={{ backgroundImage: "url('/images/mask.png')" }}
            >
               <Link to={`/anime/${mal_id}`} className="webkit-box">
                  {title}
               </Link>
            </h2>
         </div>
      </div>
   );
};

export default RecommendationCard;
