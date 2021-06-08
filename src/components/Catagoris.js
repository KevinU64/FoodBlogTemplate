import React from 'react';
import './styles/sCatagoris.css'
// <div className=""> </div>//
export default function Catagoris(props) {
    return (
        <>
            <div className="Contenedor">
                <div className="parte1"> 
                    <img src={props.data.imagen1}/>
                    <p>
                        {props.data.titulo1}
                    </p>
                </div>
                <div className="parte2"> 
                    <img src={props.data.imagen2}/>
                    <p>
                        {props.data.titulo2}
                    </p>
                </div>
                <div className="parte3"> 
                    <img src={props.data.imagen3}/>
                    <p>
                        {props.data.titulo3}
                    </p>
                </div>
                <div className="parte4"> 
                    <img src={props.data.imagen4}/>
                    <p>
                        {props.data.titulo4}
                    </p>
                </div>
                <div className="parte5"> 
                    <img src={props.data.imagen5}/>
                    <p>
                        {props.data.titulo5}
                    </p>
                </div>
            </div> 
        </>
    )
}