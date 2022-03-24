import React from 'react';
import { Link } from 'react-router-dom';

const AutoCard = ({ data }) => {
   const { images, mal_id, title, score } = data;
   return (
      <div className="flex flex-col mb-2 px-2">
         <Link to={`/anime/${mal_id}`}>
            <div className="grid grid-cols-fill-columns gap-4">
               <div className="relative h-[80px] md:h-[100px] w-full">
                  <img
                     className="w-full h-full rounded max-w-full object-cover"
                     src={images.jpg.image_url}
                     alt={title}
                  />
               </div>
               <div className="flex text-left flex-col justify-center gap-2 text-white">
                  <p className="text-sm">{title}</p>
                  <p className="text-xs">Score {score}</p>
               </div>
            </div>
         </Link>
      </div>
   );
};

export default AutoCard;
