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
import Hamburger from './Watch/Hamburger';

const Anime = () => {
  const { malId } = useParams();
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!result || (Array.isArray(result) && result.length === 0)) return;

    document.title = result.data.data.title;
  }, [result]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    axios
      .get(`/anime/${malId}`, { signal })
      .then(res => {
        if (res.status !== 200) {
          throw Error("Coulnt't not fetch the data");
        } else {
          setResult(res);
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
            <Banner poster={result.data.data.images.jpg.large_image_url} />
            <Cover
              malId={result.data.data.mal_id}
              images={result.data.data.images.jpg.large_image_url}
              rank={result.data.data.rank}
              rating={result.data.data.rating}
              title={result.data.data.title}
              synopsis={result.data.data.synopsis}
              data={result.data.data}
            />
            <Content
              malId={result.data.data.mal_id}
              score={result.data.data.score}
              popularity={result.data.data.popularity}
              status={result.data.data.status}
              format={result.data.data.type}
              genres={result.data.data.genres}
              duration={result.data.data.duration}
              source={result.data.data.source}
              episodes={result.data.data.episodes}
              season={result.data.data.season}
              favorites={result.data.data.favorites}
              studios={result.data.data.studios}
            />
            <Trailer
              title={result.data.data.title}
              trailer={result.data.data.trailer.embed_url}
            />
          </Wrapper>
        )}

        <Hamburger />
      </main>
    </div>
  );
};

export default Anime;
