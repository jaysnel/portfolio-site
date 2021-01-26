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

          <button @click="sendEmail()">Send Message</button>
				</form>
  </div>
</template>

<script>

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
    // sendEmail(e) {
    //   try {
    //     console.log("trying...");
    //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target,
    //     'YOUR_USER_ID', {
    //       name: this.name,
    //       email: this.email,
    //       message: this.message
    //     })
    //   console.log("finished")
    //   } catch(error) {
    //       console.log({error})
    //   }
    //   // Reset form field
    //   this.name = ''
    //   this.email = ''
    //   this.message = ''
    // }
  }
}
</script>