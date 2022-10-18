<script setup>
import FolderIcon from "@/components/icons/folder.vue";
import VExternalLink from "@/components/links/v-externalLink.vue";
import { ref, computed } from "vue";
const props = defineProps(["project", "animationOptions"]);
const projectRef = ref(null);
const isIntersecting = ref(false);

const animations = computed(() => {
  return isIntersecting.value ? props.animationOptions : null;
});
function intersectionHandler() {
  isIntersecting.value = true;
}
</script>
<template>
  <div
    class="project"
    v-intersection="intersectionHandler"
    :style="{ animation: animations?.form }"
  >
    <div class="project__header">
      <FolderIcon
        class="folder"
        :style="{
          animation: animations?.folder,
        }"
      />
      <VExternalLink
        class="external"
        :style="{
          animation: animations?.external,
        }"
        :href="project.url"
      />
    </div>
    <a
      class="project__name"
      target="_blank"
      :href="project.url"
      :style="{ animation: animations?.title }"
      >{{ project.title }}</a
    >
    <p class="project__desc" :style="{ animation: animations?.desc }">
      {{ project.description }}
    </p>

    <ul class="project__tags">
      <li
        v-for="(tag, i) in project.tags"
        :key="i"
        :style="{ animation: animations?.tags[i] }"
      >
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

.folder {
  width: 40px;
  height: 40px;
  transition: color 0.2s ease-in-out;
  opacity: 0;
}
.external {
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  width: 30px;
  height: 30px;
}
.external:hover {
  color: #ff6b6b;
  filter: drop-shadow(0 0 0.75rem #ff6b6b);
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
</style>
