<template>
  <div class="about-page page-body">
    <div class="About-Hero">
    <h1 class="page-title about-title">About Me</h1>
    <div class="about-me-description">
      <p>
        My name is Jaylan Snelson and I'm a 28 year old Front End Engineer.
      </p>
      <p>
        I describe myself as a passionate developer on a lifelong learning path.
      </p>
      <p>
        In my free time you can find me traveling, training in Brazilian jiu jitsu or keeping up to date with the newest crypto news.
      </p>
      <p>
        This also isn't the only place on the web where you can find me, here is a few more along with my work history. Talk to you soon!
      </p>
    </div>

    <div class="about-me-social-icons">
      <span><a href="https://www.linkedin.com/in/jaylansnelson/" title="LinkedIn" target="_blank"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }"/></a></span>
      <span><a href="https://github.com/jaysnel/" title="Github" target="_blank"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }"/></a></span>
      <span><a href="https://jsnelson.medium.com/" title="Blog" target="_blank"><font-awesome-icon :icon="{ prefix: 'fa', iconName: 'pencil-alt' }"/></a></span>
      <span><a target='_blank' :href='require("../assets/resume/Jaylan-Snelson-Engineer.pdf")'>Resume</a></span>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "AboutMain",
  data() {
  return {
    pdfLink: require('../assets/resume/Jaylan-Snelson-Engineer.pdf')
  }
}
};
</script>
