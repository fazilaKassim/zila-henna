const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema; //fonction schéma

//schema de donnée avec tout les infos
const UserSchema = Schema({
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  nom: String,
  prenom: String,
  email: String,
  telephone: Number,
  password: String,
  confirmationmdp: String,
  dateDeNaissance: Date,
  coordonnees: {
    adresse: String,
    complementAdress: String,
    codePostal: Number,
    ville: String,
  },
});

const UserModel = mongoose.model("User", UserSchema); //nom du model + nom du schema

module.exports = UserModel; //export du model
