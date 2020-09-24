import axios from "axios";

export function apiHandler() {
  if (!process.env.VUE_APP_BACKEND_URL)
    throw new Error("fournir URL de base pour effectuer appel AJAX");
  const instance = axios.create({
    // une méthode d'axios
    baseURL: process.env.VUE_APP_BACKEND_URL, // utile pour normaliser la connection à l'API back
  });

  return instance;
}
