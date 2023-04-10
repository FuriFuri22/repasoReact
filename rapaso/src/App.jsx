import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [poke, setPoke] = useState("");

  const [count, setCount] = useState(0);
    
   
  useEffect(()=>{
     setCount(+1);
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res => res.json())
    .then(res=> setPoke(res.results))
    }, [poke])

  return (
    <div>
      {poke}
    </div>
  )

}

export default App
