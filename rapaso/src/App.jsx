
import { useEffect, useState } from 'react';

//import './App.css';
import Targeta from './components/Targeta';
import PokeballAnimation from './components/Pokeball';

function App() {

  const [poke, setPoke] = useState([]);

  const [count, setCount] = useState(0);
    
  const [boton, setBoton] = useState({});

  const [animation, setAnimation]= useState(()=>{});

  const [imagen, setImagen] = useState("");

  const traerImg = async(pa)=>{
    await fetch(pa)
    .then(res=> res.json())
    .then(res=>setImagen(res.sprites.front_default))
    .catch(er=>console.log(er))
  }
   
  useEffect(()=>{
    if(count>0){
      setBoton({ display: "none" });
      setAnimation(()=>{return <PokeballAnimation/>});

      setTimeout(()=>{
        setAnimation(()=>{});

        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(res => res.json())
        .then(res=> {
          setPoke(res.results)
          
        })
        .then()
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
        <img src='../public/images.png'/>
      </button>
      {animation}
     <div className='row'>
        {poke.map( (pokes, i)=>{
           
           fetch(pokes.url)
          .then(res=> res.json())
          .then(res=>setImagen(res.sprites.front_default))
          .catch(er=>console.log(er))
           console.log(imagen)
           return <Targeta key={i} descripcion={pokes.name} imagen={imagen}/>
        })}
     </div>
    </div>
  )

}

export default App
