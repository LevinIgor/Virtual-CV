<template>
  <article class="about" v-intersection="intersectionHandler" id="About">
    <VTitle :title="about.title" number="1" :class="animations" />
    <p
      class="paragraphs"
      v-for="paragraph in about.paragraphs"
      :class="animations"
    >
      {{ paragraph }}
    </p>

    <ul class="tech__list">
      <li v-for="tech in about.technologies" :class="animations">
        {{ tech }}
      </li>
    </ul>
  </article>
</template>
<script setup>
import about from "@/JSON/about.json";
import { computed, ref } from "vue";
import VTitle from "@/components/UI/v-title.vue";
import { aboutAnimation } from "@/animations.js";
const isIntersecting = ref(false);

const animations = computed(() => {
  return isIntersecting.value ? "fade__animation" : "";
});

function intersectionHandler() {
  isIntersecting.value = true;
}
console.log(aboutAnimation);
</script>

<style scoped>
.title {
  opacity: 0;
}
.fade__animation {
  opacity: 0;
  animation-name: fadeIn;
  animation-fill-mode: forwards;
  animation-duration: v-bind("aboutAnimation.duration");
}

.about {
  max-width: 900px;
  margin-bottom: 150px;
}
.paragraphs {
  opacity: 0;
  margin-top: 20px;
}

p {
  color: var(--slate);
  font-family: "Inter", sans-serif;
  font-size: 18px;
  margin: 0;
  margin-bottom: 15px;
}

.tech__list {
  display: grid;
  grid-template-columns: repeat(2, minmax(160px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;
}
.tech__list li {
  opacity: 0;
  position: relative;
  color: var(--slate);
  font-family: "Roboto", monospace;
  margin-bottom: 10px;
  padding-left: 20px;
  font-size: 13px;
}
.tech__list li::before {
  content: "▹";
  color: var(--green);
  font-size: 12px;
  line-height: 12px;
  margin-right: 5px;
}

@keyframes fadeIn {
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

.fade__animation:nth-child(1) {
  animation-delay: v-bind("aboutAnimation.title.delay");
}
.fade__animation:nth-child(2) {
  animation-delay: v-bind("aboutAnimation.paragraphs[0].delay");
}
.fade__animation:nth-child(3) {
  animation-delay: v-bind("aboutAnimation.paragraphs[1].delay");
}
.fade__animation:nth-child(4) {
  animation-delay: v-bind("aboutAnimation.paragraphs[2].delay");
}
.fade__animation:nth-child(5) {
  animation-delay: v-bind("aboutAnimation.paragraphs[3].delay");
}

.tech__list li:nth-child(1) {
  animation-delay: v-bind("aboutAnimation.technologies[0].delay");
}
.tech__list li:nth-child(2) {
  animation-delay: v-bind("aboutAnimation.technologies[1].delay");
}
.tech__list li:nth-child(3) {
  animation-delay: v-bind("aboutAnimation.technologies[2].delay");
}
.tech__list li:nth-child(4) {
  animation-delay: v-bind("aboutAnimation.technologies[3].delay");
}
.tech__list li:nth-child(5) {
  animation-delay: v-bind("aboutAnimation.technologies[4].delay");
}
.tech__list li:nth-child(6) {
  animation-delay: v-bind("aboutAnimation.technologies[5].delay");
}
</style>
