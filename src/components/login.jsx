import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email) {
      setError('Por favor, completa el campo.');
      return;
    }

    setError('');
    console.log('Inicio de sesión:', formData);
    alert('Inicio de sesión exitoso');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.title}>Inicio de Sesión</h2>
      {error && <p style={styles.error}>{error}</p>}

      <div style={styles.field}>
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ingresa tu correo"
          style={styles.input}
        />
        <p>
          ¿No tienes cuenta?{' '}
          <Link to="/registro" style={styles.link}>
            Regístrate
          </Link>
        </p>
      </div>

      <button type="submit" style={styles.button}>
        Iniciar Sesión
      </button>
    </form>
  );
};

// Estilos del formulario
const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Fondo blanco del formulario
    padding: '20px',
    borderRadius: '10px', // Bordes redondeados
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra ligera
  },
  title: {
    marginBottom: '20px',
  },
  field: {
    marginBottom: '20px',
    width: '100%',
    maxWidth: '300px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    width: '100%',
    maxWidth: '300px',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: '#FF0000',
    fontSize: '0.9rem',
    marginBottom: '10px',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
};

export default Login;
