import React from 'react';
import Food1 from './components/Food1';
import './global.css';
export default function App(){
  return(
    <div className='contenedor-food'>
      {
        <Food1 />
      }
    </div>
  )
}
