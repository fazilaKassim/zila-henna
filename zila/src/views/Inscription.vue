<template>
  <div id="inscription-background">
    <form action="" method="post" class="form">
      <h1 class="title">INCRIPTION</h1>
      <p></p>
      <div class="form__group field">
        <input
          type="input"
          class="form__field"
          placeholder="Nom"
       
          id="nom"
          v-model="user.nom"
          required
        />
        <label for="nom" class="form__label">Nom</label>
      </div>

      <div class="form__group field">
        <input
          type="input"
          class="form__field"
          placeholder="Prenom"
          id="prenom"
      
          v-model="user.prenom"
          required
        />
        <label for="prenom" class="form__label">Prenom</label>
      </div>

      <div class="form__group field">
        <input
          type="input"
          class="form__field"
          placeholder="Email"
          id="email"
     
          v-model="user.email"
          required
        />
        <label for="email" class="form__label">Email</label>
      </div>

      <div class="form__group field">
        <input
          type="tel"
          class="form__field"
          placeholder="Telephone"
          id="telephone"
    
          v-model="user.telephone"
          required
        />
        <label for="telephone" class="form__label">Telephone</label>
      </div>

      <div class="form__group field">
        <input
          type="date"
          class="form__field"
          placeholder="Date de naissance"
          id="dateDeNaissance"
          v-model="user.dateDeNaissance"
          required
        />
        <label for="dateDeNaissance" class="form__label"
          >Date de naissance</label
        >
      </div>

      <div class="form__group field">
        <input
          type="password"
          class="form__field"
          placeholder="Mot de passe"
          id="password"
     
          v-model="user.password"
          required
        />
        <label for="password" class="form__label">Mot de passe</label>
      </div>

      <div class="form__group field">
        <input
          type="password"
          class="form__field"
          placeholder="Confirmer votre mot de passe"
          id="confirmationmdp"
          v-model="user.confirmationmdp"
          required
        />
        <label for="confirmationmdp" class="form__label"
          >Confirmer votre mot de passe</label
        >
      </div>

      <div class="form__group field">
        <input
          type="text"
          class="form__field"
          placeholder="Adresse"
          id="adresse"
          v-model="user.coordonnees.adresse"
          required
        />
        <label for="mdp" class="form__label">Adresse</label>
      </div>

      <div class="form__group field">
        <input
          type="text"
          class="form__field"
          placeholder="Complement d'adresse"
          id="complementAdress"
          v-model="user.coordonnees.complementAdress"
        />
        <label for="complementAdress" class="form__label"
          >Complement d'adresse</label
        >
      </div>

      <div class="form__group field">
        <input
          type="number"
          class="form__field"
          placeholder="Code postal"

          id="codePostal"
          v-model="user.coordonnees.codePostal"
          required
        />
        <label for="codePostal" class="form__label">Code postal</label>
      </div>

      <div class="form__group field">
        <input
          type="text"
          class="form__field"
          placeholder="Ville"
          id="ville"
      
          v-model="user.coordonnees.ville"
          required
        />
        <label for="ville" class="form__label">Ville</label>
      </div>

      <div class="btn-rdv">
        <button class="btn" @click.prevent="register" type="submit">
          S'inscrire
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios"; //module front qui va interagir avce le back
export default {
  data() {
    return {
      user: {
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
       password: "",
        confirmationmdp: "",
        dateDeNaissance:"",
        coordonnees: {
          adresse: "",
          complementAdress: "",
          codePostal: "",
          ville: "",
        },
      },
    };
  },
  methods: {
    register() {
      this.$store.dispatch("user/signup", this.user); // on utilise le store 
      // console.log(this.user);
      // axios
      //   .post(process.env.VUE_APP_BACKEND_URL + "/users/inscription", {
      //     ...this.user,
      //   }) //url + objet(obligatoire)
      //   //promesse pour verifier le deroulement
      //   .then((res) => {
      //     alert("Votre enregistrement s'est déroulée avec succès");
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     alert("Cette utilisateur existe déjà");
      //   });
      // console.log({ ...this.post });
    },
  },
};
</script>
<style lang="scss" scoped>
.input-connection::placeholder {
  color: black;
}
h1 {
  color: black;
}

#inscription-background {
  min-width: 100%;
  min-height: 80vh;
  padding: 50px;
  background-repeat: no-repeat;
  margin: auto;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-image: url(../assets/img/flower.jpg);
  animation: header 5s linear infinite;
}

@keyframes header {
  0% {
    background-position: 0px;
  }

  100% {
    background-position: 0px 0px;
  }
}

form {
  padding: 40px 0;
  width: 50%;
  min-height: 500px;
  height: auto;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  background: white;
  font-family: "Bellota", cursive;
}

$white: #fff;
$gray: #9b9b9b;

.form__group {
  position: relative;
  padding: 15px 0 0;
  margin: 20px auto;
  width: 70%;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid rgb(200, 156, 98);
  outline: 0;
  font-size: 1.3rem;
  color: black;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 15px;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: $gray;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #cc6b11;
    font-weight: 700;
  }

  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, #be8509, #e7d3b9);
  border-image-slice: 1;
}

/* reset input */
.form__field {
  &:required,
  &:invalid {
    box-shadow: none;
  }
}

textarea {
  width: 95%;
  resize: none;
  height: 100px;
  outline: 0;
  border: 2px solid rgb(200, 156, 98);

  border-radius: 10px;
  padding: 10px;
}

.btn {
  width: 200px;
  height: 30px;
  border-radius: 5px;
  color: white;
  background: rgb(155, 111, 46);
  border: 1px solid rgb(136, 101, 48);
  margin: auto;
  outline: 0;
}

.btn-rdv {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and( max-width: 679px ) {
  .form {
    width: 100%;
    margin: 0;
    min-width: 380px;
  }
}
</style>
