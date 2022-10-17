<template>
  <article class="some__build" id="Work" v-intersection="intersectionHandler">
    <VTitle
      ref="title"
      :title="someBuild.title"
      number="3"
      style="opacity: 0"
    />
    <div class="project">
      <img
        class="project__img"
        src="@/assets/icons/code.jpg"
        alt="code img"
        ref="img"
      />
      <div class="project__text">
        <div class="featured" :ref="setRef">{{ someBuild.subTitle }}</div>
        <div class="project__name" :ref="setRef">{{ someBuild.name }}</div>
        <div class="project__details" :ref="setRef">
          {{ someBuild.paragraph }}
        </div>

        <ul class="project__tags">
          <li v-for="tech in someBuild.technologies" ref="tags">
            {{ tech }}
          </li>
        </ul>

        <div class="project__links">
          <VExternalLink
            class="link"
            :href="'https://virtual-cv.vercel.app/'"
            ref="external"
          />
          <VGitLink ref="github" class="link" />
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
import VTitle from "@/components/UI/v-title.vue";
import { someThinksOptions } from "@/animations.js";
import { ref } from "vue";

const text = ref([]);
const tags = ref([]);
const img = ref(null);
const title = ref(null);
const external = ref(null);
const github = ref(null);
const defaultAnimation = "fadeInUpDown 1s ease-in-out 0.5s forward";
function setRef(el) {
  text.value.push(el);
}
function intersectionHandler() {
  title.value.$el.style.animation = someThinksOptions.title;
  img.value.style.animation = someThinksOptions.img;
  text.value.forEach((el, index) => {
    el.style.animation = someThinksOptions.text[index] || defaultAnimation;
  });
  tags.value.forEach((el, index) => {
    el.style.animation = someThinksOptions.tags[index] || defaultAnimation;
  });
  external.value.$el.style.animation = someThinksOptions.external;
  github.value.$el.style.animation = someThinksOptions.github;
}
</script>

<style scoped>
.some__build {
  transition: all 1s ease-in-out;
  margin-bottom: 150px;
}
.externalLink {
  opacity: 0;
  width: 1.3rem;
  height: 1.3rem;
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
  opacity: 0;
  position: absolute;
  max-height: 300px;
  width: 70%;
  left: 0;
  height: min-content;
  overflow: hidden;
  transition: all 1s ease-in-out;
  object-fit: cover;
}
.featured {
  opacity: 0;
  margin: 10px 0px;
  color: var(--green);
  font-family: "Roboto", monospace;
  font-size: 13px;
  font-weight: 400;
}
.project__name {
  opacity: 0;
  color: var(--lightest-slate);
  font-size: clamp(24px, 5vw, 28px);
}
.project__details {
  opacity: 0;
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
  opacity: 0;
  margin-right: 10px;
  color: var(--light-slate);
  font-weight: 400;
  font-size: 13px;
  user-select: none;
  text-align: center;
}
.project__links {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
.link {
  opacity: 0;
  margin-left: 20px;
  width: 1.3rem;
  height: 1.3rem;
  transition: all 0.2s ease-in-out;
}
.link:hover {
  color: var(--green);
  filter: drop-shadow(0 0 0.75rem var(--green));
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
