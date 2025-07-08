const { Collection } = require("mongoose");

const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Rapero = new Schema(
  {
    nombre: {
      type: String,
    },
    alias: {
      type: String,
    },
    origen: {
      type: String,
    },
    campeonatos: {
      type: String,
    },
  },
  {
    collection: "freestyle",
  }
);

module.exports = mongoose.model("Rapero", Rapero);
