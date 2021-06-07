import React from 'react';
import "./styles/food1.css";

export default function Food(){
    return(
        <>
            <section class="inicio">
                <div class="fondo-plato"></div>
                <div class="contenido">
                    <div class="menu">
                        <div class="logo">
                            <img src="https://i26.servimg.com/u/f26/20/31/61/35/logo10.png" alt="" />
                        </div>
                        <div class="opciones">
                            <p>Home</p>
                            <p>Recipes</p>
                            <p>Pages</p>
                            <p>About Me</p>
                            <p>Blog</p>
                            <p>Contact</p>
                        </div>
                        <div class="buscar">
                            <img src="https://i26.servimg.com/u/f26/20/31/61/35/buscar10.png" alt="" />
                            <p>Hit enter to search</p>
                        </div>
                    </div>
                    <div class="nombre">
                        <div class="contenido-nombre">
                            <h1>Mexican Grilled Corn Recipe</h1>
                        </div>
                        <div class="caracteristica">
                            <div class="caracteristica-contenedor">
                                <div class="servicio">
                                    <img src="https://i26.servimg.com/u/f26/20/31/61/35/restau10.png" alt=""/>
                                    <p>4 Servicing</p>
                                </div>
                                <div class="tiempo">
                                    <img src="https://i26.servimg.com/u/f26/20/31/61/35/clock_10.png" alt="" />
                                    <p>40 Minute</p>
                                </div>
                                <div class="persona">
                                    <img src="https://i26.servimg.com/u/f26/20/31/61/35/user_110.png" alt="" />
                                    <p>Luice Fonci</p>
                                </div>
                            </div>
                        </div>
                        <div class="boton">
                            <p>View Recipes</p>
                        </div>
                    </div>
                    <div class="plato-inicio">
                        <img src="https://i26.servimg.com/u/f26/20/31/61/35/comida12.png" alt="" />
                        <img src="https://i26.servimg.com/u/f26/20/31/61/35/comida13.png" alt="" />
                        <img src="https://i26.servimg.com/u/f26/20/31/61/35/comida10.png" alt="" />
                        <img src="https://i26.servimg.com/u/f26/20/31/61/35/comida11.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}