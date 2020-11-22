<template>
  <div class="HomeHero">
    <div class="title">Hi, I'm <span>Jaylan Snelson</span>, Web Developer</div>
    <vue-particles 
        color="#dedede"
        :particleOpacity="1"
        :particlesNumber="200"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1">
        </vue-particles>
  </div>
</template>

<script>
export default {
  name: 'HomeHero'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  margin-top: 15px;
}

  #particles-js {
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
