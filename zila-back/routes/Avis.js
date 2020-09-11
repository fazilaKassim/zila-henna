var express = require("express")
var router = express.Router()
const modelAvis = require("../models/Avis")



router.get("/", (req, res) => {
    modelAvis.find()
    .then(avis => {
        res.json(avis)
    })
})

router.post("/", (req, res) => {
    modelAvis.create(req.body)
    .then(avis => {
        res.json(avis)
    })
})

router.patch("/:id", async (req, res, next) => {
    try {
      const avis = await modelAvis.findByIdAndUpdate(
        req.params.id, // req.params.id correspond à l'id passé en URL
        req.body, // les données de mise à jour
        { new: true } // cette option est requise si vous souhaitez récupérer le document mis à jour, sinon, l'ancienne version est retournée par défaut
      );
      res.json(avis);
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:id", async (req, res, next) => {
    try {
      const deleteAvis = await modelAvis.findByIdAndDelete(req.params.id); // req.params.id correspond à l'id passé en URL
      res.json(deleteAvis);
    } catch (err) {
      next(err);
    }
  });

module.exports = router