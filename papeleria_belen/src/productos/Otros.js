import React from 'react'

import { BloqueProducto } from "../BloqueProducto";

const productos = [
  { id: 1, nombre: "Resistol Alfa 125g", precio: "28", imagen: require("../resources/producto/1.jpg") },
  { id: 2, nombre: "Marcador de aceite", precio: "35", imagen: require("../resources/producto/2.jpg") },
  { id: 3, nombre: "Juego de Pinceles", precio: "86", imagen: require("../resources/producto/3.jpg") },
  { id: 4, nombre: "Juego de Brocha", precio: "25", imagen: require("../resources/producto/4.jpg") },
  { id: 5, nombre: "Rafia", precio: "35", imagen: require("../resources/producto/5.jpg") },
 { id: 18, nombre: "Carpeta multiple", precio: "105", imagen: require("../resources/producto/18.jpg") },
  { id: 19, nombre: "Globo payaso N.9", precio: "85", imagen: require("../resources/producto/19.jpg") },
  { id: 20, nombre: "Cortina Cumpleaños", precio: "35", imagen: require("../resources/producto/20.jpg") },
   { id: 21, nombre: "Compas Delta Metal", precio: "46", imagen: require("../resources/producto/21.jpg") },
  { id: 22, nombre: "Compas Barrilito Plastico", precio: "34", imagen: require("../resources/producto/22.jpg") },
  { id: 23, nombre: "Compas Presicion Maped", precio: "75", imagen: require("../resources/producto/23.jpg") },
  { id: 24, nombre: "regla Flexible", precio: "45", imagen: require("../resources/producto/24.jpg") },
  { id: 25, nombre: "Juego Geometrico Maped", precio: "40", imagen: require("../resources/producto/25.jpg") },
  { id: 26, nombre: "Velas de Cumpleaños", precio: "10", imagen: require("../resources/producto/26.jpg") },

];

export const Otros = () => {

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
        <h1>Otros</h1>
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

