import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [pokedex, setPokedex] = useState([]);

  useEffect(()=>{
    fetch(import.meta.env.VITE_API_URL + "/api/pokemon/1").then(results => results.json()).then(parsed_data => setPokedex(parsed_data)).catch(ex => console.error(ex.message));
  })

  if (pokedex == null) {
    return(<div>no pokemon</div>);
  }
  try{
    return (
      <>
        <div>
          <div>{pokedex.id}</div>
          <div>{pokedex.name.english}</div>
          <div>{pokedex.name.japanese}</div>
          <div>{pokedex.base.defense}</div>
        </div>
      </>
    )
  }
  catch(ex) {
    return (
      <div>{ex.message}</div>
    )
  }
}

export default App
