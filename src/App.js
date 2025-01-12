import logo from './logo.svg';
import './App.css';

import {useState} from "react";

function App() {
  // let title = 'Wall-E';
  const [title, setTitile] = useState('Wall-E');

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


  return (
    <div>
      <h1>My favourite movies to watch</h1>
      <h2>My favourite movies for today is {title}</h2>
      {title.length > 0 && <div>{msg}</div>}
      <input type="text" value={title} onChange={handleChange}/>
    </div>
  );
}

export default App;
