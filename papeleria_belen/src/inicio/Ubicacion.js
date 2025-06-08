import React from 'react'
import imagen from "../resources/image1.png"

export const Ubicacion = () => {
  return (
    <div>
        
        <h1></h1>

        <div className='contenedor-clasico'>

            <h2>¡Visítanos!</h2>
  <p>📍 Calle EMAUS s/n bajo el campo deportivo, Santa Cruz Xitla, Miahuatlan Oaxaca</p>
  <p>🕐 Lunes a viernes: 8 AM - 7 PM</p>
  <p>📞 WhatsApp: +52 951 643 50 67</p>

  <img src={imagen} style={{width:300, height:350}}/>
        </div>


    </div>
  )
}
