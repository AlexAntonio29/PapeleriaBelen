import React from 'react'
import img10 from "./resources/image1.png"

export const Vision = () => {
  return (
    <div className='contenedor-clasico'>
<h1 >Visión</h1>

        <p>Ser la papelería preferida de la región, reconocida por su calidez humana, variedad de productos y compromiso con el aprendizaje y el crecimiento de nuestros clientes.</p>
    
      <img src={img10}  style={{margin:"10px",width: "calc(1px + 50vmin)", height: "calc(1px + 50vmin)", borderRadius:"100px"}}/>
    
    </div>
  )
}
