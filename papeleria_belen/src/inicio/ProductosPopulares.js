import React from 'react';
import "./css/ProductosPopulares.css";

import { BloqueProducto } from "../BloqueProducto";

const productos = [
  { id: 1, nombre: "Libreta Norma Pautado", precio: "65", imagen: require("../resources/producto/17.jpg") },
  { id: 2, nombre: "Carpeta multiple", precio: "105", imagen: require("../resources/producto/18.jpg") },
  { id: 3, nombre: "Globo payaso N.9", precio: "85", imagen: require("../resources/producto/19.jpg") },
  { id: 4, nombre: "Cortina Cumpleaños", precio: "35", imagen: require("../resources/producto/20.jpg") },
];

export const ProductosPopulares = () => {

  // 🔹 Define la función fuera del return
  const enviarWhatsApp = (nombreProducto) => {
    let numero = "5219516435067"; 
    let mensaje = "Hola, quiero más información! de este producto: "+nombreProducto;
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank"); 
  };

  return (
    <div>
      <div className="contenedor-clasico">
        <h1>Productos Populares</h1>
        <p></p>

        {/* 🔹 Renderizar bloques de productos dinámicamente */}
        <div className="contenedor" >
          {productos.map((producto) => (
            <div className="contenedor" key={producto.id} onClick={() => enviarWhatsApp(producto.nombre)}>
            <BloqueProducto key={producto.id} nombre={producto.nombre} precio={producto.precio} imagen={producto.imagen} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
