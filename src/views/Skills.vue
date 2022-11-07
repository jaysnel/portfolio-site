<template>
  <div class="skills-page page-body">
      <div class="Skills-Hero">
      <h1 class="page-title skills-title">Skills</h1>
      <div class="skills-list">
        <ul>
          <li>HTML<font-awesome-icon :icon="{ prefix: 'fab', iconName: 'html5' }"/></li>
          <li>CSS<font-awesome-icon :icon="{ prefix: 'fab', iconName: 'css3-alt' }"/></li>
          <li>SASS<font-awesome-icon :icon="{ prefix: 'fab', iconName: 'sass' }"/></li>
          <li>JS<font-awesome-icon :icon="{ prefix: 'fab', iconName: 'js' }"/></li>
          <li>Vue.js<font-awesome-icon :icon="{ prefix: 'fab', iconName: 'vuejs' }"/></li>
          <li>Node.js<font-awesome-icon :icon="{ prefix: 'fab', iconName: 'node' }"/></li>
          <li>React.js</li>
          <li>Tailwind</li>
          <li>MongoDB</li>
          <li>Solidity</li>
          <li>Hardhat</li>
          <li>Ethers.js</li>
        </ul>
      </div>
  </div>
  </div>
</template>

<script>
export default {
name: "Skills"
}
</script>
