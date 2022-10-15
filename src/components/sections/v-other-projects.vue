<template>
  <div class="other__projects">
    <div class="title">{{ project.title }}</div>
    <div class="projects">
      <VProject
        v-for="(prj, i) in project.list"
        :key="project.id"
        :project="prj"
        :animationOptions="projectsAnimation[i]"
      />
    </div>
  </div>
</template>
<script setup>
import project from "@/JSON/projects.json";
import VProject from "../UI/v-project.vue";
import { projectsAnimation } from "@/animations.js";
</script>
<style scoped>
.title {
  font-weight: 600;
  color: var(--lightest-slate);
  line-height: 1.1;
  font-size: clamp(24px, 5vw, 32px);
  text-align: center;
}
.projects {
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

@media (max-width: 600px) {
  .project {
    margin: 10px 0;
  }
}

@media (max-width: 400px) {
  .project__name {
    font-size: 16px;
  }
  .project__desc {
    font-size: 14px;
  }
}
</style>
