var express = require("express")
var router = express.Router()
const modelCommande = require("../models/Commande")



router.get("/", (req, res) => {
    modelCommande.find()
    .then(commande => {
        res.json(commande)
    })
})

router.get("/getOne/:id", (req, res) => {
    modelCommande.findById(req.params.id)
    .then(commande => {
        res.json(commande)
    })
})


router.post("/", (req, res) => {
    modelCommande.create(req.body)
    .then(commande => {
        res.json(commande)
    })
})

router.patch("/:id", async (req, res, next) => {
    try {
      const commande = await modelCommande.findByIdAndUpdate(
        req.params.id, // req.params.id correspond à l'id passé en URL
        req.body, // les données de mise à jour
        { new: true } // cette option est requise si vous souhaitez récupérer le document mis à jour, sinon, l'ancienne version est retournée par défaut
      );
      res.json(commande);
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:id", async (req, res, next) => {
    try {
      const deleteCommande = await modelCommande.findByIdAndDelete(req.params.id); // req.params.id correspond à l'id passé en URL
      res.json(deleteCommande);
    } catch (err) {
      next(err);
    }
  });

module.exports = router