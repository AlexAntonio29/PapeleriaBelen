import React from 'react'
import imagen from './resources/wasao.png';
import imagen2 from './resources/face.png';


export const MenuInferior = () => {
  return (
    <div className='menu-inferior'>

        <div>contacto: </div>
        
        

        <div className='contenido-menu-inferior' >

      <img src={imagen} style={{width:100 ,height: 100}} />

      <p> 951-341-21-20</p>

      <img src={imagen2} style={{width:60 ,height: 60}} />

      <p> Papeleria Belen</p>

           
        </div>
       
      

        



    </div>
  )
}
