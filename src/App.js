import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import Anime from './pages/Anime';
import Home from './pages/Home';
import SearchAnime from './pages/SearchAnime';
import WatchList from './pages/Watch/WatchList';

function App() {
   return (
      <GlobalProvider>
         <div className="App min-h-screen bg-[#151f2e] overflow-hidden">
            <Router>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/anime/:malId" element={<Anime />} />
                  <Route path="/search/:search" element={<SearchAnime />} />
                  <Route path="/watchlist" element={<WatchList />} />
               </Routes>
            </Router>
         </div>
      </GlobalProvider>
   );
}

export default App;
