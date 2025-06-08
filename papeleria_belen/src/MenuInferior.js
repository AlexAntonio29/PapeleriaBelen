import React from 'react'
import imagen from './resources/wasao.png';
import imagen2 from './resources/face2.png';


export const MenuInferior = () => {
  return (
    <div className='menu-inferior'>

        <div>contacto: </div>
        
        <div className='contenido-menu-inferior' >

<div>
      <img src={imagen2} style={{width:100 ,height: 100}} />

      <p > Papelería Belén</p> 

</div>
      <div>
      <img src={imagen} style={{width:100 ,height: 100}} />

      <p  style={{marginTop:10}}> 951-643-50-67</p> 

</div>



      
      </div>


       
      

        



    </div>
  )
}
