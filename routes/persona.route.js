//defino controlador para el manejo de CRUD
const personaCtrl = require("./../controllers/persona.controller");
//creamos el manejador de rutas
const express = require("express");
const router = express.Router();
//definimos las rutas para la gestion de persona
router.get("/", personaCtrl.getPersonas);
router.post("/", personaCtrl.createPersona);
router.get("/email/:email", personaCtrl.getPersona);
//router.put("/:id", personaCtrl.editPersona);
//router.delete("/:id", personaCtrl.deletePersona);
//exportamos el modulo de rutas
module.exports = router;
