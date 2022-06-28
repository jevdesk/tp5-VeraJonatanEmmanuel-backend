const Persona = require("../models/persona");
const personaCtrl = {};
personaCtrl.getPersonas = async (req, res) => {
  var personas = await Persona.find();
  res.json(personas);
};
personaCtrl.createPersona = async (req, res) => {
  var persona = new Persona(req.body);
  try {
    await persona.save();
    res.json({
      status: "1",
      msg: "Persona guardado.",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};
personaCtrl.getPersona = async (req, res) => {
  let email = req.params.email;
  const persona = await Persona.find({ email: email });
  res.json(persona);
};
/*personaCtrl.editPersona = async (req, res) => {
  const vpersona = new Persona(req.body);
  try {
    await Persona.updateOne({ _id: req.body._id }, vpersona);
    res.json({
      status: "1",
      msg: "Persona updated",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion",
    });
  }
};
personaCtrl.deletePersona = async (req, res) => {
  try {
    await Persona.deleteOne({ _id: req.params.id });
    res.json({
      status: "1",
      msg: "Persona removed",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion",
    });
  }
};*/
module.exports = personaCtrl;
