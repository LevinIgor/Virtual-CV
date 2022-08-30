<template>
  <div class="work">
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
</template>
<script setup>
import { ref, computed } from "vue";

const selectTab = ref(0);
const fade = ref(true);
const works = ref([
  {
    name: "Upstatement",
    title: "Engineer",
    url: ["@Upstatement", "https://upstatement.com/"],
    range: "May 2018 - Present",
    list: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlifyz",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    ],
  },
  {
    name: "Scout",
    title: "Studio Developer",
    url: ["@Scout", "https://scout.com/"],
    range: "January - April 2018",
    list: [
      "Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern",
      "Helped solidify a brand direction for blistabloc that spans both packaging and web",
      "Interfaced with clients on a weekly basis, providing technological expertise",
    ],
  },
  {
    name: "Apple",
    title: "UI Engineer Co-op",
    url: ["@Apple", "https://apple.com/"],
    range: "July - December 2017",
    list: [
      "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
      "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs",
      "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",
      "Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps",
    ],
  },
  {
    name: "Starry",
    title: "Software Engineer Co-op",
    url: ["@Starry", "https://starry.com/"],
    range: "July - December 2016",
    list: [
      "Engineered and maintained major features of Starry's customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS",
      "Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with Starry Station",
      "Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Starry’s iOS and Android mobile apps",
    ],
  },
  {
    name: "MullenLowe",
    title: "Creative Technologist Co-op",
    url: ["@MullenLowe", "https://mullenlowe.com/"],
    range: "July - December 2015",
    list: [
      "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
      "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
      "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more",
    ],
  },
]);

function onTabClick(index) {
  fade.value = false;
  setTimeout(() => {
    fade.value = true;
    selectTab.value = index;
  }, 100);
}

const work = computed(() => {
  return works.value[selectTab.value];
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
