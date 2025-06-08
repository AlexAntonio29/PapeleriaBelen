import { useState } from "react";
import "./App.css";
import { Menu } from "./Menu";
import MenuSuperior from "./MenuSuperior"; // ✅ Correcto para export default

import { MenuInferior } from "./MenuInferior";
import { Inicio } from "./Inicio";
import { Nosotros } from "./Nosotros";
import { Historia } from "./Historia";
import { Vision } from "./Vision";
import { Valores } from "./Valores";
import { Testimonio } from "./Testimonio";
import { Productos } from "./Productos";


function App() {
  const [seccionActiva, setSeccionActiva] = useState("inicio"); // Sección por defecto

  return (
    <div className="App">
      <header className="App-header">
        
           <MenuSuperior setSeccionActiva={setSeccionActiva} /> {/* Pasar función a MenuSuperior */}
           
        <Menu />
     

        {/* Renderizar solo el componente de la sección activa */}
        {seccionActiva === "inicio" && <Inicio />}
        {seccionActiva === "nosotros" && <Nosotros />}
        {seccionActiva === "historia" && <Historia />}
        {seccionActiva === "productos" && <Productos/>}
        {seccionActiva === "vision" && <Vision/>}
        {seccionActiva === "valores" && <Valores/>}
        {seccionActiva === "testimonio" && <Testimonio/>}


        <MenuInferior />
      </header>
    </div>
  );
}

export default App;
