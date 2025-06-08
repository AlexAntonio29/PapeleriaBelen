import React from 'react'
import { ProductoDia } from './inicio/ProductoDia'
import { ProductosPopulares } from './inicio/ProductosPopulares'
import { QuienesSomos } from './inicio/QuienesSomos'
import {Ubicacion} from './inicio/Ubicacion'

import "./Inicio.css"


export const Inicio = () => {
  return (
    <div className='inicio'> 

    <ProductoDia/>
    <ProductosPopulares/>
    <QuienesSomos/>
    <Ubicacion/>

       
    </div>
    
  )
}
