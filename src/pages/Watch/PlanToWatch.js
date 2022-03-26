import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import SearchForm from '../../components/SearchForm/SearchForm';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

const PlanToWatch = () => {
   const { planToWatch } = useContext(GlobalContext);

   console.log(planToWatch);

   return (
      <div className="h-full w-full">
         <Header>
            <SearchForm type="/" />
         </Header>

         <div className="mt-[70px]">
            <h2 className="text-white my-7 ml-5 text-2xl text-center">
               My List
            </h2>
            <div className="grid grid-cols-fill-mobile justify-center md:grid-cols-fill-20 gap-2">
               {planToWatch.map((watchl, index) => {
                  return (
                     <div
                        key={index}
                        className="relative w-[112px] min-w-[112px] sm:w-[118px] sm:min-w-[118px] overflow-visible flex flex-wrap rounded-[6px] content-start mx-auto mb-[12px]"
                     >
                        <div className="relative overflow-hidden w-full rounded-[6px] h-[150px] sm:h-[165px] ">
                           <div className="relative w-full h-full hover:opacity-80 transition-opacity">
                              <Link
                                 to={`/anime/${watchl.mal_id}`}
                                 className="inline-block w-full h-full"
                              >
                                 <img
                                    src={watchl.images.jpg.image_url}
                                    className="inline-block w-full h-full"
                                    alt={watchl.title}
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
                              style={{
                                 backgroundImage: "url('/images/mask.png')",
                              }}
                           >
                              <Link
                                 to={`/anime/${watchl.mal_id}`}
                                 className="webkit-box"
                              >
                                 {watchl.title}
                              </Link>
                           </h2>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default PlanToWatch;
