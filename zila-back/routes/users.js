var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser")
const bcrypt = require("bcryptjs")
const auth = require('../auth')

const UserModel = require('../models/User');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', async (req, res, next) => {
  const users = await UserModel.find();
  res.json(users);
});

router.post('/inscription', async (req, res, next) => {
  try {
  
// si le programme est lu jusqu'ici, on converti le mot de passe en chaîne cryptée
      const user = req.body;
      const salt = bcrypt.genSaltSync(10);
      const hashed = bcrypt.hashSync(user.password, salt);
      // console.log("password crypté >>>", hashed);
      user.password = hashed; // on remplace le mot de passe "en clair" par sa version cryptée
      console.log(user)
      const userCreated = await UserModel.create(user);
      res.json(userCreated);
  } catch (err) {
    next(err);
  }
  
});

router.get("/get-user-by-token", (req, res) => {
  // console.log("helooooooo");
  try {
    // console.log("HEADER AUTHENCICATE",req.header("x-authenticate"))
    const user = auth.decodeToken(req.header("x-authenticate"));
    const userId = user.infos._id;
    // console.log("should be user", user);
    res.redirect("/users/" + userId);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/connexion", async (req, res, next) => {
  const userInfos = req.body; //
  // check que mail et mdp sont renseignés
  if (!userInfos.email || !userInfos.password) {
    // never trust user input !!!
    // si non : retourner message warning au client
    res.status(401).json({
      msg: "Identifiants incorrects",
      level: "error",
    });
  }

  // si oui : vérifier que mail et mdp correspondent en bdd
  // 1 - récupérer l'utilisateur avec le mail fourni
  UserModel
    .findOne({ email: userInfos.email })
    .then((user) => {
      if (!user) {
        // vaut null si pas d'user trouvé pour ce mail
        // si non .. retiourner une erreur au client
        return res.status(401).json({
          msg: "Identifiants incorrects",
          level: "error",
        });
      }
      // si oui comparer le mdp crypté stocké en bdd avec la chaîne en clair envoyée depuis le formulaire
      const checkPassword = bcrypt.compareSync(
        userInfos.password, // password provenant du form "texte plein"
        user.password // password stocké en bdd (encrypté)
      ); // checkPassword vaut true || false

      // si le mdp est incorrect: retourner message error sur signin
      if (checkPassword === false) {
        // req.flash("error", "Identifiants incorrects");
        return res.status(401).json({
          msg: "Identifiants incorrects",
          level: "error",
        });
      }

      // si oui : stocker les infos de l'user en session pour lui permettre de naviguer jusqu'au signout
      const { _doc: clone } = { ...user }; // je clone l'user
      delete clone.password; // par sécurité, je supprime le mdp du clone (pas besoin de le stocker ailleurs qu'en bdd)
    
      const token = auth.createToken(user, req.ip); // createToken retourne un jeton (token) créé avec JWT

      return res
        .header("x-authenticate", token) // je renvoie le token au client dans l'entête de la réponse pour l'authentification
        .status(200)
        .send({ user: clone, token, msg: "logged in !", level: "success" });
    })
    .catch(next);
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

router.get("/:id", async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
