<template>
  <article class="about" v-intersection="intersectionHandler" id="About">
    <VTitle
      :title="about.title"
      number="1"
      :style="{ animation: animations?.title }"
    />
    <p
      class="paragraphs"
      v-for="(paragraph, i) in about.paragraphs"
      :style="{ animation: animations?.paragraphs[i] }"
    >
      {{ paragraph }}
    </p>

    <ul class="tech__list">
      <li
        v-for="(tech, i) in about.technologies"
        :style="{ animation: animations?.technologies[i] }"
      >
        {{ tech }}
      </li>
    </ul>
  </article>
</template>
<script setup>
import about from "@/JSON/about.json";
import { computed, ref } from "vue";
import VTitle from "@/components/UI/v-title.vue";
import { about as animationsOptions } from "@/animations.js";
const isIntersecting = ref(false);

const animations = computed(() => {
  return isIntersecting.value ? animationsOptions : null;
});

function intersectionHandler() {
  isIntersecting.value = true;
}
</script>

<style scoped>
.title {
  opacity: 0;
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
</style>
