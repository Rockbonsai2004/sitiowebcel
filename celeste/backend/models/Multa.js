const mongoose = require('mongoose');

const multaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  fecha: { type: Date, required: true },
  concepto: { type: String, required: true },
  monto: { type: Number, required: true },
  pago: { type: Boolean, default: false },
});

module.exports = mongoose.model('Multa', multaSchema);
