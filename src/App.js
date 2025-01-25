import './App.css';
import {useState} from "react";
import "milligram";

import MovieForm from './MovieForm';
import Test from './test';

function App() {

    const [movies, setMovies] = useState([]);

    return (
        <div className="container">
            <h1>My favourite movies to watch</h1>
            <h2>Titles</h2>
            <ul>
                {movies.map(movie => <li key={movie.title}>{movie.title} ({movie.year})</li>)}
            </ul>
            <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])}/>
            <Test>wrwerwer</Test>
        </div>
    );
}

export default App;
