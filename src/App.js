import React from 'react';
import Food1 from './components/Food1';
import Food3 from './components/Food3';
import Food2 from './components/Food2';
import './global.css';
export default function App(){
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
    </div>
  )
}
