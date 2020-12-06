<template>
  <div class="home-page page-body">
    <HomeHero />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHero from '@/components/HomePage/HomeHero.vue'

export default {
  name: 'Home',
  components: {
    HomeHero
  }
}
</script>
