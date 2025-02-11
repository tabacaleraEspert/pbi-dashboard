// components/EficienciaMaquina.js
import React from 'react';

function EficienciaMaquina({ timeFilter }) {
  return (
    <div>
      <h2>Eficiencia de Máquina (% eficiencia)</h2>
      <p>Visualización total y por turno. Filtro aplicado: <strong>{timeFilter}</strong></p>
      {<iframe title="Rendimiento maquinasV1.1" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=b83df683-a5e2-4a3e-9dc0-5cb96672b793&autoAuth=true&ctid=a8d68143-bc93-44e0-9e41-c1a344d4347c" frameborder="0" allowFullScreen="true"></iframe>}
    </div>
  );
}

export default EficienciaMaquina;
