import React, { useEffect, useState } from 'react';
import axios from '../../apis/axios';
import SkeletalActor from '../Skeleton/SkeletalActor';
import Recommendation from './Recommendation';

const CharactersActor = ({ malId }) => {
   const [results, setResults] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      let isSubscribed = true;

      if (isSubscribed) {
         const controller = new AbortController();
         const signal = controller.signal;

         axios
            .get(`/anime/${malId}/characters`, { signal })
            .then(res => {
               if (res.status !== 200) {
                  throw Error("Coulnt't not fetch the data");
               } else {
                  setResults(res.data.data.slice(0, 8));
                  setIsLoading(false);
               }
            })
            .catch(err => {
               if (err.name === 'AbortError') {
                  return 'Request Aborted ';
               } else {
                  setIsLoading(false);
               }
            });

         return () => controller.abort();
      }

      return () => (isSubscribed = false);
   }, [malId]);

   return (
      <div className="overflow-hidden">
         <div className="flex flex-wrap flex-col items-start justify-center">
            <div className="w-full h-full">
               <h2 className="text-white my-4">Characters & Voice Actors</h2>
               <div className="relative grid grid-cols-fill-character lg:grid-cols-2 gap-4 w-full h-full">
                  {isLoading ? (
                     Array.from(Array(8), (_, index) => (
                        <SkeletalActor key={index} />
                     ))
                  ) : (
                     <>
                        {results.map((result, index) => {
                           return (
                              <div key={index}>
                                 <div className="bg-[#152232] flex w-full h-[90px] rounded gap-4">
                                    <div className="flex-1 grid grid-cols-[70px_auto] gap-3">
                                       <div
                                          className="bg-center bg-cover bg-no-repeat overflow-hidden h-full w-full"
                                          style={{
                                             backgroundImage: `url('${result.character.images.jpg.image_url}')`,
                                          }}
                                       ></div>
                                       <div className="flex justify-evenly flex-col">
                                          <h3 className="text-[9px] md:text-[11px] text-white opacity-90">
                                             {result.character.name}
                                          </h3>
                                          <p className="text-[8px] md:text-[10px] text-slate-300">
                                             {result.role}
                                          </p>
                                       </div>
                                    </div>

                                    <div className="flex-1 grid grid-cols-[auto_70px] gap-3">
                                       <div className="flex justify-evenly flex-col items-end">
                                          <h3 className="text-[9px] md:text-[11px] text-white opacity-90">
                                             {result.voice_actors.length !== 0
                                                ? result.voice_actors[0].person
                                                     .name
                                                : ''}
                                          </h3>
                                          <p className="text-[8px] md:text-[10px] text-slate-300">
                                             {result.voice_actors.length !== 0
                                                ? result.voice_actors[0]
                                                     .language
                                                : ''}
                                          </p>
                                       </div>
                                       <div
                                          className="bg-center bg-cover bg-no-repeat overflow-hidden h-full w-full"
                                          style={{
                                             backgroundImage: `url('${
                                                result.voice_actors.length !== 0
                                                   ? result.voice_actors[0]
                                                        .person.images.jpg
                                                        .image_url
                                                   : '/images/no_image.jpg'
                                             }')`,
                                          }}
                                       ></div>
                                    </div>
                                 </div>
                              </div>
                           );
                        })}
                     </>
                  )}
               </div>
            </div>
         </div>
         <div className="mt-2">
            <h2 className="text-white my-4">Recommendation</h2>
            <div className="relative">
               <Recommendation malId={malId} />
            </div>
         </div>
      </div>
   );
};

export default CharactersActor;
