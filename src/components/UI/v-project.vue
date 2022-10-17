<script setup>
import FolderIcon from "@/components/icons/folder.vue";
import VExternalLink from "@/components/links/v-externalLink.vue";
import { ref } from "vue";
const props = defineProps(["project", "animationOptions"]);
const projectRef = ref(null);
const folderRef = ref(null);
const externalRef = ref(null);
const title = ref(null);
const desc = ref(null);
const tagsRef = ref([]);
const defaultAnimation = "fadeInUpDown 1s ease-in-out 0.5s forward";
function intersectionHandler() {
  projectRef.value.style.animation = props.animationOptions.projectFade;
  folderRef.value.$el.style.animation = props.animationOptions.projectHeader[0];
  externalRef.value.$el.style.animation =
    props.animationOptions.projectHeader[1];
  title.value.style.animation = props.animationOptions.projectTitle;
  desc.value.style.animation = props.animationOptions.projectDesc;
  tagsRef.value.forEach((tag, index) => {
    tag.style.animation =
      props.animationOptions.projectTags[index] || defaultAnimation;
  });
}
</script>
<template>
  <div class="project" v-intersection="intersectionHandler" ref="projectRef">
    <div class="project__header">
      <FolderIcon class="folder" style="opacity: 0" ref="folderRef" />
      <VExternalLink
        class="external"
        style="opacity: 0"
        :href="project.url"
        ref="externalRef"
      />
    </div>
    <a class="project__name" target="_blank" :href="project.url" ref="title">{{
      project.title
    }}</a>
    <p class="project__desc" ref="desc">
      {{ project.description }}
    </p>

    <ul class="project__tags">
      <li v-for="(tag, index) in project.tags" :key="index" ref="tagsRef">
        {{ tag }}
      </li>
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
  opacity: 0;
  margin-top: 20px;
  font-weight: 600;
  color: var(--lightest-slate);
  font-size: 20px;
  font-family: Inter, sans-serif;
}
.project__name::after {
  content: "";
  position: absolute;
  left: 0;
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
  opacity: 0;
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
  opacity: 0;
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
