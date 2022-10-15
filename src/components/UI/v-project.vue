<script setup>
import FolderIcon from "@/components/icons/folder.vue";
import VExternalLink from "@/components/links/v-externalLink.vue";
import { computed } from "vue";

const animStyle = computed(() => ({
  animationDelay: `${props?.animationOptions.delay}s`,
  animationDuration: `${props?.animationOptions.duration}s`,
}));
const props = defineProps(["project", "animationOptions"]);
</script>
<template>
  <div class="project" v-intersection :style="animStyle">
    <div class="project__header">
      <FolderIcon class="folder" />
      <VExternalLink class="external" :href="project.url" />
    </div>
    <a class="project__name" target="_blank" :href="project.url">{{
      project.title
    }}</a>
    <p class="project__desc">
      {{ project.description }}
    </p>

    <ul class="project__tags">
      <li v-for="(tag, index) in project.tags" :key="index">{{ tag }}</li>
    </ul>
  </div>
</template>
<style scoped>
.project {
  transition: all 0.2s ease-in-out;
  background-color: var(--light-navy);
  padding: 20px;
  margin: 10px;
  opacity: 0;
}
.active {
  animation-name: fadeIn;
  animation-fill-mode: forwards;
}
.folder {
  width: 40px;
  height: 40px;
  transition: color 0.2s ease-in-out;
}
.external {
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  width: 30px;
  height: 30px;
}
.external:hover {
  color: #ff6b6b;
}
.project__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.project__name {
  margin-top: 20px;
  font-weight: 600;
  color: var(--lightest-slate);
  font-size: 20px;
  font-family: Inter, sans-serif;
}
.project__name::after {
  content: "";
  position: absolute;
  bottom: -5px;
  width: 0%;
  height: 1px;
  background-color: var(--green);
  margin-top: 10px;
  transition: all 0.2s ease-in-out;
}
.project__name:hover::after {
  width: 100%;
}
.project__desc {
  cursor: default;
  color: var(--light-slate);
  font-size: 16px;
}
.project__tags {
  user-select: none;
  margin-top: 10px;
  display: flex;
}
.project__tags li {
  margin-right: 10px;
  font-size: 13px;
}
.project:hover {
  transform: translateY(-15px);
}
.project:hover .project__name {
  color: var(--green);
}
.project:hover .folder {
  color: var(--green);
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
