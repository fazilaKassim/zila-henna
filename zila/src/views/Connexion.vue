<template>
  <div class="signin-background">
    <form method="post" action="/signin" class="form connexion">
      <h1 class="title">Connexion</h1>

      <label class="label" for="input-email"></label>

      <input
        class="input input-connection"
        type="email"
        name="email"
        placeholder="Email"
        v-model="email"
        required
      />

      <label class="label" for="input-password"></label>

      <input
        id="input-password"
        class="input input-connection"
        type="password"
        name="password"
        placeholder="Mot de passe"
        v-model="password"
        required
      />
      <span id="icon-toggle">
        <i class="is-clickable fas fa-eye"></i>
      </span>

      <button class="btn">ok</button>
    </form>
  </div>
</template>

<script>
// export default {
//   name: "connexion",
//   data(){
//     return{

//     }

//     },
//     methods:{
//       async connexion(){
//         await handler.post({
//           email: this.email,
//           password: this.password
//         })
//       }
//     }
  // }
//   const iconWrapp = document.getElementById("icon-toggle");

// if (iconWrapp !== null) {
//     const input = document.getElementById("input-password");
//     const icon = iconWrapp.querySelector(".fas");
//     iconWrapp.onclick = (e) => {
//         icon.classList.toggle("fa-eye-slash");
//         icon.classList.toggle("fa-eye");
    
//         if (icon.classList.contains("fa-eye-slash")) {
//             input.type = "text";
//         } else {
//             input.type = "password";
//         }
//     };
// }
// };
</script>

<style lang="scss" scoped>
.input-connection::placeholder {
  color: black;
}

.signin-background {
  min-width: 100%;
  // min-height: 80vh;
  padding: 50px;
  background-repeat: no-repeat;
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


h1{
  color: black;
  margin: 40px;
}
form.connexion {
padding : 50px 0;
    width: 50%;
    // min-height:500px ;
    height: auto;
    margin: auto;
    margin-top: 70px;
    margin-bottom: 70px;
    background: white;
     font-family: "Bellota", cursive;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
}
input{
    font-family: inherit;
    width: 50%;
    border: 0;
    border-bottom: 2px solid rgb(200, 156, 98);
    margin-bottom: 15px;
    outline: 0;
    font-size:18px;
    color: black;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: black
    }

    &:placeholder-shown~label {
      font-size: 15px;
      cursor: text;
      top: 20px;
    }
  }

label {
    position: absolute;
    // top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    // color:gray;
  }

  input:focus {
    ~slabel {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color:#cc6b11;
      font-weight: 700;
    }

    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #be8509, #e7d3b9);
    border-image-slice: 1;
  }
 .btn{
      width: 200px;
      height: 30px;
      border-radius: 5px;
      color: white;
      background:rgb(155, 111, 46);
      border: 1px solid rgb(136, 101, 48) ;
      margin: 15px;
      outline: 0;
    }

</style>
