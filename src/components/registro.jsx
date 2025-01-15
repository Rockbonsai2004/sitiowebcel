import React from 'react';

const Registro = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registro exitoso');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.title}>Registro</h2>

      <div style={styles.field}>
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ingresa tu correo electrónico"
          style={styles.input}
        />
      </div>

      <div style={styles.field}>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Crea una contraseña"
          style={styles.input}
        />
      </div>

      <button type="submit" style={styles.button}>
        Registrarse
      </button>
    </form>
  );
};

const styles = {
  form: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' },
  title: { marginBottom: '20px' },
  field: { marginBottom: '20px', width: '100%', maxWidth: '300px' },
  input: { width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' },
  button: { padding: '10px 20px', background: '#28A745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' },
};

export default Registro;
