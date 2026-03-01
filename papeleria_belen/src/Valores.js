import React from 'react'
import img11 from "./resources/image2.png"

export const Valores = () => {
  return (
    <div className='contenedor-clasico' > <h1>Valores</h1>

    <ol>
    <li>Responsabilidad: Cumplimos con cada cliente como si fuera el primero.</li>
     <p></p>
    <li>Compromiso: Estamos dedicados a brindar soluciones rápidas y útiles.</li>
     <p></p>
    <li>Cercanía: Atendemos con amabilidad, como parte de una gran familia.</li>
     <p></p>
    <li>Calidad: Ofrecemos productos seleccionados con cuidado y criterio.</li>
     <p></p>
    <li>Honestidad: Transparencia en cada precio, en cada recomendación, en cada trato.</li>
    </ol>
          <img src={img11}  style={{margin:"10px",width: "calc(1px + 50vmin)", height: "calc(1px + 50vmin)", borderRadius:"100px"}}/>
    
    </div>
  )
}
