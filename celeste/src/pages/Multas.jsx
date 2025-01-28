import React, { useEffect, useState } from 'react';
import { getMultas } from '../api/api';

const Multas = () => {
  const [multas, setMultas] = useState([]);

  useEffect(() => {
    const fetchMultas = async () => {
      const data = await getMultas();
      setMultas(data);
    };

    fetchMultas();
  }, []);

  const handlePagar = (id) => {
    alert(`Pagar multa con ID: ${id}`);
  };

  return (
    <div className="multas-container">
      <h2>Multas Pendientes</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Concepto</th>
            <th>Monto</th>
            <th>Pago</th>
          </tr>
        </thead>
        <tbody>
          {multas.map((multa) => (
            <tr key={multa.id}>
              <td>{multa.fecha}</td>
              <td>{multa.concepto}</td>
              <td>{multa.monto}</td>
              <td>
                <button onClick={() => handlePagar(multa.id)}>Pagar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Multas;
