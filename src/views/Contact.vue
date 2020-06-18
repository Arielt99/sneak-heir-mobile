<template>
  <div class="ion-page" >
    <ion-content class="ion-no-padding">
    <ion-card class="contactUs">
      <ion-card-title>Nous envoyer un message</ion-card-title>
      <form>
        <ion-row>
          <ion-collumn>
            <ion-label>Nom</ion-label>
            <ion-input type="text" @input="setLastName($event.target.value)" id="last_name" value="" placeholder="Entrez votre nom"></ion-input>
          </ion-collumn>
          <ion-collumn>
            <ion-label>Prénom</ion-label>
            <ion-input type="text" @input="setFirstName($event.target.value)" id="first_name" value="" placeholder="Entrez votre prénom"></ion-input>
          </ion-collumn>
        </ion-row>
        <ion-label>Email</ion-label>
        <ion-input type="text" @input="setEmail($event.target.value)" id="Email" value="" placeholder="Email"></ion-input>
        <ion-label>Objet</ion-label>
        <ion-input type="text" @input="setSubject($event.target.value)" id="subject" value="" placeholder="Objet"></ion-input>
        <ion-label>Message</ion-label>
        <ion-textarea @input="setMessage($event.target.value)" id="message" value="" placeholder="Entrez votre message"></ion-textarea>
        <ion-collumn class="form-info">
          <ion-button type="button" color="button" @click="send()">envoyer</ion-button>
          <ion-label>Tous les champs sont obligatoires</ion-label>
        </ion-collumn>
      </form>
    </ion-card>
    <ion-card class="information">
      <ion-card-title>Nos contacts</ion-card-title>
      <ion-card-content>
        <ion-item lines="none">
          <ion-row>
            <ion-icon name="map" color="white"></ion-icon><p> 19 Rue Yves Toudic, 75010 Paris</p>
          </ion-row>
        </ion-item>
        <ion-item lines="none">
          <ion-row>
            <ion-icon name="mail" color="white"></ion-icon><p> contact@ecole-webstart.com</p>
          </ion-row>
        </ion-item>
        <ion-item lines="none">
          <ion-row>
            <ion-icon name="call" color="white"></ion-icon><p> 01 42 41 97 76</p>
          </ion-row>
        </ion-item>
      </ion-card-content>
    </ion-card>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1312.1762293794682!2d2.3636126082747095!3d48.87055714482218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e0989542143%3A0x9384848c375ced98!2s%C3%89cole%20Webstart!5e0!3m2!1sfr!2sfr!4v1591205795725!5m2!1sfr!2sfr" width="100%" height="200px" frameborder="0" style="border:0; margin : 20px 0px;" allowfullscreen="true" aria-hidden="false" tabindex="0"></iframe>
    </ion-content>
  </div>
</template>
<script>

import { required, email } from 'vuelidate/lib/validators'
export default {
    data (){
      return {
        last_name:"",
        first_name:"",
        Email:"",
        subject:"",
        message:"",
      }
    },
    validations: {
    last_name: {required},
    first_name: {required},
    Email: {
      required,
      email
    },
    subject: {required},
    message: {required}
  },
    methods:{
        send(){
          this.$v.$touch()
          if(this.$v.$invalid){
            alert("vous devez remplir tout les champs !")
          }
          else{
            this.$store.dispatch('sentMailContact', {last_name: this.last_name, first_name: this.first_name, email: this.Email, subject: this.subject, message: this.message});
            last_name.value=""
            first_name.value=""
            Email.value=""
            subject.value=""
            message.value=""
            console.log(Email.value)
          }
        },
      setLastName(value) {
        this.last_name = value
        this.$v.last_name.$touch()
      },
      setFirstName(value) {
        this.first_name = value
        this.$v.first_name.$touch()
      },
      setEmail(value) {
        this.Email = value
        this.$v.Email.$touch()
      },
      setSubject(value) {
        this.subject = value
        this.$v.subject.$touch()
      },
      setMessage(value) {
        this.message = value
        this.$v.message.$touch()
      },
    }
}
</script>
<style>
.contactUs{
  background-color: rgb(255, 255, 255);
  margin: 0;
  margin-top: 20px;
  padding: 15px;
}
.contactUs ion-card-title{
  padding: 15px 0px 20px 0px;
  color: rgb(48, 48, 48);
  font-size: 30px;
}
.contactUs ion-input{
  border: 1px solid #afafaf ;
  border-radius: 5px;
  margin-bottom: 10px;
}
.contactUs ion-textarea textarea{
  border: 1px solid #afafaf ;
  border-radius: 5px;
  height: 100px;
}
.contactUs ion-textarea{
  border: 1px solid #afafaf ;
  border-radius: 5px;
  height: 100px;
  margin: 0;
}
.contactUs form ion-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.contactUs ion-button{
  margin-top: 10px;
}
.form-info{
  display: flex;
  flex-direction: column;
}
.form-info ion-button{
  width: 30% ;
}
.form-info ion-label{
  font-size: x-small;
  margin-top: 5px;
}
.information{
  background-color: rgb(175, 175, 175);
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  margin: 0px;
  border-radius: 0px ;
}
.information ion-card-title{
  padding: 0px 0px 20px 0px;
  color: rgb(255, 255, 255);
  font-size: 30px;
}
.information ion-card-content{
  width: 100%;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.information p{
  margin: 0px;
  padding-left: 5px;
  font-size: 17px;
}
.information ion-row{
  display: flex;
  justify-content: center !important;
  align-items: center;
}
.information ion-item{
  --background:none;
  color: rgb(255, 255, 255);
  height: 25px;
  display: flex;
  justify-content: center !important;
  align-items: center;
}
.ion-color-button {
  --ion-color-base: #afafaf;
}
</style>
