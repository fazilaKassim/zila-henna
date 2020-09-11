const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  Nom: String,
  Email: String,
  MotDePasse: String,
  Adress: {
    CodePostal: Number,
    Ville: String,
  },
  DateDeNaissance: Date,
  Telephone: Number,
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
