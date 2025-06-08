import React from 'react'

import imagenQuien from "../resources/image3.png"

export const QuienesSomos = () => {
  return (
    <div >
        

        <div className="contenedor-clasico">
            <h1>¿Quienes Somos?</h1>
            <p>En Papelería Belen, somos más que una tienda de suministros. 
                Nos apasiona ofrecerte todo lo necesario para la escuela, la 
                oficina y tu creatividad. Desde nuestros inicios, hemos trabajado
                 con el compromiso de brindarte productos de alta calidad, precios 
                 accesibles y un servicio excepcional</p>

                 <img className="imageContenedor" src={imagenQuien}style={{width: 300, height: 350}}/>

        </div>



    </div>
  )
}
