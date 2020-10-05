import axios from "axios";
import auth from "./auth";

axios.interceptors.request.use(
  config => {
    // Ce code est exécuté avant l'envoi de chaque requête (req) axios
    // important : on configure le type des entêtes en JSON
    config.headers["Content-Type"] = "application/json";
    // on essaie de récupérer le token d'auth dans le local storage
    // check : https://jwt.io/
    const localAuthToken = auth.getLocalAuthToken();
    // si le token JWT existe, on l'envoie dans l'entête (header) de chaque requête HTTP partant vers le backend
    // check : https://developer.mozilla.org/fr/docs/Web/HTTP/Headers
    if (localAuthToken) config.headers["x-authenticate"] = localAuthToken; // la clé de l'entête
    // si le token est absent, le serveur rejettera la requête entrante sur les routes protégées ...
    return config;
  },
  error => {
    // Do something with request error...
    return Promise.reject(error);
  }
);

export default axios.defaults;
