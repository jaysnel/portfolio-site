<template>
  <div class="portfolio-page page-body">
    <PortfolioMain />

    <div class="project-full-list">
        <div v-for="data in projectData" :key="data.id" class="project-container">
            <h2>{{ data.name }}</h2>
            <div class="project-links">
              <a :href="data.projecturl" class="link" target="_blank">{{ data.linkName }}</a>
              <a v-if="data.originalurl" :href="data.originalurl" class="link" target="_blank">{{ data.originalurlname }}</a>
              <a v-if="data.additionalurl" :href="data.additionalurl" class="link" target="_blank">{{ data.additionalurlname }}</a>
            </div>
            <img v-if="data.imageurl" :src="data.imageurl"/>
            <span><strong>Tools:</strong></span>
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