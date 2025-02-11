// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Seguridad from './components/Seguridad';
import CumplimientoPlan from './components/CumplimientoPlan';
import Produccion from './components/Produccion';
import EficienciaMaquina from './components/EficienciaMaquina';
import EficienciaTabaco from './components/EficienciaTabaco';
import VariablesFisicas from './components/VariablesFisicas';
import FiltrosTiempo from './components/FiltrosTiempo';
import ParetoGD1 from './components/ParetoGD1';

function App() {
  const [timeFilter, setTimeFilter] = useState('diario');

  const handleFilterChange = (filterValue) => {
    setTimeFilter(filterValue);
  };

  return (
    <Router>
      <div className="app-container">
      <header>
          <nav>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
              <li><Link to="/seguridad">Seguridad</Link></li>
              <li><Link to="/cumplimiento">Cumplimiento Plan</Link></li>
              <li><Link to="/produccion">Producción</Link></li>
              <li><Link to="/eficiencia-maquina">Eficiencia Máquina</Link></li>
              <li><Link to="/eficiencia-tabaco">Eficiencia Tabaco</Link></li>
              <li><Link to="/variables-fisicas">Variables Físicas</Link></li>
              <li><Link to="/pareto-GD1">Pareto GD1</Link></li>
            </ul>
          </nav>
        </header>

        <section className="filter-section">
          <FiltrosTiempo onFilterChange={handleFilterChange} />
        </section>

        <main className="main-container">
          <Routes>
            <Route path="/seguridad" element={<Seguridad timeFilter={timeFilter} />} />
            <Route path="/cumplimiento" element={<CumplimientoPlan timeFilter={timeFilter} />} />
            <Route path="/produccion" element={<Produccion timeFilter={timeFilter} />} />
            <Route path="/eficiencia-maquina" element={<EficienciaMaquina timeFilter={timeFilter} />} />
            <Route path="/eficiencia-tabaco" element={<EficienciaTabaco timeFilter={timeFilter} />} />
            <Route path="/variables-fisicas" element={<VariablesFisicas timeFilter={timeFilter} />} />
            <Route path="/pareto-GD1" element={<ParetoGD1 timeFilter={timeFilter} />} />
            {/* Ruta por defecto */}
            <Route path="/" element={<Seguridad timeFilter={timeFilter} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
