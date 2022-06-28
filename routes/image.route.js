//defino controlador para el manejo de CRUD
const imageCtrl = require("./../controllers/image.controller");
//creamos el manejador de rutas
const express = require("express");
const router = express.Router();
//definimos las rutas para la gestion de amage
router.get("/", imageCtrl.getImages);
router.post("/", imageCtrl.createImage);
router.get("/:id", imageCtrl.getImage);
router.put("/:id", imageCtrl.editImage);
router.delete("/:id", imageCtrl.deleteImage);
//exportamos el modulo de rutas
module.exports = router;
