import React from 'react';
import './style.css';

const comentario = {
  nombre: 'Milena',
  comentario: 'Felicidades'
};

const estiloComentario = {
  color: 'pink',
  fontWeight: 600
};

export default function App() {
  return (
    <div className="contenedor">
      <img
        style={{ objectFit: 'cover' }}
        src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png"
      />
      <div className="contenido">
        <div style={{ fontWeight: 900 }}>{comentario.nombre}</div>
        <div style={estiloComentario}>{comentario.comentario}</div>
      </div>
      <button>Eliminar</button>
    </div>
  );
}
