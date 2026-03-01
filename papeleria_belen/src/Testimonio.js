import React from 'react'
import img12 from "./resources/image3.png"

export const Testimonio = () => {
  return (
    <div className='contenedor-clasico'>
            <h1>Testimonio</h1>

        

            <ol>

            <li>🗨️ “Siempre encuentro lo que necesito, y la atención es excelente. Papelería Belén me ha acompañado desde la primaria hasta la universidad.”</li>
            <p></p>
            <li>🗨️ “Es mi primera opción cuando necesito algo para la oficina o para mis hijos. Precios justos y servicio amable.” </li>
             <p></p>
            <li>🗨️ “Me encanta la variedad y el ambiente familiar. Se nota que les importa el cliente.”</li>
           
            </ol>

  <img src={img12}  style={{margin:"10px",width: "calc(1px + 50vmin)", height: "calc(1px + 50vmin)", borderRadius:"100px"}}/>
    
    </div>
  )
}
