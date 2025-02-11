// components/EficienciaTabaco.js
import React from 'react';

function EficienciaTabaco({ timeFilter }) {
  return (
    <div>
      <h2>Eficiencia de Tabaco</h2>
      <p>Visualización total. Filtro aplicado: <strong>{timeFilter}</strong></p>
      {<iframe title="RendimientoTabaco" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=20fd5838-3c27-4f61-8f35-46bd336a2715&autoAuth=true&ctid=a8d68143-bc93-44e0-9e41-c1a344d4347c" frameborder="0" allowFullScreen="true"></iframe>}
    </div>
  );
}

export default EficienciaTabaco;
