<template>
  <div id="app">
    <HomeHero/>
  </div>
</template>

<script>
import HomeHero from './components/HomeHero.vue'

export default {
  name: 'App',
  components: {
    HomeHero
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
