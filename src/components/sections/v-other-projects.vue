<template>
  <div class="other__projects">
    <div class="title">{{ project.title }}</div>
    <div class="projects">
      <TransitionGroup name="list">
        <div class="project" v-for="project in project.list" :key="project.id">
          <div class="project__header">
            <FolderIcon class="folder" />
            <a :href="project.url" target="_blank">
              <ExternalIcon class="link"
            /></a>
          </div>
          <div class="project__name">
            {{ project.title }}
          </div>
          <p class="project__desc">
            {{ project.description }}
          </p>

          <ul class="project__tags">
            <li v-for="(tag, index) in project.tags" :key="index">{{ tag }}</li>
          </ul>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>
<script setup>
import FolderIcon from "@/components/icons/folder.vue";
import ExternalIcon from "@/components/icons/external.vue";
import project from "@/JSON/projects.json";
</script>
<style scoped>
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
.link:hover {
  color: #ff6b6b;
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
@media (max-width: 600px) {
  .project {
    margin: 10px 0;
  }
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

@media (max-width: 400px) {
  .project__name {
    font-size: 16px;
  }
  .project__desc {
    font-size: 14px;
  }
}
</style>
