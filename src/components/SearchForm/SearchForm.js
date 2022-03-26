import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../apis/axios';
import AutoCard from '../Card/AutoCard';
import DebounceInput from 'react-debounce-input';
import Spinner from '../Spinner/Spinner';

const SearchForm = ({ type }) => {
   const [query, setQuery] = useState('');
   const [results, setResults] = useState([]);
   const [isOpen, setIsOpen] = useState(false);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      if (!query || query.length < 3) {
         setIsOpen(false);
         return setResults([]);
      } else {
         setIsOpen(true);

         const controller = new AbortController();
         const signal = controller.signal;
         axios
            .get('/anime', {
               signal,
               params: {
                  q: query,
               },
            })
            .then(res => {
               if (!res.status) {
                  throw Error("Coulnt't not fetch the data");
               } else {
                  setResults(res.data.data);
                  setIsLoading(false);
               }
            })
            .catch(err => {
               if (err.name === 'AbortError') return 'Request Aborted';
               else setIsLoading(false);

               return err;
            });

         return () => controller.abort();
      }
   }, [query]);

   useEffect(() => {
      const openSearchResult = event => {
         if (event.target.id !== 'column') setIsOpen(false);
      };

      window.addEventListener('click', openSearchResult);

      return () => window.removeEventListener('click', openSearchResult);
   }, []);

   return (
      <div className="relative w-full max-w-[500px]">
         <div className="relative w-full max-w-[500px]">
            <form className="relative shadow-2xl z-50">
               <div className="visually-hidden" aria-live="polite"></div>
               <div className="w-full">
                  <DebounceInput
                     minLength={2}
                     className="w-full h-[32px] md:h-[38px] text-sm md:text-base px-[23px] leading-[46px]"
                     debounceTimeout={500}
                     onChange={event => setQuery(event.target.value)}
                     placeholder="search"
                  />
                  <Link to={`/search${type}${query}`}>
                     <button
                        className="bg-[#0a1f49] absolute top-0 right-[-1px] inline-flex justify-center items-center content-center h-[32px] md:h-[38px] px-[26px] py-[10px]"
                        aria-label="submit form"
                        type="submit"
                     >
                        <svg
                           aria-hidden="true"
                           focusable="false"
                           role="img"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 512 512"
                           className="fa-search"
                           height="1em"
                           width="1em"
                        >
                           <path
                              fill="#f5f5f5"
                              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                           ></path>
                        </svg>
                     </button>
                  </Link>
               </div>
            </form>
            <div
               className={`${
                  isOpen ? 'block' : 'hidden'
               } absolute top-[35px] md:top-[37px] w-full max-h-[600px] overflow-auto  bg-[#151f2e] z-50`}
               id="column"
            >
               {isLoading ? (
                  <Spinner />
               ) : (
                  <>
                     {results.map((result, index) => {
                        return <AutoCard key={index} data={result} />;
                     })}
                  </>
               )}
            </div>
         </div>
      </div>
   );
};

export default SearchForm;
