<template>
  <section id="rdv">
    
    <form action="" method="post" class="form">
      <h1 class="title">PRENDRE RENDEZ-VOUS</h1>
    <p>Devis et RDV par email en remplissant le formulaire</p>
      <div class="form__group field">
        <input type="input" class="form__field" placeholder="Nom" name="nom" id="nom" required />
        <label for="nom" class="form__label">Nom</label>
      </div>

     <div class="form__group field">
        <input type="input" class="form__field" placeholder="Prenom" name="prenom" id="prenom" required />
        <label for="prenom" class="form__label">Prenom</label>
      </div>

      <div class="form__group field">
        <input type="input" class="form__field" placeholder="Email" name="email" id="email" required />
        <label for="email" class="form__label">Email</label>
      </div>

      <div class="form__group field">
        <input type="tel" class="form__field" placeholder="Telephone" name="telephone" id="telephone" required />
        <label for="telephone" class="form__label">Telephone</label>
      </div>

        <div class="form__group field">
        <input type="input" class="form__field" placeholder="Occasion" name="occasion" id="occasion" required />
        <label for="occasion" class="form__label">Occasion</label>
      </div>

        <div class="form__group field">
        <input type="input" class="form__field" placeholder="Nombre de personne" name="personne" id="personne" required />
        <label for="personne" class="form__label">Nombre de personne</label>
      </div>

        <div class="form__group field">
        <label for="date" class="form__label">Date souhiatée</label>
        <input type="datetime-local" class="form__field" placeholder="Date souhaitée" name="date" id="date" value="2018-06-12T19:30" min="2020-08-07T00:00" max="2023-12-31T00:00">
      </div>

     <div class="form__group field">
  
        <textarea id="descrption" name="descrption" class="text-area-description  " placeholder="Message"></textarea>
      </div>
<div class="btn-rdv">
    <button class="btn ">Prendre rendez-vous</button>
    </div>
    </form>


  </section>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
h1, p{
  text-align: center;
  color: black;
  font-family: 'Times New Roman', Times, serif;
}
  #rdv {
    background: url("../assets/img/flower-background.jpg");
height: auto;
padding: 2%;
width: 100%;
 background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }

  form {padding : 40px 0;
    width: 50%;
    min-height:500px ;
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
    margin:20px auto;
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

    &:placeholder-shown~.form__label {
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
    ~.form__label {
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

  /* reset input */
  .form__field {

    &:required,
    &:invalid {
      box-shadow: none;
    }
  }

  textarea{ 
      width: 95%;
    resize:none;
    height: 100px;
    outline: 0;
    border: 2px solid rgb(200, 156, 98);
    
    border-radius: 10px;
    padding: 10px;}

   .btn{
      width: 200px;
      height: 30px;
      border-radius: 5px;
      color: white;
      background:rgb(155, 111, 46);
      border: 1px solid rgb(136, 101, 48) ;
      margin: auto;
      outline: 0;
    }

    .btn-rdv{
      display: flex;
      justify-content: center;
      align-items: center;
    }
 
 @media screen and( max-width: 679px ){
   .form{
     width: 100%;
     margin: 0;
     min-width: 380px;
   }
 }
</style>