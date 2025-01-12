import logo from './logo.svg';
import './App.css';

import {useState} from "react";

function App() {
  // let title = 'Wall-E';
  const [title, setTitile] = useState('Wall-E');

  const movies = [

    {title: "Wall-E"},

    {title: "Pulp Fiction"},

    {title: "Matrix"},

    {title: "1670"},
    {title: "New movie"},

];

  let msg = "" 

    if (title.length<5)
    {
      msg = "title is to short"
    }
    else if(title.length<15)
    {
      msg = "title is OK"
    }
    else
    {
      msg = "title is to long" 
    }

  function handleChange(event)
  {
    setTitile(event.target.value);
  }

  function handleClick(event)
  {
    alert(title);
  }


  return (
    <div>
      <h1>My favourite movies to watch</h1>
      <h2>My favourite movies for today is {title}</h2>
      {title.length > 0 && <div>{msg}</div>}
      <div>
        <h3>Titles</h3>
          <ul>
            {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
          </ul>
        
        <input type="text" value={title} onChange={handleChange}/> 
        {/* <button type="button" onClick={handleClick}>Pokaz tytul filmy</button>  */}
        <button type="button" onClick={() => alert(title) }>Pokaz tytul filmy</button>
      </div>
    </div>
  );
}

export default App;
