var express = require("express")
var router = express.Router()
const modelCategorie = require("../models/Categorie")



router.get("/", (req, res) => {
    modelCategorie.find()
    .then(categorie => {
        res.json(categorie)
    })
})

router.post("/", (req, res) => {
    modelCategorie.create(req.body)
    .then(categorie => {
        res.json(categorie)
    })
})

router.patch("/:id", async (req, res, next) => {
    try {
      const categorie = await modelCategorie.findByIdAndUpdate(
        req.params.id, // req.params.id correspond à l'id passé en URL
        req.body, // les données de mise à jour
        { new: true } // cette option est requise si vous souhaitez récupérer le document mis à jour, sinon, l'ancienne version est retournée par défaut
      );
      res.json(categorie);
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:id", async (req, res, next) => {
    try {
      const deleteCategorie = await modelCategorie.findByIdAndDelete(req.params.id); // req.params.id correspond à l'id passé en URL
      res.json(deleteCategorie);
    } catch (err) {
      next(err);
    }
  });


module.exports = router