function MenuSuperior({ setSeccionActiva }) {
  return (
    <div className="menu_superior">
      <div className="datos_menu_superior">
        <a href="#" onClick={() => setSeccionActiva("inicio")}>Inicio</a>
        <a href="#" onClick={() => setSeccionActiva("nosotros")}>Nosotros</a>
        <a href="#" onClick={() => setSeccionActiva("historia")}>Historia</a>
        <a href="#" onClick={() => setSeccionActiva("vision")}>Vision</a>
        <a href="#" onClick={() => setSeccionActiva("valores")}>Valores</a>
        <a href="#" onClick={() => setSeccionActiva("testimonio")}>Testimonio</a>
      </div>
    </div>
  );
}

export default MenuSuperior; 
