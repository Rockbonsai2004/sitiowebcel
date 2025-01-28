import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <h1>Bienvenido a la aplicación de Gestión de Multas</h1>
        <p>Desde aquí puedes gestionar las multas, permisos y perfiles.</p>
      </div>
    </div>
  );
};

export default Home;
