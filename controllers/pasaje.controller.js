const Pasaje = require("../models/pasaje");
const pasajeCtrl = {};
pasajeCtrl.getPasajes = async (req, res) => {
  var pasajes = await Pasaje.find().populate("pasajero");
  res.json(pasajes);
};
pasajeCtrl.getPasajesCategorias = async (req, res) => {
  let categoria = req.params.categoria;
  var pasajes = await Pasaje.find({ caegoriaPasajero: categoria }).populate(
    "pasajero"
  );
  res.json(pasajes);
};
pasajeCtrl.createPasaje = async (req, res) => {
  var pasaje = new Pasaje(req.body);
  try {
    await pasaje.save();
    res.json({
      status: "1",
      msg: "Pasaje guardado.",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};
pasajeCtrl.getPasaje = async (req, res) => {
  const pasaje = await Pasaje.findById(req.params.id).populate("pasajero");
  res.json(pasaje);
};
pasajeCtrl.editPasaje = async (req, res) => {
  const vpasaje = new Pasaje(req.body);
  try {
    await Pasaje.updateOne({ _id: req.body._id }, vpasaje);
    res.json({
      status: "1",
      msg: "Pasaje updated",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion",
    });
  }
};
pasajeCtrl.deletePasaje = async (req, res) => {
  try {
    await Pasaje.deleteOne({ _id: req.params.id });
    res.json({
      status: "1",
      msg: "Pasaje removed",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion",
    });
  }
};
module.exports = pasajeCtrl;
