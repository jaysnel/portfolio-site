<template>
  <div id="app">
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

<style>
@import './assets/css/style.css';
</style>
