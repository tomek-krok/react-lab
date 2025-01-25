import './App.css';
import {useState} from "react";
import "milligram";

import MovieForm from './MovieForm';
import MoviesList from './MoviesList';
// import Test from './test';

function App() {

    const [movies, setMovies] = useState([]);

    return (
        <div className="container">
            <h1>My favourite movies to watch</h1>

            <MoviesList movies={movies}/>

            <div>
                <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])} buttonLabel = "Add a moviex"/>
                {/* <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])} buttonLabel = "Search for a movie"/> */}
                {/* <Test>wrwerwer</Test> */}
            </div>
            
        </div>
    );
}

export default App;
