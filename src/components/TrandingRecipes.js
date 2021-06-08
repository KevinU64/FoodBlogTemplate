import React from 'react';
import './styles/sTrandingRecipes.css'

export default function TrandingRecipes(props) {
    return (
        <>
            <div className={`Contenedortr ${props.data1.posicion}`}>
                <img src={props.data1.imagen}/>
                <h1>
                    {props.data1.titulo}
                    <div className="descripcion">
                        <img src= "https://i68.servimg.com/u/f68/20/32/94/38/perfil11.jpg" />
                        <p>By</p>
                        <h2>{props.data1.nombre}</h2> 
                    </div>
                </h1>
            </div>
            
        </>
    )
}
