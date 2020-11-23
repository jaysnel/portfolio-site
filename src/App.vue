<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
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

<style>
@import './assets/css/style.css';
</style>
