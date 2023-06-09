
import { useEffect, useState } from 'react';

import Targeta from './components/Targeta';
import PokeballAnimation from './components/Pokeball';

function App() {

  const [poke, setPoke] = useState([]);

  const [count, setCount] = useState(0);
    
  const [boton, setBoton] = useState({});

  const [animation, setAnimation]= useState(()=>{});

  const traerImg = async(pa)=>{
   
    return await fetch(pa)
    .then(res=> res.json())
    .then(res=>{
      console.log(res.sprites.front_default);
      return {img:res.sprites.front_default}})
    .catch(er=>console.log(er))
   
  }
   
  useEffect(()=>{
    if(count>0){
      setBoton({ display: "none" });
      setAnimation(()=>{return <PokeballAnimation/>});

      setTimeout(()=>{
        
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(res => res.json())
        .then(res=>setPoke(res.results))
        .then()
        setAnimation(()=>{});
      },1000)
    }
    }, [count])

    

  return (

    //como hacer map en js?
    //<p key={i}> {pokes.name }</p>})}

    <div> 
     {/* <PokeballAnimation/>*/}
     <h2 style={boton}>Click sobre la pokeball para llamar a los pokemons</h2>
      <button className='waves-effect' onClick={()=>setCount(5)} style={boton}>
        <img src='/images.png'/>
      </button>
      {animation}
     <div className='row'>
        {poke.map( (pokes, i)=>{
          const img = traerImg(pokes.url)
           return <Targeta key={i} descripcion={pokes.name} imagen={img.img}/>
        })}
     </div>
    </div>
  )

}

export default App
