<template>
  <div class="portfolio-page page-body">
    <PortfolioMain />

    <div class="project-full-list">
        <div v-for="data in projectData" :key="data.id" class="project-container">
            <h2>{{ data.name }}</h2>
            <a :href="data.projecturl">Google.com</a>
            <img :src="data.imageurl"/>
            <div class="project-tools">
                <div v-for="item in data.tools" :key="item">{{ item }}</div>
            </div>
        </div>
    </div>

  </div>
</template>
<script>
import PortfolioMain from '@/components/PortfolioPage/Portfolio.vue';
import json from '@/assets/apis/projectdata.json';

export default {
  components: {
      PortfolioMain
  },
  data: function() {
      return {
          projectData: json
      }
  }
}
</script>