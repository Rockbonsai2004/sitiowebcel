import React, { useState } from 'react';
import { postMulta } from '../api/api';

const RegistroMultas = () => {
  const [nombre, setNombre] = useState('');
  const [concepto, setConcepto] = useState('');
  const [monto, setMonto] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = async () => {
    const nuevaMulta = {
      nombre,
      concepto,
      monto,
      fecha,
    };
    
    await postMulta(nuevaMulta);
    alert('Multa registrada correctamente');
  };

  return (
    <div className="registro-multa-container">
      <h2>Registrar Multa</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Concepto"
        value={concepto}
        onChange={(e) => setConcepto(e.target.value)}
      />
      <input
        type="number"
        placeholder="Monto"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
      />
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />
      <button onClick={handleSubmit}>Guardar Multa</button>
    </div>
  );
};

export default RegistroMultas;
