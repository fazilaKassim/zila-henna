const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AvisSchema = Schema({
  User: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  Product: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  Titre: String,
  Description: String,
  Note: Number,
});

const AvisModel = mongoose.model("Avis", AvisSchema);

module.exports = AvisModel;
