import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../apis/axios';
import Card from '../components/Card/Card';
import Header from '../components/Header/Header';
import SearchForm from '../components/SearchForm/SearchForm';
import Skeleton from '../components/Skeleton/Skeleton';

const SearchAnime = () => {
  const { search } = useParams();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isSubscribed = true;

    if (isSubscribed) {
      const controller = new AbortController();
      const signal = controller.signal;

      axios
        .get('/anime', {
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
            setIsLoading(true);
          }
        })
        .catch(err => {
          if (err.name === 'AbortError') return 'Request Aborted';
          else setIsLoading(false);

          return err;
        });

      return () => controller.abort();
    }

    return () => {
      isSubscribed = false;
      setResults([]);
    };
  }, [search]);

  return (
    <main>
      <Header>
        <SearchForm type="/" />
      </Header>

      <section className="mt-[70px] overflow-hidden px-2">
        <h2 className="text-white text-lg my-4 ml-3">Search: {search}</h2>
        <div className="grid grid-cols-fill-mobile md:grid-cols-fill-20 gap-3 justify-center md:justify-between ">
          {isLoading &&
            Array.from(Array(8), (_, index) => <Skeleton key={index} />)}
          {results.map((result, index) => {
            return <Card data={result} key={index} type="anime" />;
          })}
        </div>
      </section>
    </main>
  );
};

export default SearchAnime;
