import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../apis/axios';
import Header from '../components/Header/Header';
import Wrapper from '../components/Info/Wrapper';
import SearchForm from '../components/SearchForm/SearchForm';
import Banner from '../components/Info/Banner';
import Content from '../components/Info/Content';
import Cover from '../components/Info/Cover';
import Spinner from '../components/Spinner/Spinner';
import Trailer from '../components/Info/Trailer';

const Anime = () => {
   const { malId } = useParams();
   const [results, setResults] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      let isSubscribed = true;

      if (isSubscribed) {
         const controller = new AbortController();
         const signal = controller.signal;
         axios
            .get(`/anime/${malId}`, { signal })
            .then(res => {
               if (res.status !== 200) {
                  throw Error("Coulnt't not fetch the data");
               } else {
                  console.log(res);

                  setResults(res);
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
      <div className="min-h-screen">
         <Header>
            <SearchForm type="/" />
         </Header>
         <main>
            {isLoading ? (
               <Spinner />
            ) : (
               <Wrapper>
                  <Banner
                     poster={results.data.data.images.jpg.large_image_url}
                  />
                  <Cover
                     images={results.data.data.images.jpg.large_image_url}
                     rank={results.data.data.rank}
                     rating={results.data.data.rating}
                     title={results.data.data.title}
                     synopsis={results.data.data.synopsis}
                  />
                  <Content
                     malId={results.data.data.mal_id}
                     score={results.data.data.score}
                     popularity={results.data.data.popularity}
                     status={results.data.data.status}
                     format={results.data.data.type}
                     genres={results.data.data.genres}
                     duration={results.data.data.duration}
                     source={results.data.data.source}
                     episodes={results.data.data.episodes}
                     season={results.data.data.season}
                     favorites={results.data.data.favorites}
                     studios={results.data.data.studios}
                  />
                  <Trailer
                     title={results.data.data.title}
                     trailer={results.data.data.trailer.embed_url}
                  />
               </Wrapper>
            )}
         </main>
      </div>
   );
};

export default Anime;
