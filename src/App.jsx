import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Registro from './components/registro'; // Importa tu componente de registro.

function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </div>
    </Router>
  );
}

// Estilos para centrar el contenido y agregar fondo blanco
const styles = {
  appContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#FFFFFF', // Fondo blanco en formato hexadecimal
  },
};

export default App;

