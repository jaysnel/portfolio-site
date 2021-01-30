<template>
  <div class="projects-page page-body">
    <div class="Portolio-Hero">
    <h1 class="page-title projects-title">Portfolio</h1>
  </div>

    <div class="project-full-list">
        <div v-for="data in projectData" :key="data.id" class="project-container">
            <h2>{{ data.name }}</h2>
            <div class="project-links">
              <a :href="data.projecturl" class="link" :title="data.linkName" target="_blank">{{ data.linkName }}</a>
              <a v-if="data.originalurl" :href="data.originalurl" class="link" :title="data.originalurlname" target="_blank">{{ data.originalurlname }}</a>
              <a v-if="data.additionalurl" :href="data.additionalurl" class="link" :title="data.additionalurlname" target="_blank">{{ data.additionalurlname }}</a>
            </div>
            <img v-if="data.imageurl" :src="data.imageurl"/>
            <span><strong>Tools Used:</strong></span>
            <div class="project-tools">
                <div v-for="item in data.tools" :key="item">{{ item }}</div>
            </div>
            <p v-if="data.details">{{ data.details }}</p>
        </div>
    </div>

  </div>
</template>
<script>
import json from '@/assets/apis/projectdata.json';

export default {
  data: function() {
      return {
          projectData: json
      }
  }
}
</script>