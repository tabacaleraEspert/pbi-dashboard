// components/Seguridad.js
import React from 'react';
import './Visualizacion.css';


function Seguridad({ timeFilter }) {
  return (
    <div>
      <h2>Visualización de Seguridad</h2>
      <p>Mostrando datos con el filtro: <strong>{timeFilter}</strong></p>
      {
        <iframe title="Seguridad" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=2a442f62-7195-434a-8874-0d5d837f8b9d&autoAuth=true&ctid=a8d68143-bc93-44e0-9e41-c1a344d4347c" frameborder="0" allowFullScreen="true"></iframe>
      }
    </div>
  );
}

export default Seguridad;