var express = require("express")
var router = express.Router()
const modelPaiement = require("../models/Paiement")



router.get("/", (req, res) => {
    modelPaiement.find()
    .then(paiement=> {
        res.json(paiement)
    })
})

router.post("/", (req, res) => {
    modelPaiement.create(req.body)
    .then(paiement => {
        res.json(paiement)
    })
})
router.patch("/:id", async (req, res, next) => {
    try {
      const paiement = await modelPaiement.findByIdAndUpdate(
        req.params.id, // req.params.id correspond à l'id passé en URL
        req.body, // les données de mise à jour
        { new: true } // cette option est requise si vous souhaitez récupérer le document mis à jour, sinon, l'ancienne version est retournée par défaut
      );
      res.json(paiement);
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:id", async (req, res, next) => {
    try {
      const deletePaiement = await modelPaiement.findByIdAndDelete(req.params.id); // req.params.id correspond à l'id passé en URL
      res.json(deletePaiement);
    } catch (err) {
      next(err);
    }
  });

module.exports = router