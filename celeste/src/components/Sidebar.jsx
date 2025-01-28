import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/multas">Multas</Link></li>
        <li><Link to="/registro-multas">Registrar Multa</Link></li>
        <li><Link to="/registro-permisos">Registrar Permiso</Link></li>
        <li><Link to="/gestion-perfiles">Gestión de Perfiles</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
