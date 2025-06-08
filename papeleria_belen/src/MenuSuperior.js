import React, { useState } from 'react';

function MenuSuperior({ setSeccionActiva }) {

  const [activo,setActivo] = useState(false);
  const acitvacion = () =>{
setActivo(!activo);
  }
  
  return (



    <div className="menu_superior">
      <h1>Papeleria Belen</h1>

      <div className="menu_superior_movil" >
        <button className='botonMenu' onClick={acitvacion}>Menu</button>
      </div>

      <div className={activo? 'datos_menu_superior activo': 'datos_menu_superior'}>
          
        <a href="#" onClick={() => setSeccionActiva("inicio")}>Inicio</a>
        <a href="#" onClick={() => setSeccionActiva("nosotros")}>Nosotros</a>
        <a href="#" onClick={() => setSeccionActiva("historia")}>Historia</a>
        <a href="#" onClick={() => setSeccionActiva("vision")}>Vision</a>
        <a href="#" onClick={() => setSeccionActiva("valores")}>Valores</a>
        <a href="#" onClick={() => setSeccionActiva("testimonio")}>Testimonio</a>
        <a href="#" onClick={() => setSeccionActiva("productos")}>productos</a>
        
       
       
      </div>

      


    </div>


  );
}

export default MenuSuperior; 
