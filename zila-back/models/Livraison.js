const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LivraisonSchema = Schema({
  User: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  Commande: [
    {
      type: Schema.Types.ObjectId,
      ref: "commander",
    },
  ],
  ModeDeLivraison: String,
  DateDeLivraison: String,
  ref: String,
  statut: String,
});

const UserModel = mongoose.model("Livraison", LivraisonSchema);

module.exports = UserModel;
