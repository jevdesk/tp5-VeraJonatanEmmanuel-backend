const mongoose = require('mongoose');
const {Schema} = mongoose;
const TransaccionSchema = new Schema({

monedaOrigen: { type: String, required: true },
cantidadOrigen: { type: Number, required: true },
monedaDestino: { type: String, required: true },
cantidadDestino: { type: Number, required: true },
emailCliente: {type:String, required: true},
tasaConversion: {type:Number, required:true},
})
module.exports = mongoose.models.Transaccion || mongoose.model('Transaccion', TransaccionSchema);



/*
- monedaOrigen: String
- cantidadOrigen: number
- monedaDestino: String
- cantidadDestino: number
- emailCliente: String
- tasaConversion: number // Dato que ingresa el cliente,
y se ha utilizado para calcular cantidadDestino.*/ 