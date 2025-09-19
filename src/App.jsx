// App.jsx
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Pages/Home.jsx'; 
import NavBar from "./Components/NavBar.jsx";
import MovieSelector from './MovieSelector.js';
import MoviePage from './Pages/MoviePage.jsx';
import SearchByGenre from './Pages/SearchByGenre.jsx';
import SearchByActor from './Pages/SearchByActor.jsx';

function App() {
  const navigate = useNavigate();

  const handleSubmit = (answers) => {
    const movieSelector = new MovieSelector(answers[0], answers[1], answers[2]);
    const selectedMovie = movieSelector.selectMovie();
    navigate('/Movie', { state: selectedMovie });
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/moviepicker' element={<Home handleSubmit={handleSubmit} />} />
        <Route  element={<Home handleSubmit={handleSubmit} />} />
        <Route path='/' element={<Home handleSubmit={handleSubmit} />} />
        <Route index element={<Home handleSubmit={handleSubmit} />} />
        <Route path="/SearchByGenre" element={<SearchByGenre />} />
        <Route path="/SearchByActor" element={<SearchByActor />} />
        <Route path="/Movie" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
