<template>
  <article
    class="experience"
    id="Experience"
    v-intersection="intersectionHandler"
  >
    <VTitle ref="title" :title="work.title" number="2" style="opacity: 0" />
    <div class="inner">
      <div class="tab__list" ref="tabs">
        <span
          class="tab__item"
          v-for="(item, index) in work.list"
          :key="index"
          :class="{ tab__active: index === selectTab }"
          ref="itemsRef"
          @click="onTabClick(index)"
          >{{ item.name }}</span
        >
        <div class="line" :style="lineStyle" />
      </div>

      <div class="tab__content" ref="content">
        <div class="content__header">
          <span class="content__title"
            >{{ activeTab.title }}
            <a :href="activeTab.url[1]" target="_blank">{{
              activeTab.url[0]
            }}</a>
          </span>
          <span class="content__range">{{ activeTab.range }}</span>
        </div>
        <ul>
          <li v-for="(item, index) in activeTab.list" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>
<script setup>
import { ref, computed } from "vue";
import work from "@/JSON/work.json";
import VTitle from "@/components/UI/v-title.vue";
import { experienceOptions } from "@/animations.js";

const selectTab = ref(0);
const title = ref(null);
const tabs = ref(null);
const content = ref(null);
const itemsRef = ref([]);
const defaultAnimation = "fadeInUpDown 0.5s ease-in-out 1.2s forwards";
function onTabClick(index) {
  selectTab.value = index;
}

const activeTab = computed(() => {
  return work.list[selectTab.value];
});

const lineStyle = computed(() => {
  return window.innerWidth > 600
    ? { transform: ` translateY(${selectTab.value * 100}%)` }
    : { transform: ` translateX(${selectTab.value * 100}%)` };
});

function intersectionHandler() {
  title.value.$el.style.animation = experienceOptions.title;
  tabs.value.style.animation = "fadeInLeftRight 1s ease-in-out 0.5s forwards";
  itemsRef.value.forEach((item, index) => {
    item.style.animation = experienceOptions.tabs[index] || defaultAnimation;
  });
  content.value.style.animation = experienceOptions.content;
}
</script>

<style scoped>
.experience {
  margin-top: 100px;
  transition: transform 1.5s, opacity 1.5s;
  margin-bottom: 150px;
}
.inner {
  display: flex;
  margin-top: 40px;
  cursor: default;
}
.tab__list {
  display: grid;
  height: max-content;
  opacity: 0;
}
.tab__item {
  opacity: 0;
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  padding: 0 15px;
  border-left: 2px solid var(--lightest-navy);
  color: var(--slate);
  font-family: "Roboto", monospace;
  font-size: 13px;
  transition: all 0.2s ease-in-out;
  height: var(--tab-height);
}
.tab__item:hover {
  background-color: var(--light-navy);
  color: var(--green);
}
.tab__active {
  background-color: var(--light-navy);
  color: var(--green);
}
.line {
  transition: all 0.2s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: var(--tab-height);
  background-color: var(--green);
}
.tab__content {
  margin-left: 20px;
  opacity: 0;
  min-height: 200px;
}
.content__header {
  display: flex;
  flex-direction: column;
}

.content__title {
  margin-bottom: 2px;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.3;
  color: var(--lightest-slate);
  font-family: "Inter", sans-serif;
}
.content__title a {
  font-family: "Inter", sans-serif;
  font-weight: 600;
  cursor: pointer;
  color: var(--green);
}
.content__title a::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--green);
  transition: width 0.3s;
}
.content__title a:hover::after {
  width: 100%;
}

.content__range {
  color: var(--light-slate);
  font-family: "Roboto", monospace;
  font-size: 13px;
  margin-top: 5px;
  user-select: none;
}
ul {
  margin-top: 20px;
}
li {
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
  font-size: 16px;
}
li::before {
  content: "▹";
  position: absolute;
  left: 0px;
  color: var(--green);
}

@media (max-width: 600px) {
  .inner {
    display: flex;
    flex-direction: column;
  }
  .tab__list {
    z-index: 10;
    box-sizing: border-box;
    display: inline-flex;
    overflow-x: scroll;
    margin-bottom: 30px;
    pointer-events: fill;
  }
  .tab__item {
    box-sizing: border-box;
    justify-content: center;
    border-left: none;
    border-bottom: 2px solid var(--lightest-navy);
    min-width: var(--tab-width);
  }
  ul {
    margin: 0;
    margin-top: 10px;
    padding: 0;
  }
  li {
    font-size: 14px;
  }
  .line {
    width: var(--tab-width);
    height: 1px;
    bottom: 0px;
  }
}
</style>
