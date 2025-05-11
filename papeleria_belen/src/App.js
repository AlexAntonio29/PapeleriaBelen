import logo from "./logo.svg";
import "./App.css";

import { Menu } from "./Menu";
import { MenuSuperior } from "./MenuSuperior";
import { BloqueProducto } from "./BloqueProducto";
import { MenuInferior } from "./MenuInferior";



// 🔹 Definir el array de productos correctamente fuera del bloque innecesario
const productos = [
  { id: 1, nombre: "Resistol Alfa 125g", precio: "28", imagen: require("./resources/producto/1.jpg") },
  { id: 2, nombre: "Marcador de aceite", precio: "35", imagen: require("./resources/producto/2.jpg") },
  { id: 3, nombre: "Juego de Pinceles", precio: "86", imagen: require("./resources/producto/3.jpg") },
  { id: 4, nombre: "Juego de Brocha", precio: "25", imagen: require("./resources/producto/4.jpg") },
  { id: 5, nombre: "Rafia", precio: "35", imagen: require("./resources/producto/5.jpg") },
  { id: 6, nombre: "Libreta Norma Cuadro Aleman", precio: "67", imagen: require("./resources/producto/6.jpg")},
  { id: 7, nombre: "Libreta Rayter Cocido Cuadro Aleman", precio: "55", imagen: require("./resources/producto/7.jpg") },
  { id: 8, nombre: "Libreta Rayter Doble Espiral Cuadro Aleman", precio: "32", imagen: require("./resources/producto/8.jpg") },
  { id: 9, nombre: "Libreta Scribe Raya", precio: "28", imagen: require("./resources/producto/9.jpg") },
  { id: 10, nombre: "Libreta Sazz raya", precio: "39", imagen: require("./resources/producto/10.jpg") },
   { id: 11, nombre: "bloq de dibujo Profesional", precio: "32", imagen: require("./resources/producto/11.jpg") },
  { id: 12, nombre: "Bloq de dibujo 10 hojas", precio: "40", imagen: require("./resources/producto/12.jpg") },
  { id: 13, nombre: "Bloq de dibujo 20 hojas", precio: "50", imagen: require("./resources/producto/13.jpg") },
  { id: 14, nombre: "Libreta Scrib3 Cuadro", precio: "28", imagen: require("./resources/producto/14.jpg")},
  { id: 15, nombre: "Libreta Sazz Cuadro ", precio: "39", imagen: require("./resources/producto/15.jpg") },
  { id: 16, nombre: "Libreta Scribe Pautado 50 hojas", precio: "30", imagen: require("./resources/producto/16.jpg") },
  { id: 17, nombre: "Libreta Norma Pautado", precio: "65", imagen: require("./resources/producto/17.jpg") },
  { id: 18, nombre: "Carpeta multiple", precio: "105", imagen: require("./resources/producto/18.jpg") },
  { id: 19, nombre: "Globa payado N. 9", precio: "85", imagen: require("./resources/producto/19.jpg") },
  { id: 20, nombre: "Cortina Cumpleaños", precio: "35", imagen: require("./resources/producto/20.jpg") },
   { id: 21, nombre: "Compas Delta Metal", precio: "46", imagen: require("./resources/producto/21.jpg") },
  { id: 22, nombre: "Compas Barrilito Plastico", precio: "34", imagen: require("./resources/producto/22.jpg") },
  { id: 23, nombre: "Compas Presicion Maped", precio: "75", imagen: require("./resources/producto/23.jpg") },
  { id: 24, nombre: "regla Flexible", precio: "45", imagen: require("./resources/producto/24.jpg") },
  { id: 25, nombre: "Juego Geometrico Maped", precio: "40", imagen: require("./resources/producto/25.jpg") },
  { id: 26, nombre: "Velas de Cumpleaños", precio: "10", imagen: require("./resources/producto/26.jpg") },

];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <MenuSuperior />

        {/* 🔹 Renderizar bloques de productos dinámicamente */}
        <div className="contenedor">
          {productos.map((producto) => (
            <BloqueProducto key={producto.id} nombre={producto.nombre} precio={producto.precio} imagen={producto.imagen} />
          ))}
        </div>

        <MenuInferior />
      </header>
    </div>
  );
}

export default App;
