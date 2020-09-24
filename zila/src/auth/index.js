const tokenName = "authToken";
const signinPath = "/signin";

/**
 * @return {(string|null)} the auth token if found, null otherwise
 */
const getLocalAuthToken = () => localStorage.getItem(tokenName);

/**
 *
 * @param {String} token un jeton JWT généré côté server (/auth/index.js)
 * @return {undefined}
 */
const setLocalAuthToken = (token) => localStorage.setItem(tokenName, token);

/**
 *
 * @return {undefined}
 */
const deleteLocalAuthToken = () => localStorage.removeItem(tokenName);

const signout = (vm) => {
  // ci-dessus, le param vm (virtual machine) représente l'instance de Vue (le component) appellant la fonction signout
  deleteLocalAuthToken();
  vm.$store.commit("user/unsetCurrent");
  vm.$router.push({ path: signinPath }).catch((error) => { // si un erreur survient ...
    console.info(error.message); // todo : afficher le message dans une alert box
  });
};

/**
 *
 * @return {boolean} True if user is logged in, false otherwise
 */
const isLoggedIn = () => Boolean(getLocalAuthToken());

// export de toutes le fonctions du fichier dans un objet
// accessible depuis l'extérier via auth.functionName (ex: auth.isLoggedIn)
export default {
  deleteLocalAuthToken,
  getLocalAuthToken,
  isLoggedIn,
  signout,
  setLocalAuthToken,
};
