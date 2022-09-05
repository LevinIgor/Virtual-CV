<template>
  <div class="some__build" :style="intersection ? fadeDown : null">
    <div class="title">Some Things I’ve Built</div>
    <div class="project">
      <div class="project__img" :style="intersection ? fadeLeft : null">
        <img src="@/assets/icons/vscode.png" alt="" />
      </div>
      <div class="project__text" :style="intersection ? fadeLeft : null">
        <div class="project__bg" />
        <div class="featured">Featured Project</div>
        <div v-intersection="onIntersection" class="intersection" />
        <div class="project__name">Halcyon Theme</div>
        <div class="project__details">
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
          more. Available on Visual Studio Marketplace, Package Control, Atom
          Package Manager, and npm.
        </div>

        <ul class="project__tags">
          <li :style="intersection ? scale : null">VS Code</li>
          <li :style="intersection ? scale : null">Sublime Text</li>
          <li :style="intersection ? scale : null">Atom</li>
          <li :style="intersection ? scale : null">iTerm</li>
          <li :style="intersection ? scale : null">Hyper</li>
        </ul>

        <div class="project__links">
          <a href="" class="project__link">
            <externalIcon />
          </a>
          <a href="" class="project__link">
            <githubIcon class="icon" />
          </a>
        </div>
      </div>
    </div>
    <VOtherProjects />
  </div>
</template>
<script setup>
import VOtherProjects from "./UI/v-other-projects.vue";
import externalIcon from "@/components/icons/external.vue";
import githubIcon from "@/components/icons/github.vue";
import { ref, computed } from "vue";
const intersection = ref(false);

function onIntersection() {
  intersection.value = true;
}
const fadeDown = computed(() => ({
  opacity: 1,
  transform: "translateY(0)",
}));
const fadeLeft = computed(() => ({
  opacity: 1,
  transform: "translateX(0)",
}));
const scale = computed(() => ({
  opacity: 1,
  transform: "scale(1)",
}));
</script>

<style scoped>
.some__build {
  margin-top: 100px;
  transform: translateY(200px);
  opacity: 0;
  transition: all 1s ease-in-out;
}
.icon {
  width: 24px;
  height: 24px;
}
.title {
  white-space: nowrap;
  display: flex;
  align-items: center;
  font-size: clamp(26px, 5vw, 32px);
  font-weight: 600;
  color: var(--lightest-slate);
  line-height: 1.1;
  font-family: "Inter", sans-serif;
}
.title::before {
  content: "03.";
  position: relative;
  bottom: -4px;
  margin-right: 10px;
  color: var(--green);
  font-family: "Roboto", sans-serif;
  font-size: clamp(16px, 3vw, 20px);
  font-weight: 400;
}
.title::after {
  content: "";
  width: 200px;
  height: 1px;
  bottom: -4px;
  background-color: var(--lightest-navy);
  margin-left: 20px;
}

.project {
  margin-top: 30px;
  display: flex;
  justify-content: right;
  min-width: 100%;
}
.project__text {
  max-width: 70%;
  right: 0;
  text-align: right;
  transform: translateX(200px);
  opacity: 0;
  transition: all 1.5s ease-in-out;
}
.project__img {
  position: absolute;
  max-height: 100%;
  max-width: 70%;
  left: 0;
  height: min-content;
  overflow: hidden;
  transform: translateX(-200px);
  opacity: 0;
  transition: all 1s ease-in-out;
}
.project__img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.featured {
  margin: 10px 0px;
  color: var(--green);
  font-family: "Roboto", monospace;
  font-size: 13px;
  font-weight: 400;
}
.project__name {
  color: var(--lightest-slate);
  font-size: clamp(24px, 5vw, 28px);
}
.project__details {
  margin-top: 20px;
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  z-index: 2;
  padding: 25px;
  border-radius: var(--border-radius);
  background-color: var(--light-navy);
  color: var(--light-slate);
  font-size: 16px;
}
.project__tags {
  margin-top: 20px;
  display: flex;
  justify-content: right;
}
.project__tags li {
  margin-right: 10px;
  color: var(--light-slate);
  font-weight: 400;
  font-size: 13px;
  user-select: none;
  opacity: 0;
  transition: all 0s ease-in-out 1s;
  transform: scale(0);
}
.project__tags li:nth-child(1) {
  transition-duration: 1.2s;
}
.project__tags li:nth-child(2) {
  transition-duration: 1.4s;
}
.project__tags li:nth-child(3) {
  transition-duration: 1.6s;
}

.project__tags li:nth-child(4) {
  transition-duration: 1.8s;
}
.project__tags li:nth-child(5) {
  transition-duration: 2s;
}
.project__tags li:nth-child(6) {
  transition-duration: 2.2s;
}

.project__links {
  margin-top: 10px;
  display: flex;
  justify-content: right;
}
.project__links a {
  transition: color 0.25s ease-in-out;
  margin-left: 20px;
}
.project__links a:hover {
  color: var(--green);
}

@media (max-width: 800px) {
  .project__img {
    display: none;
  }
  .project__bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url("https://halcyon-theme.netlify.app/static/demo-30184fa83cb4ab8fb7809cf95cc8aec3.png");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }
  .project__text {
    padding: 40px;
    max-width: 100%;
    text-align: left;
    background-color: #112240b7;
  }
  .project__tags {
    justify-content: left;
  }
  ul {
    margin: 0;
    padding: 0;
  }
}
@media (max-width: 500px) {
  .project__text {
    padding: 10px;
  }
  .title {
    font-size: 22px;
  }
  .project__details {
    font-size: 14px;
    padding: 10px;
  }
}
</style>
