// components/FiltrosTiempo.js
import React, { useState } from 'react';
import './FiltrosTiempo.css';

function FiltrosTiempo({ onFilterChange }) {
  const [selectedFilter, setSelectedFilter] = useState('diario');

  const handleSelectChange = (e) => {
    const newFilter = e.target.value;
    setSelectedFilter(newFilter);
    onFilterChange(newFilter);
  };

  return (
    <div className="filtros-container">
      <label htmlFor="timeFilter">Filtrar por:</label>
      <select id="timeFilter" value={selectedFilter} onChange={handleSelectChange}>
        <option value="diario">Últimos días</option>
        <option value="semanal">Últimas semanas</option>
        <option value="mensual">Últimos meses</option>
      </select>
    </div>
  );
}

export default FiltrosTiempo;
