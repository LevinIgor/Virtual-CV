<template>
  <article class="some__build" id="Work" v-intersection>
    <div class="title">{{ someBuild.title }}</div>
    <div class="project">
      <div class="project__img">
        <img src="@/assets/icons/code.jpg" alt="code img" />
      </div>
      <div class="project__text">
        <div class="featured">{{ someBuild.subTitle }}</div>
        <div class="project__name">{{ someBuild.name }}</div>
        <div class="project__details">
          {{ someBuild.paragraph }}
        </div>

        <ul class="project__tags">
          <li v-for="tech in someBuild.technologies">
            {{ tech }}
          </li>
        </ul>

        <div class="project__links">
          <VExternalLink
            class="external"
            :href="'https://virtual-cv.vercel.app/'"
          />
          <VGitLink />
        </div>
      </div>
    </div>
    <VOtherProjects />
  </article>
</template>
<script setup>
import VOtherProjects from "@/components/sections/v-other-projects.vue";

import VExternalLink from "../links/v-externalLink.vue";
import VGitLink from "@/components/links/v-gitLink.vue";

import someBuild from "@/JSON/some-build.json";
</script>

<style scoped>
.some__build {
  transition: all 1s ease-in-out;
  margin-bottom: 150px;
}
.external {
  width: 1.3rem;
  height: 1.3rem;
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
  margin-bottom: 50px;
}
.project__text {
  max-width: 70%;
  right: 0;
  text-align: right;
  transition: all 1.5s ease-in-out;
  cursor: default;
}
.project__img {
  position: absolute;
  max-height: 100%;
  max-width: 70%;
  left: 0;
  height: min-content;
  overflow: hidden;
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
  transition: all 0s ease-in-out 1s;
  text-align: center;
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
  .project__tags li {
    font-size: 10px;
  }
}
</style>
