import React from 'react'
import imagen from './resources/logo2.png';

export const Menu = () => {
  return (
    <div className='menu'>
       
       
        <img className='menu-imagen'  src={imagen} style={{width:350, height:350}}/>

            <h2 >

                "Papelería Belén, siempre contigo en cada tarea."
            </h2>



    </div>
  )
}
