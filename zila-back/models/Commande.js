const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommandeSchema = Schema({
  User: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],

  Produit: [
    {
      type: Schema.Types.ObjectId,
      ref: "produit",
    },
  ],

  
  Livraison: [
    {
      type: Schema.Types.ObjectId,
      ref: "Livraison",
    },
  ],

StatutDuPaiement: [
    {
      type: Schema.Types.ObjectId,
      ref: "statutDuPaiement",
    },
  ],
 DateDeCommande: Date
});

const UserModel = mongoose.model("Commande", CommandeSchema);

module.exports = UserModel;
