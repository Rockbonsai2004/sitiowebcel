const mongoose = require('mongoose');

const permisoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  porton: { type: String, required: true },
  celular: { type: String, required: true },
  edificio: { type: String, required: true },
  departamento: { type: String, required: true },
});

module.exports = mongoose.model('Permiso', permisoSchema);
