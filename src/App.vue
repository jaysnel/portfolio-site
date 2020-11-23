<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><font-awesome-icon icon="home" />Home</router-link>
      <router-link to="/about"><font-awesome-icon icon="user" />About</router-link>
    </div>
    <router-view/>
    <vue-particles 
        color="#dedede"
        :particleOpacity="1"
        :particlesNumber="300"
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
