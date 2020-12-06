<template>
  <div class="about-page page-body">
    <AboutMain />
    <SocialResume />
  </div>
</template>
<script>
import AboutMain from '@/components/AboutPage/AboutMain.vue';
import SocialResume from '@/components/AboutPage/SocialResume.vue';

export default {
  components: {
    AboutMain,
    SocialResume
  }
}
</script>