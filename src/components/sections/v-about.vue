<template>
  <section class="about" id="About">
    <div
      class="about__title fade"
      :style="isIntersection ? style : null"
      v-intersection="onIntersection"
    >
      {{ about.title }}
    </div>
    <article class="inner">
      <p
        class="fade"
        :style="isIntersection ? style : null"
        v-for="paragraph in about.paragraphs"
      >
        {{ paragraph }}
      </p>
      <div class="technologies">
        <ul class="tech__list">
          <li
            v-for="tech in about.technologies"
            class="fade"
            :style="isIntersection ? style : null"
          >
            {{ tech }}
          </li>
        </ul>
      </div>
    </article>
  </section>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import about from "@/JSON/about.json";

// let about = ref({});
const style = computed(() => ({
  opacity: 1,
  transform: "translateY(0px)",
}));

const isIntersection = ref(false);
function onIntersection() {
  isIntersection.value = true;
}
onMounted(() => {
  console.log(about);
});
</script>

<style scoped>
.fade {
  opacity: 0;
  transform: translateY(200px);
}
.fade:nth-child(1) {
  transition: all 1s ease-in-out;
}
.fade:nth-child(2) {
  transition: all 1.4s ease-in-out;
}
.fade:nth-child(3) {
  transition: all 1.8s ease-in-out;
}
.fade:nth-child(4) {
  transition: all 2.2s ease-in-out;
}
.fade:nth-child(5) {
  transition: all 2.6s ease-in-out;
}
.fade:nth-child(6) {
  transition: all 3s ease-in-out;
}
.fade:nth-child(7) {
  transition: all 3.4s ease-in-out;
}
.fade:nth-child(8) {
  transition: all 3.8s ease-in-out;
}
.fade:nth-child(9) {
  transition: all 4.4s ease-in-out;
}
.fade:nth-child(10) {
  transition: all 4.8s ease-in-out;
}
.fade:nth-child(11) {
  transition: all 5.2s ease-in-out;
}
.about {
  margin-top: 100px;
  max-width: 900px;
}
p {
  color: var(--slate);
  font-family: "Inter", sans-serif;
  font-size: 18px;
  margin: 0;
  margin-bottom: 15px;
}
section {
  height: max-content;
}
.about__title {
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0px 40px;
  width: 100%;
  font-size: clamp(26px, 5vw, 32px);
  white-space: nowrap;
  font-weight: 600;
  color: var(--lightest-slate);
  font-family: "Inter", sans-serif;
}
.about__title::before {
  content: "01.";
  position: relative;
  bottom: -4px;
  margin-right: 10px;
  color: var(--green);
  font-family: "Roboto", sans-serif;
  font-size: clamp(16px, 3vw, 20px);
  font-weight: 400;
}
.about__title::after {
  content: "";
  width: 200px;
  height: 1px;
  bottom: -4px;
  background-color: var(--lightest-navy);
  margin-left: 20px;
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
@media (max-width: 800px) {
  .inner {
    display: block;
  }
  .section__img {
    margin: 0 auto;
    margin-top: 40px;
    display: none;
  }
}
</style>
