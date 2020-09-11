var express = require("express")
var router = express.Router()
const modelLivraison = require("../models/Livraison")



router.get("/", (req, res) => {
    modelLivraison.find()
    .then(livraison => {
        res.json(livraison)
    })
})

router.post("/", (req, res) => {
    modelLivraison.create(req.body)
    .then(livraison => {
        res.json(livraison)
    })
})
router.patch("/:id", async (req, res, next) => {
    try {
      const livraison = await modelLivraison.findByIdAndUpdate(
        req.params.id, // req.params.id correspond à l'id passé en URL
        req.body, // les données de mise à jour
        { new: true } // cette option est requise si vous souhaitez récupérer le document mis à jour, sinon, l'ancienne version est retournée par défaut
      );
      res.json(livraison);
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:id", async (req, res, next) => {
    try {
      const deleteLivraison = await modelLivraison.findByIdAndDelete(req.params.id); // req.params.id correspond à l'id passé en URL
      res.json(deleteLivraison);
    } catch (err) {
      next(err);
    }
  });

module.exports = router