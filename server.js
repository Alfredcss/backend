const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const createError = require("http-errors");

mongoose
  //.connect("mongodb://127.0.0.1:27017/freestyle")
  .connect(
    "mongodb+srv://alfredofeti22:YWchsFPwmweaFBPo@freestyle.483nesl.mongodb.net/freestyle?retryWrites=true&w=majority&appName=freestyle"
  )
  .then((x) => {
    console.log(`Conectado exitosamente a la BD: "${x.connections[0].name}"`);
  })
  .catch((error) => {
    console.error("Error de conexión: ", error.reason);
  });

// Configuración del servidor web
const raperoRutas = require("./routes/rapero.routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", raperoRutas);

// Habilitamos el puerto
const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log("Servidor escuchando el puerto: " + port);
});

// Manejador de error 404
app.use((req, res, next) => {
  next(createError(404));
});

// Manejador de errores
app.use(function (err, req, res, next) {
  console.log(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
