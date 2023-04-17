
import { useEffect, useState } from 'react';

//import './App.css';
import Targeta from './components/Targeta';
import PokeballAnimation from './components/Pokeball';

function App() {

  const [poke, setPoke] = useState([]);

  const [count, setCount] = useState(0);
    
  const [boton, setBoton] = useState({});

  const [animation, setAnimation]= useState(()=>{});
  const [mapeo, setMapeo]=  useState(()=>{});

  const traerImg = async(pa)=>{
    return await fetch(pa)
    .then(res=> res.json())
    .then(res=>{
      return res.sprites.front_default
    })
    .catch(er=>console.log(er))
  }
   
  useEffect(()=>{
    if(count>0){
      setBoton({ display: "none" });
      setAnimation(()=>{return <PokeballAnimation/>});

      setTimeout(()=>{
        
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(res => res.json())
        .then(res => {
          const lista = []

          res.results.forEach(async item => {
            const img = await traerImg(item.url)

            lista.push({ name: item.name, img });
          });

          setPoke(lista);
        })
        
        setAnimation(()=>{});
      },1000)
    }
    }, [count])

    useEffect(() => {
      console.log(poke)
      setMapeo(()=>{
        const lista = poke.map( (pokes)=>{
        console.log("hhhh")
        console.log(pokes.name)
        console.log(pokes.img)
        return <Targeta descripcion={pokes.name} imagen={pokes.img}/>
        return lista
      })})
    }, [poke])

  return (

    <div> 
     {/* <PokeballAnimation/>*/}
     <h2 style={boton}>Click sobre la pokeball para llamar a los pokemons</h2>
      <button className='waves-effect' onClick={()=>setCount(5)} style={boton}>
        <img src='/images.png'/>
      </button>
      {animation}
     <div className='row'>
        {mapeo}
         
     </div>
    </div>
  )

}

export default App
