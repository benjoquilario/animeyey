import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../apis/axios';
import Card from '../components/Card/Card';
import Header from '../components/Header/Header';
import SearchForm from '../components/SearchForm/SearchForm';

const SearchAnime = () => {
   const { search } = useParams();
   const [results, setResults] = useState([]);

   useEffect(() => {
      const controller = new AbortController();
      const signal = controller.signal;

      axios
         .get('/manga', {
            signal,
            params: {
               q: search,
            },
         })
         .then(res => {
            if (!res.status) {
               throw Error("Coulnt't not fetch the data");
            } else {
               setResults(res.data.data);
            }
         })
         .catch(err => {
            if (err.name === 'AbortError') {
               return 'Request Aborted ';
            }
            return err;
         });

      return () => controller.abort();
   }, [search]);
   return (
      <main>
         <Header>
            <SearchForm type="/manga/" />
         </Header>
         <section className="mt-8 grid grid-cols-fill-mobile md:grid-cols-fill-20 gap-3 justify-center md:justify-between overflow-hidden px-2">
            {results.map((result, index) => {
               return <Card data={result} key={index} type="manga" />;
            })}
         </section>
      </main>
   );
};

export default SearchAnime;
