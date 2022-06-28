const mongoose = require("mongoose");
const { Schema } = mongoose;
const ImageSchema = new Schema({
  nombre: { type: String, required: true },
  peso: { type: Number, required: true },
  tipo: { type: String, required: true },
  base64: { type: String, required: true },
});
module.exports = mongoose.models.Image || mongoose.model("Image", ImageSchema);
