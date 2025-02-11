// components/Seguridad.js
import React from 'react';
import './Visualizacion.css';


function Seguridad({ timeFilter }) {
  return (
    <div>
      <h2>Visualización en vivo</h2>
      {/* <p>Mostrando datos con el filtro: <strong>{timeFilter}</strong></p> */}
      {
        <iframe title="ParetoGD" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=a4988be9-a7a6-415f-8cd5-baede4232b36&autoAuth=true&ctid=a8d68143-bc93-44e0-9e41-c1a344d4347c" frameborder="0" allowFullScreen="true"></iframe>
      }
    </div>
  );
}

export default Seguridad;