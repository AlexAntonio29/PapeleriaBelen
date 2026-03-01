import React from 'react'
import { ProductoDia } from './inicio/ProductoDia'
import { ProductosPopulares } from './inicio/ProductosPopulares'
import { QuienesSomos } from './inicio/QuienesSomos'
import {Ubicacion} from './inicio/Ubicacion'
import { Menu } from "./Menu";

import "./Inicio.css"
import { OtrosServicios } from './inicio/OtrosServicios'
import { Video } from './inicio/Video'


export const Inicio = () => {
  return (
    <div > 
    <Menu />

    <div className='inicio'>
      <Video/>
      
    <ProductosPopulares/>
    <OtrosServicios/>
    <QuienesSomos/>
    <Ubicacion/>
    </div>
    

       
    </div>
    
  )
}
