<template>
  <div class="contact-page page-body">
    <div v-if="formProcessing">
      <PageLoader />
    </div>
      <div v-if="showForm" class="Contact-Hero">
      <h1 class="page-title contact-title">Contact Me</h1>
      <form class="form-contact-message" action="" method="post" name="form">
          <label for="Name">Name:</label>
          <input class="form-styling" type="text" name="Name" placeholder="Name" v-model="name"/>

          <label for="Email">Email:</label>
          <input class="form-styling" type="text" name="Email" placeholder="Email" v-model="email"/>

          <label for="Message">Message:</label>
          <textarea class="form-styling" type="text" name="Message" placeholder="Message" v-model="message"/>
        </form>
        <div class="form-captcha-validation">Security Check {{ randomNumberOne }} + {{ randomNumberTwo }}: <input type="text" v-model="validationCheck"></div>
        <div class="errors">
          <p v-if="missingNameErr">{{ missingName }}</p>
          <p v-if="missingEmailErr">{{ missingEmail }}</p>
          <p v-if="missingMessageErr">{{ missingMessage }}</p>
          <p v-if="missingSecurityCheckErr">{{ missingSecurityCheck }}</p>
          <p v-if="wrongSecurityCheckErr">{{ wrongSecurityCheck }}</p>
        </div>
        <button @click="sendEmail()">Send Message</button>
  </div>
  <div v-if="thankYouScreen">
    <h2>Thank you!</h2>
    <p>I will be in touch as soon as I can!</p>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import PageLoader from "@/components/PageLoader";

export default {
  components: {
    PageLoader
  },
name: "Contact",
data() {
  return {
      name: "",
      email: "",
      message: "",
      emailjsapiurl: "https://api.emailjs.com/api/v1.0/email/send",
      emailServiceId: process.env.VUE_APP_SERVICE_ID,
      emailTemplateId: process.env.VUE_APP_TEMPLATE_ID,
      emailUserId: process.env.VUE_APP_USER_ID,
      randomNumberOne: null,
      randomNumberTwo: null,
      validationAnswer: null,
      validationCheck: null,
      valid: true,
      missingName: "Your nameless huh?",
      missingEmail: "No email? How am I suppossed to get back to you?",
      missingMessage: "No message detected. What did you want to say?",
      missingSecurityCheck: "Security check is missing.",
      wrongSecurityCheck: "Double check your math my friend. Wrong answer to security check.",
      missingNameErr: false,
      missingEmailErr: false,
      missingMessageErr: false,
      missingSecurityCheckErr: false,
      wrongSecurityCheckErr: false,
      showForm: true,
      formProcessing: false,
      thankYouScreen: false
  }
},
  methods: {
    securityCheckData() {
      let randomNumber1 = Math.floor(Math.random() * Math.floor(10));
      let randomNumber2 = Math.floor(Math.random() * Math.floor(10));

      this.randomNumberOne = randomNumber1;
      this.randomNumberTwo = randomNumber2;

      this.validationAnswer = this.randomNumberOne + this.randomNumberTwo;
    },
    formValidationCheck() {
      //validation resets
      this.missingNameErr = false;
      this.missingEmailErr = false;
      this.missingMessageErr = false;
      this.missingSecurityCheckErr = false;
      this.wrongSecurityCheckErr = false;
      this.valid = true;


      
      if(this.name == null || this.name == "") {
        this.valid = false;
        this.missingNameErr = true;
      }
      if(this.email == null || this.email == "") {
        this.valid = false;
        this.missingEmailErr = true;
      }
      if(this.message == null || this.message == "") {
        this.valid = false;
        this.missingMessageErr = true;
      }

      if(this.validationCheck == null || this.validationCheck == "") {
        this.valid = false;
        this.missingSecurityCheckErr = true;
      } else if(this.validationCheck != this.validationAnswer) {
        this.valid = false;
        this.wrongSecurityCheckErr = true;
      }


      return this.valid;
    },
    sendEmail() {
      let validForm = this.formValidationCheck();
      if(!validForm) return false;

      this.showForm = false;
      this.formProcessing = true;
      
      let url = this.emailjsapiurl;
      let serviceId = this.emailServiceId;
      let templateId = this.emailTemplateId;
      let userId = this.emailUserId;


      let data = {
        from_name: this.name,
        reply_to: this.email,
        message: this.message
      }

      let finalData = {
        service_id: serviceId,
        template_id: templateId,
        user_id: userId,
        template_params: data
      }

  axios.post(url, finalData)
      .then(res => {
        console.log(res);
        this.showForm = false;
        this.formProcessing = false;
        this.thankYouScreen = true;
      })
      .catch(err => {
        console.log(err);
        this.showForm = true;
        this.formProcessing = false;
      })
    }
  },
  mounted() {
    this.securityCheckData();
  }
}
</script>