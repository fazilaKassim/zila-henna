const express = require("express");
const router = express.Router();
const modelRDV = require("../models/RDV");
const nodemailer = require("nodemailer");
const mail_host = "smtp.mailtrap.io";
const mail_host_port = 2525;
const mail_user_address = "zilahenne-54ebfa@inbox.mailtrap.io";
const mail_user_name = "5ff202c22673c0";
const mail_user_pass = "c2261f5dd11bae";


// async..await is not allowed in global scope, must use a wrapper
async function sendMail(info) { // we create a function send mail
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({ //on recupere la doc de nodemailer opour recup un objetc
    host: mail_host,
    port: mail_host_port,
    secure: false, // true for 465, false for other ports
    auth: {
      user: mail_user_name, // generated ethereal user
      pass: mail_user_pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let infos = await transporter.sendMail({ // on envoie un mail avec les diff info 
    from: `👻 ${info.from} 👻`, // sender address
    to: mail_user_address, // list of receivers
    sujet: info.sujet, // Subject line
    nom: info.nom,
    prenom: info.prenom,
    telephone: info.telephone,
    personne: info.personne,
    date: info.date,
    message: info.message, // plain text body
    html: `<div>${info.message}</div>`, // html body
  });

  console.log("Message sent: %s", infos.messageId);
}



// router.post("/", (req, res) => {
//     modelRDV.create(req.body)
//     .then(rdv => {
//         res.json(rdv)
//     })
// })
router.get("/rdv", (req, res) => {
  modelRDV.find()
  .then(rdv => {
      res.json(rdv)
  })
})

router.post("/rdv", async (req, res, next) => {
  console.log(req.body);
  sendMail(req.body) //on recupere req.body 
    .then(() => {
      console.log("?? mail res");
      res.status(200).json("200");
    })
    .catch((err) => {
      console.error("???", err);
      res.status(500).json("erreur 500");
    });
});

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