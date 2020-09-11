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
  Sujet: String,
  Date: Date,
  Occasion: String,
  NombreDePerson: Number,
  Message: String,
});

const UserModel = mongoose.model("rdv", RdvSchema);

module.exports = UserModel;
