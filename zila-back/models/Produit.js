const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProduitSchema = Schema({
  Nom: String,
  Prix: String,
  Ref: String,
  Description: String,
  Categorie: String,
  Stock: Number,
  Avis: [
    {
      type: Schema.Types.ObjectId,
      ref: "avis",
    },
  ],
});

const UserModel = mongoose.model("Produit", ProduitSchema);

module.exports = UserModel;
