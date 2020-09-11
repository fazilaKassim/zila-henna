var express = require("express")
var router = express.Router()
const modelRDV = require("../models/RDV")



router.get("/", (req, res) => {
    modelRDV.find()
    .then(rdv => {
        res.json(rdv)
    })
})

router.post("/", (req, res) => {
    modelRDV.create(req.body)
    .then(rdv => {
        res.json(rdv)
    })
})

router.patch("/:id", async (req, res, next) => {
    try {
      const rdv = await modelRDV.findByIdAndUpdate(
        req.params.id, // req.params.id correspond à l'id passé en URL
        req.body, // les données de mise à jour
        { new: true } // cette option est requise si vous souhaitez récupérer le document mis à jour, sinon, l'ancienne version est retournée par défaut
      );
      res.json(rdv);
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:id", async (req, res, next) => {
    try {
      const deleteRdv = await modelRDV.findByIdAndDelete(req.params.id); // req.params.id correspond à l'id passé en URL
      res.json(deleteRdv);
    } catch (err) {
      next(err);
    }
  });

module.exports = router