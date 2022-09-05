<template>
  <div class="work" :style="isIntersection ? style : null">
    <div class="title">Where I’ve Worked</div>
    <div class="inner">
      <div class="tab__list">
        <span
          class="tab__item"
          v-for="(item, index) in works"
          :key="index"
          :class="{ tab__active: index === selectTab }"
          @click="onTabClick(index)"
          >{{ item.name }}</span
        >
        <div class="line" :style="lineStyle" />
      </div>
      <transition name="fade" mode="out-in">
        <div class="tab__content" v-show="fade">
          <span class="content__title"
            >{{ work.title }}
            <a :href="work.url[1]" target="_blank">{{ work.url[0] }}</a>
          </span>
          <span class="content__range">{{ work.range }}</span>
          <ul>
            <li v-for="(item, index) in work.list" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
  <div v-intersection="onIntersection" />
</template>
<script setup>
import { ref, computed } from "vue";
import works from "@/JSON/works.json";

const selectTab = ref(0);
const fade = ref(true);

function onTabClick(index) {
  fade.value = false;
  setTimeout(() => {
    fade.value = true;
    selectTab.value = index;
  }, 100);
}

const isIntersection = ref(false);
function onIntersection() {
  isIntersection.value = true;
}

const style = computed(() => ({
  opacity: 1,
  transform: "translateY(0)",
}));
const work = computed(() => {
  return works[selectTab.value];
});

const lineStyle = computed(() => {
  let width = window.innerWidth;
  let style;
  if (width > 600) {
    style = { transform: ` translateY(${selectTab.value * 100}%)` };
  } else {
    style = { transform: ` translateX(${selectTab.value * 100}%)` };
  }
  return style;
});
</script>

<style scoped>
.work {
  margin-top: 100px;
  opacity: 0;
  transform: translateY(200px);
  transition: transform 1.5s, opacity 1.5s;
}
.title {
  display: flex;
  align-items: center;
  font-size: clamp(26px, 5vw, 32px);
  font-weight: 600;
  color: var(--lightest-slate);
  line-height: 1.1;
  font-family: "Inter", sans-serif;
}
.title::before {
  content: "02.";
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
.inner {
  display: flex;
  margin-top: 40px;
  cursor: default;
}
.tab__list {
  display: grid;
  height: max-content;
}
.tab__item {
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
  display: grid;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
