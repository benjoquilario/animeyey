import React, { useEffect, useState } from 'react';
import Slider from 'react-slick/lib/slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from '../../apis/axios';
import RecommendationCard from '../Card/RecommendationCard';
import { settings2 } from '../../helper';
import SkeletonRecom from '../Skeleton/SkeletonRecom';

const Recommendation = ({ malId }) => {
   const [results, setResults] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      let isSubscribed = true;

      if (isSubscribed) {
         const controller = new AbortController();
         const signal = controller.signal;
         const timerId = setTimeout(() => {
            axios
               .get(`/anime/${malId}/recommendations`, { signal })
               .then(res => {
                  if (res.status !== 200) {
                     throw Error("Coulnt't not fetch the data");
                  } else {
                     setResults(res.data.data.slice(0, 20));
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
         }, 3000);

         return () => clearTimeout(timerId);
      }

      return () => {
         isSubscribed = false;
         setResults([]);
      };
   }, [malId]);

   return (
      <Slider {...settings2}>
         {isLoading &&
            Array.from(Array(7), (_, index) => <SkeletonRecom key={index} />)}
         {results.map((result, index) => {
            return <RecommendationCard key={index} data={result.entry} />;
         })}
      </Slider>
   );
};

export default Recommendation;
