// components/Produccion.js
import React from 'react';

function Produccion({ timeFilter }) {
  return (
    <div>
      <h2>Producción (Plan vs Real)</h2>
      <p>Visualización total y por turno (3 turnos). Filtro aplicado: <strong>{timeFilter}</strong></p>
      {/* Integra aquí tu visualización */}
    </div>
  );
}

export default Produccion;
