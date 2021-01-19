<template>
  <div class="about-me-social-icons">
      <span><a href="#" target="_blank"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/></a></span>
      <span><a href="#" target="_blank"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }"/></a></span>
      <span><a href="https://github.com/jaysnel/" target="_blank"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }"/></a></span>
      <span><a href="#" class="button">Resume</a></span>
  </div>
</template>

<script>
export default {
name: "SocialResume"
}
</script>