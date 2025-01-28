import React, { useState } from 'react';
import { postPermiso } from '../api/api';

const RegistroPermisos = () => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [motivo, setMotivo] = useState('');

  const handleSubmit = async () => {
    const nuevoPermiso = {
      nombre,
      fecha,
      motivo,
    };

    await postPermiso(nuevoPermiso);
    alert('Permiso registrado correctamente');
  };

  return (
    <div className="registro-permisos-container">
      <h2>Registrar Permiso</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />
      <input
        type="text"
        placeholder="Motivo"
        value={motivo}
        onChange={(e) => setMotivo(e.target.value)}
      />
      <button onClick={handleSubmit}>Guardar Permiso</button>
    </div>
  );
};

export default RegistroPermisos;
