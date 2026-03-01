import React from 'react'

import { BloqueProducto } from "../BloqueProducto";

const productos = [
 { id: 6, nombre: "Libreta Norma Cuadro Aleman", precio: "67", imagen: require("../resources/producto/6.jpg")},
  { id: 7, nombre: "Libreta Rayter Cocido Cuadro Aleman", precio: "55", imagen: require("../resources/producto/7.jpg") },
  { id: 8, nombre: "Libreta Rayter Doble Espiral Cuadro Aleman", precio: "32", imagen: require("../resources/producto/8.jpg") },
  { id: 9, nombre: "Libreta Scribe Raya", precio: "28", imagen: require("../resources/producto/9.jpg") },
  { id: 10, nombre: "Libreta Sazz raya", precio: "39", imagen: require("../resources/producto/10.jpg") },
   { id: 11, nombre: "bloq de dibujo Profesional", precio: "32", imagen: require("../resources/producto/11.jpg") },
  { id: 12, nombre: "Bloq de dibujo 10 hojas", precio: "40", imagen: require("../resources/producto/12.jpg") },
  { id: 13, nombre: "Bloq de dibujo 20 hojas", precio: "50", imagen: require("../resources/producto/13.jpg") },
  { id: 14, nombre: "Libreta Scrib3 Cuadro", precio: "28", imagen: require("../resources/producto/14.jpg")},
  { id: 15, nombre: "Libreta Sazz Cuadro ", precio: "39", imagen: require("../resources/producto/15.jpg") },
  { id: 16, nombre: "Libreta Scribe Pautado 50 hojas", precio: "30", imagen: require("../resources/producto/16.jpg") },
  { id: 17, nombre: "Libreta Norma Pautado", precio: "65", imagen: require("../resources/producto/17.jpg") }
 
];

export const Libretas = () => {

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
        <h1>Hojas</h1>
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
