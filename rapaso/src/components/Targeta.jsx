import { useState, useEffect } from "react";


const Targeta = (props) => {

    const [boton, setBoton] = useState({});

    return (
        <div className="col" style={boton}>
            <div className=" ">
                <div className="card">
                    <div className="card-image">
                        <img src={props.imagen} />
                        <span className="card-title">{props.nombre}</span>
                    </div>
                    <div className="card-content  blue accent-3">
                        <h1 className="white-text">{props.descripcion}</h1>
                    </div>
                    <div className="card-action">
                        <button className=" red accent-3" onClick={() => { setBoton({ display: "none" }) }}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Targeta