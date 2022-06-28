//defino controlador para el manejo de CRUD
const transaccionCtrl = require('./../controllers/transaccion.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de transaccion
router.get('/', transaccionCtrl.getTransaccions);
router.get('/email/:emailCliente', transaccionCtrl.getTransaccionsEmail);
router.get('/countrys/', transaccionCtrl.getTransaccionsCountrys);
router.post('/', transaccionCtrl.createTransaccion);

//router.put('/:id', transaccionCtrl.editTransaccion);
//router.delete('/:id', transaccionCtrl.deleteTransaccion);
//exportamos el modulo de rutas
module.exports = router;