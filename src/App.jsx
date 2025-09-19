import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx'; 
import NavBar from "./Components/NavBar.jsx";
import MovieSelector from './MovieSelector.js';
import MoviePage from './Pages/MoviePage.jsx';
import { useNavigate } from 'react-router-dom';
import SearchByGenre from './Pages/SearchByGenre.jsx';
import SearchByActor from './Pages/SearchByActor.jsx';


function App() {
 
  const navigate = useNavigate();

  const handleSubmit = (answers) => {
    
    const movieSelector = new MovieSelector(answers[0], answers[1],answers[2]);
    const selectedMovie = movieSelector.selectMovie();
    
    navigate('/Movie', { state:  selectedMovie  }); //since we are automatically navigating data to a different page, (no link) we must use Naviage() and pass data as a state like so <----
  };

  

  return (
    <Router basename="/moviepicker">
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home handleSubmit={handleSubmit} />} />
          <Route path="/SearchByGenre" element={<SearchByGenre />} />
          <Route path="/SearchByActor" element={<SearchByActor />} />
          <Route path="/Movie" element={<MoviePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
