import React from 'react';

function Noticia() {
    const noticia = {
      Titulo:"React llego para quedarse",
      Descripcion:"Programacion"
  }
  
  const {Titulo, Descripcion} = noticia
    return (
      <div>
        <h1> Mi titulo:{Titulo}</h1>
      
      </div>
    )
  
  }
  export default Noticia;