import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Anime from './pages/Anime';
import Home from './pages/Home';
import SearchAnime from './pages/SearchAnime';

function App() {
   return (
      <div className="App bg-[#151f2e] overflow-hidden">
         <Router>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/anime/:malId" element={<Anime />} />
               <Route path="/search/:search" element={<SearchAnime />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
