const mongoose = require("mongoose");
const { Schema } = mongoose;
const LibroSchema = new Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  imagen: { type: String, required: true },
  stock: { type: Number, required: true },
  destacado: { type: Boolean, required: true },
});
module.exports = mongoose.models.Libro || mongoose.model("Libro", LibroSchema);
/*
título: String
- descripción: String
- imagen: String //url de una imagen el la web para mostrar
- stock: number
- destacado: Boolean // solo algunos libros son destacados
*/
