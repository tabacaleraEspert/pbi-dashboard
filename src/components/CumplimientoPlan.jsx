// components/CumplimientoPlan.js
import React from 'react';

function CumplimientoPlan({ timeFilter }) {
  return (
    <div>
      <h2>Cumplimiento del Plan (%)</h2>
      <p>Filtro aplicado: <strong>{timeFilter}</strong></p>
      {<iframe title="CumplimientoPlan" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=7ae8ccb7-945d-45df-9e2e-95d834cff94a&autoAuth=true&ctid=a8d68143-bc93-44e0-9e41-c1a344d4347c" frameborder="0" allowFullScreen="true"></iframe>}
    </div>
  );
}

export default CumplimientoPlan;
