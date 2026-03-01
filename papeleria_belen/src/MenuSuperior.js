import React, { useState } from 'react';
import { useRef } from "react";
import logo from "./resources/logo.png"
function MenuSuperior({ setSeccionActiva }) {

  const [activo,setActivo] = useState(false);
  const acitvacion = () =>{
setActivo(!activo);
  }
const refCaja = useRef(null);
  const actionOnclick=(data)=>{
  setSeccionActiva(data);
  setActivo(false);
  }
  
  return (



    <div className="menu_superior">
     

         <img src={logo}  
         style={{width: "calc(1px + 40vmin)", height: "calc(1px + 20vmin)", borderRadius:"100px"}}/>
     

      <div className="menu_superior_movil" >
        <button className='botonMenu' onClick={acitvacion}>Menu</button>
      </div>

      <div ref={refCaja} className={activo? 'datos_menu_superior activo': 'datos_menu_superior'}>
          
        <a href="#" onClick={(e) => actionOnclick("inicio")}>Inicio</a>
        <a href="#" onClick={(e) => actionOnclick("historia")}>Historia</a>
        <a href="#" onClick={(e) => actionOnclick("productos")}>productos</a>
        
       
       
      </div>

      


    </div>


  );
}

export default MenuSuperior; 
