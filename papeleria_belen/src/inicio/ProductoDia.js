import React, { useEffect, useState } from 'react';
import imagen1 from '../resources/producto/18.jpg';
import imagen2 from '../resources/producto/19.jpg';
import imagen3 from '../resources/producto/20.jpg';
import imagen4 from '../resources/producto/5.jpg';
import imagen5 from '../resources/producto/6.jpg';
import imagen6 from '../resources/producto/10.jpg';

const images = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6];

export const ProductoDia = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carrusel">
      <div
        className="contenedor-imagenes"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div className="carrusel-item" key={i}>
            <img className="imagen-carrusel" src={img} alt={`Producto ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
