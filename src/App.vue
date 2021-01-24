<template>
  <div id="app">
    <a href="javascript:void(0);" class="nav-mobile-menu-icon" @click="openAndCloseMobileNav()">
    <font-awesome-icon icon="bars" id="mobile-menu-open"/>
    <font-awesome-icon icon="times" id="mobile-menu-close"/>
    </a>
    <div id="nav">
      <router-link to="/" class="nav-home nav-item">
      <span class="link-icon"><font-awesome-icon icon="home" /></span>
      <span class="link-text">Home</span>
      </router-link>
      <router-link to="/about" class="nav-about nav-item">
      <span class="link-icon"><font-awesome-icon icon="user" /></span>
      <span class="link-text">About</span>
      </router-link>
      <router-link to="/skills" class="nav-skills nav-item">
      <span class="link-icon"><font-awesome-icon icon="tools" /></span>
      <span class="link-text">Skills</span>
      </router-link>
      <router-link to="/projects" class="nav-projects nav-item">
      <span class="link-icon"><font-awesome-icon icon="scroll" /></span>
      <span class="link-text">Projects</span>
      </router-link>
      <router-link to="/contact" class="nav-contact nav-item">
      <span class="link-icon"><font-awesome-icon icon="id-card" /></span>
      <span class="link-text">Contact</span>
      </router-link>
    </div>
    <router-view/>
    <vue-particles 
        color="#dedede"
        :particleOpacity="1"
        :particlesNumber="50"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1">
    </vue-particles>
  </div>
</template>
<script>
export default {
  methods: {
    openAndCloseMobileNav() {
      var navigation = document.getElementById("nav");
      var openicon = document.getElementById("mobile-menu-open");
      var closeicon = document.getElementById("mobile-menu-close");

      if (navigation.style.display === "flex") {
        navigation.style.display = "none";

        openicon.style.display = "block";
        closeicon.style.display = "none";
      } else {
        navigation.style.display = "flex";

        openicon.style.display = "none";
        closeicon.style.display = "block";
      }
    }
  }
}
</script>

<style>
@import './assets/css/style.css';
</style>
