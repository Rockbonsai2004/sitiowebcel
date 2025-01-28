const mongoose = require('mongoose');

const perfilSchema = new mongoose.Schema({
  edificio: { type: String, required: true },
  departamento: { type: String, required: true },
  duenyo: { type: String, required: true },
  inquilino: { type: String, required: true },
});

module.exports = mongoose.model('Perfil', perfilSchema);
