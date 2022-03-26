import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import Anime from './pages/Anime';
import NotFound from './pages/Error/404NotFound';
import SearchError from './pages/Error/SearchError';
import Home from './pages/Home';
import SearchAnime from './pages/SearchAnime';
import PlanToWatch from './pages/Watch/PlanToWatch';

function App() {
   return (
      <GlobalProvider>
         <div className="App min-h-screen bg-[#151f2e] overflow-hidden">
            <Router>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/anime/:malId" element={<Anime />} />.
                  <Route path="/search/" element={<SearchError />} />
                  <Route path="/search/:search" element={<SearchAnime />} />
                  <Route path="/plantowatch" element={<PlanToWatch />} />
                  <Route path="*" element={<NotFound />} />
               </Routes>
            </Router>
         </div>
      </GlobalProvider>
   );
}

export default App;
