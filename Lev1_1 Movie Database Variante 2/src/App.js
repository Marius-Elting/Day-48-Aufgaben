// import logo from './logo.svg';
import './App.css';
import MovieItem from './components/MovieItem/MovieItem';
import movies from './data';
// Variante mit dem Import 

function App() {
  return (
    <div className="App">
      <MovieItem movies={movies} />
    </div>
  );
}

export default App;
