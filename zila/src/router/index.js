import Vue from "vue";
import VueRouter from "vue-router";
import Accueil from "../views/Accueil.vue";
import Boutique from "../views/Boutique.vue";
import Galerie from "../views/Galerie.vue";
import Tarifs from "../views/Tarifs.vue";
import RendezVous from "../views/RendezVous.vue";
import Connexion from "../views/Connexion.vue";
import Inscription from "../views/Inscription.vue";
import MentionLegal from "../views/MentionLegal.vue";
import Condition from "../views/Condition.vue";
import NotFound from "../views/NotFound.vue";
// import Cone from "../views/Cone.vue";
// import Objets from "../views/Objets.vue";
// import Lettre from "../views/Lettre.vue";
// import Bouquet from "../views/Bouquet.vue";
import Dashboard from "../views/Dashboard.vue";
import Commande from "../views/Commande.vue"
import ProduitsParCategories from '../views/ProduitsParCategories.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil,
  },

  {
    path: "/boutique",
    name: "Boutique",
    component: Boutique,
    children: [
      {
        // props: route => ({lolo : route.params.categoriess}),
        path: ":categoriess",
        name: "ProduitsParCategories",
        component: ProduitsParCategories,
      },
    ]
  },
  {
    path: "/galerie",
    name: "Galerie",
    component: Galerie,
    props : true
  },

  {
    path: "/tarifs",
    name: "Tarifs",
    component: Tarifs,
  },

  {
    path: "/rendezVous",
    name: "RendezVous",
    component: RendezVous,
  },

  {
    path: "/connexion",
    name: "Connexion",
    component: Connexion,
  },
  // {
  //   path: "/cone",
  //   name: "Cone",
  //   component: Cone,
  // },
  // {
  //   path: "/objets",
  //   name: "Objets",
  //   component: Objets,
  // },
  // ,
  // {
  //   path: "/lettre",
  //   name: "Lettre",
  //   component: Lettre,
  // },
  // ,
  // {
  //   path: "/bouquet",
  //   name: "Bouquet",
  //   component: Bouquet,
  // },
  {
    path: "/inscription",
    name: "Inscription",
    component: Inscription,
  },
  {
    path: "/mentionlegal",
    name: "MentionLegal",
    component: MentionLegal,
  },
  {
    path: "/condition",
    name: "Condition",
    component: Condition,
  },
  {
    path: "*",
    name: "404",
    component: NotFound
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/commande",
    name: "Commande",
    component: Commande
  },
  
  
];

const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
