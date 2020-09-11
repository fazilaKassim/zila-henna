require('dotenv').config();
require('./config/mongo');
const cors = require('cors')
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const avisRouter = require('./routes/Avis');
const categorieRouter = require('./routes/Categorie');
const commandeRouter = require('./routes/Commande');
const livraisonRouter = require('./routes/Livraison');
const paiementRouter = require('./routes/Paiement');
const produitRouter = require('./routes/Produit');
const rdvRouter = require('./routes/RDV');

const app = express();
app.use(cors('*'))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/avis', avisRouter);
app.use('/categorie', categorieRouter);
app.use('/commande', commandeRouter);
app.use('/livraison', livraisonRouter);
app.use('/paiement', paiementRouter);
app.use('/produit', produitRouter);
app.use('/rdv', rdvRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
