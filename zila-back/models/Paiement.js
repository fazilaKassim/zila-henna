const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaiementSchema = Schema({
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
  Montant: String,
  ModeDePaiement: String,
  paypal:String,
  statut: String,


});

const UserModel = mongoose.model("Paiement", PaiementSchema);

module.exports = UserModel;
