import React from 'react'
import { Nosotros } from "./Nosotros";
import { Vision } from "./Vision";
import { Valores } from "./Valores";
import { Testimonio } from "./Testimonio";
import img1 from "./resources/1.jpg"
import img2 from "./resources/2.jpg"
import img3 from "./resources/3.jpg"
import img4 from "./resources/4.jpg"
import img5 from "./resources/5.jpg"
import img6 from "./resources/6.jpg"
import img7 from "./resources/7.jpg"
import img8 from "./resources/8.jpg"
import img9 from "./resources/9.jpg"

import img10 from "./resources/image1.png"
import img11 from "./resources/image2.png"
import img12 from "./resources/image3.png"

export const Historia = () => {
  return (
    <div >


      <div style={{marginTop:"200px"}} className='contenedor-clasico'>


          <h1>Historia</h1>

<p>Papelería Belén nació con el sueño de apoyar a estudiantes, docentes y emprendedores con materiales accesibles y confiables. Comenzamos como un pequeño negocio familiar y, gracias a la confianza de nuestros clientes, hemos crecido manteniendo siempre los valores que nos dieron origen: honestidad, servicio y compromiso. Nuestra historia es también la historia de quienes nos eligen día a día.</p>
    
       <img src={img6}  style={{width: "calc(1px + 50vmin)", height: "calc(1px + 50vmin)", borderRadius:"100px"}}/>
      </div>


      
      
    <Nosotros/>
<h1 style={{color:"white"}}>Visitanos!!!</h1>
    <div className='grid-image'>

      
   <img src={img5}  style={{ margin:"10px",width: "calc(1px + 50vmin)", height: "calc(1px + 50vmin)", borderRadius:"100px"}}/>
      <img src={img4}  style={{margin:"10px",width: "calc(1px + 50vmin)", height: "calc(1px + 50vmin)", borderRadius:"100px"}}/>
     <img src={img3}  style={{margin:"10px",width: "calc(1px + 50vmin)", height: "calc(1px + 50vmin)", borderRadius:"100px"}}/>
      <img src={img9}  style={{margin:"10px",width: "calc(1px + 50vmin)", height: "calc(1px + 50vmin)", borderRadius:"100px"}}/>
     </div>
    <Vision/>
      
    <Valores/>
        
    <Testimonio/>
       
    
    
    </div>




  
  )
}
