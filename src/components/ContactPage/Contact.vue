<template>
  <div class="Contact-Hero">
      <h1 class="page-title contact-title">Contact Me</h1>
      <form class="form-contact-message" action="" method="post" name="form">
          <label for="Name">Name:</label>
          <input class="form-styling" type="text" name="Name" placeholder=""/>

          <label for="Email">Email:</label>
          <input class="form-styling" type="text" name="Email" placeholder=""/>

          <label for="Email">Message:</label>
          <textarea class="form-styling" type="text" name="Message" placeholder=""/>

          <button>Send Message</button>
				</form>
  </div>
</template>

<script>
export default {
name: "Contact"
}
</script>