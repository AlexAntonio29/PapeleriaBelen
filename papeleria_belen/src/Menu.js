import React from 'react'
import imagen from './resources/logo2.png';

export const Menu = () => {
  return (
    <div className='menu'>
        <h1>Papeleria Belen</h1>
       
        <img src={imagen} style={{width: 100, height: 100}}/>

            <h2 >

                "Papelería Belén, siempre contigo en cada tarea."
            </h2>



    </div>
  )
}
