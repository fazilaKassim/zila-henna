var express = require('express');
var router = express.Router();
const UserModel = require('../models/User')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', async (req, res, next) => {
  const users = await UserModel.find();
  res.json(users);
});

router.post('/', async (req, res, next) => {
  const userCreated= await UserModel.create(req.body);
  res.json(userCreated);
});

router.patch("/:id", async (req, res, next) => {
  try {
    const user = await UserModel.findByIdAndUpdate(
      req.params.id, // req.params.id correspond à l'id passé en URL
      req.body, // les données de mise à jour
      { new: true } // cette option est requise si vous souhaitez récupérer le document mis à jour, sinon, l'ancienne version est retournée par défaut
    );
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deleteUser = await UserModel.findByIdAndDelete(req.params.id); // req.params.id correspond à l'id passé en URL
    res.json(deleteUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
