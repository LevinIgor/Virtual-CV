<template>
  <div class="other__projects">
    <div class="title">Other Noteworthy Projects</div>
    <div class="projects">
      <div class="intersection" v-intersection="onIntersection" />
      <TransitionGroup name="list">
        <div class="project" v-for="index in count" :key="index">
          <div class="project__header">
            <FolderIcon class="folder" />
            <ExternalIcon class="link" />
          </div>
          <div class="project__name">
            Integrating Algolia Search with WordPress Multisite
          </div>
          <p class="project__desc">
            Building a custom multisite compatible WordPress plugin to build
            global search with Algolia
          </p>

          <ul class="project__tags">
            <li>Algolia</li>
            <li>WordPress</li>
            <li>PHP</li>
          </ul>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>
<script setup>
import FolderIcon from "@/components/icons/folder.vue";
import ExternalIcon from "@/components/icons/external.vue";
import { ref } from "vue";

const count = ref(0);
function onIntersection() {
  start();
}

let interval = null;
function start() {
  interval = setInterval(increment, 300);
}

function increment() {
  count.value >= 9 ? clearInterval(interval) : count.value++;
}
</script>
<style scoped>
.intersection {
  height: 0;
  width: 0;
  position: absolute;
}
.other__projects {
  margin-top: 150px;
}

.folder {
  width: 40px;
  height: 40px;
  transition: color 0.2s ease-in-out;
}
.link {
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
}
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
.project {
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: var(--light-navy);
  padding: 20px;
  margin: 10px;
}
.project__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.project__name {
  margin-top: 20px;
  font-weight: 600;
  color: var(--lightest-slate);
  font-size: 20px;
}
.project__desc {
  color: var(--light-slate);
  font-size: 16px;
}
.project__tags {
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

@media (max-width: 400px) {
  .project__name {
    font-size: 16px;
  }
  .project__desc {
    font-size: 14px;
  }
}
list-move,
list-enter-active,
.list-leave-active {
  transition: all 5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(60px);
}
.list-active {
  transition: all 5s ease;
}
.list-enter-active {
  transition: all 1s ease 1s;
}
</style>
