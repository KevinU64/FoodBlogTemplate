import React from 'react';
import Food1 from './components/Food1';
import Food3 from './components/Food3';
import Food2 from './components/Food2';
import Food4 from './components/Food4';
import Catagoris from './components/Catagoris';
import getContentCatagoris from './components/assets/getContentCatagoris';
import TrandingRecipes from './components/TrandingRecipes';
import getContentTrandingRecipes from './components/assets/getContentTrandingRecipes';
import './global.css';
export default function App(){
  const data = getContentCatagoris();
  const data1 = getContentTrandingRecipes();
  return(
    <div className='contenedor-food'>
      {
        <Food1 />
      }
      {
        <Food3 />
      }
      {
        <Food2 />
      }
      {
        <Food4 />
      }
      {
        data.map((component)=>{
          return <Catagoris data={component}/>
        })
      }
      <div className="titulotr">Tranding Recipes</div>
      <div className="lineatr">
        <p>__________</p>
        _________________________
      </div>
      {
        
        data1.map((component)=>{
          return <TrandingRecipes data1={component}/>
        })
      }
    </div>
  )
}
