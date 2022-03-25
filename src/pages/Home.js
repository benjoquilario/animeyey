import React from 'react';
import Row from '../components/Row/Row';
import { settings } from '../helper';
import Hero from '../components/Hero/Hero';
import SearchForm from '../components/SearchForm/SearchForm';
import Hamburger from './Watch/Hamburger';

const Home = () => {
   return (
      <div>
         <Hero>
            <SearchForm type="/" />
         </Hero>
         <Row fetchUrl="/top/anime" title="top anime" settings={settings} />
         <Row fetchUrl="/top/manga" title="top manga" settings={settings} />;
         <Row
            fetchUrl="/top/characters"
            title="Most Favorited Characters"
            settings={settings}
         />
         <Hamburger />
      </div>
   );
};

export default Home;
