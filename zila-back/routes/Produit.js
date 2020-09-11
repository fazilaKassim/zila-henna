var express = require("express")
var router = express.Router()
const modelProduit = require("../models/Produit")



router.get("/", (req, res) => {
    modelProduit.find()
    .then(Produit => {
        res.json(Produit)
    })
})

router.post("/", (req, res) => {
    modelProduit.create(req.body)
    .then(Produit => {
        res.json(Produit)
    })
})

router.patch("/:id", async (req, res, next) => {
    try {
      const produit = await modelProduit.findByIdAndUpdate(
        req.params.id, // req.params.id correspond à l'id passé en URL
        req.body, // les données de mise à jour
        { new: true } // cette option est requise si vous souhaitez récupérer le document mis à jour, sinon, l'ancienne version est retournée par défaut
      );
      res.json(produit);
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:id", async (req, res, next) => {
    try {
      const deleteProduit = await modelProduit.findByIdAndDelete(req.params.id); // req.params.id correspond à l'id passé en URL
      res.json(deleteProduit);
    } catch (err) {
      next(err);
    }
  });

module.exports = router