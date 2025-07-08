const express = require("express");
const raperoRutas = express.Router();

// Declaramos un objeto de nuestro modelo
let rapero = require("../models/FMS-WORLD");

// Agregar un empleado
raperoRutas.route("/agregar").post((req, res) => {
  rapero
    .create(req.body)
    .then((data) => {
      console.log("Se insertó correctamente el documento");
      res.send(data);
    })
    .catch((error) => {
      console.error("Error al insertar el documento", error);
      res.status(500).send(error);
    });
});

// Obtener todos los empleados
raperoRutas.route("/rapero").get((req, res) => {
  rapero
    .find()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(error);
    });
});

// Obtener un empleado por ID
raperoRutas.route("/rapero/:id").get((req, res) => {
  rapero
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(error);
    });
});

// Actualizar un empleado
raperoRutas.route("/actualizar/:id").put((req, res) => {
  rapero
    .findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    ) // Para devolver el documento actualizado
    .then((data) => {
      console.log("Se actualizó correctamente el documento");
      res.send(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(error);
    });
});

// Eliminar un empleado
raperoRutas.route("/eliminar/:id").delete((req, res) => {
  rapero
    .findByIdAndDelete(req.params.id)
    .then((data) => {
      console.log("Se eliminó correctamente el documento");
      res.send(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(error);
    });
});

module.exports = raperoRutas;
