require('dotenv').config();
require('./config/mongo');
const cors = require('cors')
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
// CORS SETUP
app.use(cors(process.env.FRONT_URL));

// POST SETUP
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const avisRouter = require('./routes/Avis');
const categorieRouter = require('./routes/Categorie');
const commandeRouter = require('./routes/Commande');
const livraisonRouter = require('./routes/Livraison');
const paiementRouter = require('./routes/Paiement');
const produitRouter = require('./routes/Produit');
const rdvRouter = require('./routes/RDV');

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/avis', avisRouter);
app.use('/categorie', categorieRouter);
app.use('/commande', commandeRouter);
app.use('/livraison', livraisonRouter);
app.use('/paiement', paiementRouter);
app.use('/produit', produitRouter);
app.use('/rdv', rdvRouter);


module.exports = app;
