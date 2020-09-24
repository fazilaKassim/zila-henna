const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RdvSchema = Schema({
  User: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  Prenom: String,
  From: String,
  Telephone: Number,
  Sujet: String,
  Personne: Number,
  Date: Date,
  Message: String,
});

const UserModel = mongoose.model("rdv", RdvSchema);

module.exports = UserModel;
