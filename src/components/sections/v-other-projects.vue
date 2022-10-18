<template>
  <div class="other__projects" v-intersection="IntersectionObserver">
    <div class="title" ref="title">{{ project.title }}</div>
    <div class="projects">
      <VProject
        v-for="(prj, index) in project.list"
        :key="index"
        :project="prj"
        :animationOptions="animationsOptions.project"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import project from "@/JSON/projects.json";
import VProject from "@/components/UI/v-project.vue";
import { otherProjects as animationsOptions } from "@/animations.js";

const title = ref(null);

function IntersectionObserver() {
  title.value.style.animation = animationsOptions.title;
}
</script>
<style scoped>
.title {
  opacity: 0;
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
