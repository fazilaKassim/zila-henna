require('dotenv').config();
require('./config/mongo');
const cors = require('cors')
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const bodyParser = require('body-parser')


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
// CORS SETUP
app.use(cors(["http://localhost:8888", "http://localhost:8080"]));
// app.use(cors("*"));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));

// POST SETUP
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 60000 }, // in millisec
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60, // 1 day
    }),
    saveUninitialized: true,
    resave: false,
  })
);

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/avis', avisRouter);
app.use('/categorie', categorieRouter);
app.use('/commande', commandeRouter);
app.use('/livraison', livraisonRouter);
app.use('/paiement', paiementRouter);
app.use('/produit', produitRouter);
app.use('/rdv', rdvRouter);



// ------------parse application/x-www-form-urlencodeN-----------
app.use(bodyParser.urlencoded({
  extended: false
}))
// ---------------parse application/json----------
app.use(bodyParser.json())
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
