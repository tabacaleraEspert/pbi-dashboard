// components/VariablesFisicas.js
import React from 'react';

function VariablesFisicas({ timeFilter }) {
  return (
    <div>
      <h2>Variables Físicas</h2>
      <p>Visualización por turno y por marca. Filtro aplicado: <strong>{timeFilter}</strong></p>
      {<iframe title="Variables fisicas cigarrillos v2" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=79e8d782-f759-4a60-85ac-4a7cfe6860b9&autoAuth=true&ctid=a8d68143-bc93-44e0-9e41-c1a344d4347c" frameborder="0" allowFullScreen="true"></iframe>}
    </div>
  );
}

export default VariablesFisicas;
