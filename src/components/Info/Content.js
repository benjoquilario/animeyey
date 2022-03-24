import React from 'react';
import CharactersActor from './CharactersActor';

const Content = ({
   malId,
   score,
   popularity,
   status,
   format,
   genres,
   duration,
   source,
   episodes,
   season,
   favorites,
   studios,
}) => {
   return (
      <div className="px-[12px] md:px-[40px] grid grid-cols-none md:grid-cols-[250px_auto] md:mt-[50px] md:gap-[18px]">
         <aside>
            <div className="bg-[#152232] my-[16px] p-[16px] w-full rounded">
               <p className="text-slate-300 text-xs">
                  <svg
                     aria-hidden="true"
                     focusable="false"
                     dataprefix="fas"
                     dataicon="star"
                     role="img"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 576 512"
                     className="text-[#F7BF63] mr-[8px] w-[14px] overflow-visible inline-block h-[16px]"
                  >
                     <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                     ></path>
                  </svg>
                  Score: {score}
               </p>
            </div>
            <div className="bg-[#152232] my-[16px] p-[16px] w-full rounded">
               <p className="text-slate-300 text-xs">
                  <svg
                     aria-hidden="true"
                     focusable="false"
                     dataprefix="fas"
                     dataicon="heart"
                     role="img"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 512 512"
                     className="text-[#E85D75] mr-[8px] w-[14px] overflow-visible inline-block h-[16px]"
                  >
                     <path
                        fill="currentColor"
                        d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                     ></path>
                  </svg>
                  Popularity: {popularity}
               </p>
            </div>
            <div className="bg-[#152232] my-[16px] p-[16px] w-full rounded">
               <ul>
                  <li className="text-xs mb-3">
                     <div className="text-white">Status</div>
                     <div className="text-slate-300 italic text-[12px]">
                        {status}
                     </div>
                  </li>

                  <li className="text-xs mb-3 ">
                     <div className="text-white">Format</div>
                     <div className="text-slate-300 italic text-[12px]">
                        {format}
                     </div>
                  </li>
                  <li className="text-xs mb-3">
                     <div className="text-white">Genre</div>
                     <div className="text-slate-300 italic text-[12px]">
                        {genres.map((genre, index) => {
                           return <span key={index}>{genre.name}, </span>;
                        })}
                     </div>
                  </li>
                  <li className="text-xs md:text-sm mb-3">
                     <div className="text-white">Duration</div>
                     <div className="text-slate-300 italic text-[11px]">
                        {duration}
                     </div>
                  </li>
                  <li className="text-xs md:text-sm mb-3">
                     <div className="text-white">Source</div>
                     <div className="text-slate-300 italic text-[11px]">
                        {source}
                     </div>
                  </li>

                  <li className="text-xs md:text-sm mb-3">
                     <div className="text-white">Episodes</div>
                     <div className="text-slate-300 italic text-[11px]">
                        {episodes}
                     </div>
                  </li>
                  <li className="text-xs md:text-sm mb-3">
                     <div className="text-white">Season</div>
                     <div className="text-slate-300 italic text-[11px]">
                        {season}
                     </div>
                  </li>
                  <li className="text-xs md:text-sm mb-3">
                     <div className="text-white">Popularity</div>
                     <div className="text-slate-300 italic text-[11px]">
                        {popularity}
                     </div>
                  </li>
                  <li className="text-xs md:text-sm mb-3">
                     <div className="text-white">Favorites</div>
                     <div className="text-slate-300 italic text-[11px]">
                        {favorites}
                     </div>
                  </li>
                  <li className="text-xs md:text-sm mb-3">
                     <div className="text-white">Studios</div>
                     <div className="text-slate-300 italic text-[11px]">
                        {studios.map((studio, index) => {
                           return <span key={index}>{studio.name}</span>;
                        })}
                     </div>
                  </li>
               </ul>
            </div>
         </aside>
         <CharactersActor malId={malId} />
      </div>
   );
};

export default Content;
