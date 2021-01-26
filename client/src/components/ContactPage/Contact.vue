<template>
  <div class="Contact-Hero">
      <h1 class="page-title contact-title">Contact Me</h1>
      <form class="form-contact-message" action="" method="post" name="form">
          <label for="Name">Name:</label>
          <input class="form-styling" type="text" name="Name" placeholder="Name" v-model="name"/>

          <label for="Email">Email:</label>
          <input class="form-styling" type="text" name="Email" placeholder="Email" v-model="email"/>

          <label for="Message">Message:</label>
          <textarea class="form-styling" type="text" name="Message" placeholder="Message" v-model="message"/>
				</form>
        <button @click="sendEmail()">Send Message</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
name: "Contact",
data() {
  return {
    name: "",
      email: "",
      message: ""
  }
},
  methods: {
    sendEmail() {
      axios.get("http://localhost:3001/email")
      .then((res) => {
        console.log(res);
        return false;
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>