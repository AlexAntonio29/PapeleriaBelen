import React from 'react'
import imagen from './resources/logo2.png';
{


let name="";
let precio="0"
let direccionImagen="./resources/logo2.png";


}






export const BloqueProducto = ({ nombre, precio,imagen}) => {
  return (
    <div className='bloque-productos'>
        {
            //aqui debe de ir la imagen
        }
        
         <img class="img-circular"  src={imagen} style={{width: 150, height: 150}}/>
        <h2>{nombre}</h2>
        <h3  className='mod-precio'>$ {precio}</h3>







    </div>
  )
}
