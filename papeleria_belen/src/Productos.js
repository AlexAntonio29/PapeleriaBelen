import React from 'react'
import { ListaProductos } from './ListaProductos'
import { Libretas } from './productos/Libretas'
import { Otros } from './productos/Otros'
import { ProductoDia } from './inicio/ProductoDia'

export const Productos = () => {
  return (
    <div >
      <h1>PRODUCTOS</h1>
      <ProductoDia/>
      <Libretas/>
      <Otros/>

       
    </div>
  )
}