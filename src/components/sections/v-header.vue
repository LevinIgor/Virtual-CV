<template>
  <header :class="{ hide: isHide, off__shadow: isBoxShadow }">
    <LogoIcon class="header__logo" :animation="headerAnimation.logo" />
    <nav class="header__nav">
      <VNav_link
        class="header__nav__link"
        v-for="(link, index) in menu"
        :key="link"
        :value="{ link, index }"
        ref="linksRefs"
        @click="onMenuClick(link)"
      />
      <VBtnResumeLink ref="buttonRef" />
    </nav>

    <VBurgerMenu
      class="burger"
      @onClick="showMobileMenu()"
      :isHide="isMobileMenu"
    />

    <div class="blur" v-if="isMobileMenu" @click="showMobileMenu()" />
    <aside class="mobile__header__menu" :class="{ 'fade-in': isMobileMenu }">
      <ul class="mobile__menu">
        <li
          v-for="(link, index) in menu"
          :key="link"
          @click="onMenuClick(link)"
        >
          <VNav_link :value="{ link, index }" />
        </li>
      </ul>
      <VBtnResumeLink :fontSize="22" />
    </aside>
  </header>
</template>
<script setup>
import { onMounted, ref } from "vue";
import VBurgerMenu from "@/components/UI/v-burger-menu.vue";
import LogoIcon from "@/components/icons/logo.vue";
import VNav_link from "@/components/UI/v-nav_link.vue";
import VBtnResumeLink from "@/components/links/v-btn-resumeLink.vue";
import { header as headerAnimation } from "@/animations";

const isHide = ref(false);
const isMobileMenu = ref(false);
const isBoxShadow = ref(true);
const menu = ref(["About", "Experience", "Work", "Contact"]);
const linksRefs = ref([]);
const buttonRef = ref(null);

const emits = defineEmits(["onScroll", "offScroll"]);

function hideHeader() {
  isHide.value = true;
}

function showHeader() {
  isHide.value = false;
}

function showMobileMenu() {
  if (isMobileMenu.value) {
    isMobileMenu.value = false;
    emits("offScroll");
  } else {
    isMobileMenu.value = true;
    emits("onScroll");
  }
}

function onMenuClick(id) {
  const el = document.getElementById(id);
  el.scrollIntoView({ behavior: "smooth" });
  isMobileMenu.value ? showMobileMenu() : hideHeader();
}

onMounted(() => {
  document.addEventListener(
    "wheel",
    (e) => {
      if (!isMobileMenu.value) {
        e.deltaY > 0 ? hideHeader() : showHeader();
        isBoxShadow.value = window.scrollY == 0 ? true : false;
      } else {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    { passive: false }
  );
  addAnimationsStyle();
});

function addAnimationsStyle() {
  linksRefs.value.forEach((link, index) => {
    link.$el.style.animation = headerAnimation.links[index] || "";
  });
  buttonRef.value.$el.style.animation = headerAnimation.button;
}
</script>

<style scoped>
header {
  user-select: none;
  z-index: 100;
  backdrop-filter: blur(10px);
  box-sizing: border-box;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0 40px;
  height: var(--nav-scroll-height);
  transform: translateY(0px);
  background-color: rgba(10, 25, 47, 0.85);
  box-shadow: 0 10px 30px -10px var(--navy-shadow);
  transition: transform 0.2s ease-in-out;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__logo {
  width: 42px;
  height: 42px;
}

.header__nav {
  font-size: 13px;
  font-family: "Roboto Mono", monospace;
  display: flex;
  align-items: center;
}
.header__nav__link {
  opacity: 0;
}

.mobile__menu li {
  cursor: pointer;
  padding: 10px;
  margin: 0 5px;
  color: var(--lightest-slate);
  animation-name: fadeIn;
  animation-fill-mode: forwards;
}
.mobile__menu li span {
  color: var(--green);
  margin-right: 5px;
}
.mobile__menu li:hover {
  color: var(--green);
}

.hide {
  transform: translateY(-100%);
}

.off__shadow {
  box-shadow: none;
}
.blur {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  z-index: 100;
}
.mobile__header__menu {
  z-index: 200;
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--light-navy);
  box-shadow: -10px 0px 30px -15px var(--navy-shadow);
  transform: translateX(100vw);
  transition: transform 0.2s ease-in-out;
}
.fade-in {
  transform: translateX(0);
}
.mobile__header__menu li {
  margin: 10px 0;
  font-size: 25px;
}
.mobile__header__menu .header__nav__btn {
  padding: 15px 40px;
  font-size: 20px;
  margin-top: 60px;
}

@media (max-width: 700px) {
  header {
    padding: 0 20px;
  }
  .header__nav {
    display: none;
  }
}
@media (min-width: 700px) {
  .burger {
    display: none;
  }
}
</style>
