import React from 'react'
import imagen from './resources/wasao.png';
import imagen2 from './resources/face2.png';
import ubi from './resources/ubicacion.PNG';


export const MenuInferior = () => {

  const enviarWhatsApp = () => {
    let numero = "5219516435067"; 
    let mensaje = "Hola, quiero más información!";
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank"); 
  };

  const enviarFacebook = () => {
    
    let url = `https://www.facebook.com/profile.php?id=61555297546007`;
    window.open(url, "_blank"); 
  };
   const enviarUbi = () => {
    
    let url = `https://maps.app.goo.gl/uQYgRkJWKRGaQ2mR9`;
    window.open(url, "_blank"); 
  };
  


  return (
    <div className='menu-inferior'>

        <div>contacto: </div>
        
        <div className='contenido-menu-inferior' >

<div>
      <img src={imagen2} onClick={e=>enviarFacebook()} style={{width:100 ,height: 100}} />

      <p > Papelería Belén</p> 

</div>
      <div>
      <img src={imagen} onClick={e=>enviarWhatsApp()} style={{width:100 ,height: 100}} />

      <p  style={{marginTop:10}}> 951-643-50-67</p> 

</div>

 <div>
  <p  style={{marginTop:10}}> Ubicación</p> 
      <img src={ubi} onClick={e=>enviarUbi()} 
      style={{width: "calc(1px + 40vmin)", height: "calc(1px + 40vmin)", borderRadius:"100px"}} />

     

</div>



      
      </div>
    </div>
  )
}
