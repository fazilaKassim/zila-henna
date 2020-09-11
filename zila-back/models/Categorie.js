const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorieSchema = Schema({
  Nom: String,
});

const UserModel = mongoose.model("categorie", CategorieSchema);

module.exports = UserModel;
