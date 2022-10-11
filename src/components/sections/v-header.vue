<template>
  <header :class="{ hide: isHide, off__shadow: isBoxShadow }">
    <nav>
      <LogoIcon class="header__logo" />

      <div class="header__nav">
        <div
          class="header__nav__link"
          v-for="(item, index) in menu"
          :key="item"
          @click="onMenuClick(item)"
        >
          <span>0{{ index + 1 }}.</span> {{ item }}
        </div>
        <a
          href="https://drive.google.com/file/d/1tXaUzx0NZ1roew3hPHaYk0JcOU48VWtG/view?usp=sharing"
          class="header__nav__btn"
          target="_blank"
          >Resume</a
        >
      </div>

      <VBurgerMenu
        class="burger"
        @onClick="showMobileMenu()"
        :isHide="isMobileMenu"
      />
    </nav>
    <div class="blur" v-if="isMobileMenu" @click="showMobileMenu()" />
    <aside class="mobile__header__menu" :class="{ 'fade-in': isMobileMenu }">
      <ul class="mobile__menu">
        <li
          v-for="(item, index) in menu"
          :key="item"
          @click="onMenuClick(item)"
        >
          <span>0{{ index + 1 }}</span
          >. {{ item }}
        </li>
      </ul>
      <div class="header__nav__btn">Resume</div>
    </aside>
  </header>
</template>
<script setup>
import { onMounted, ref } from "vue";
import VBurgerMenu from "@/components/UI/v-burger-menu.vue";
import LogoIcon from "@/components/icons/logo.vue";

const isHide = ref(false);
const isMobileMenu = ref(false);
const isBoxShadow = ref(false);
const menu = ref(["About", "Experience", "Work", "Contact"]);

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
});
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
  width: 100%;
  height: 100%;
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

.header__nav__link,
.mobile__menu li {
  cursor: pointer;
  padding: 10px;
  margin: 0 5px;
  color: var(--lightest-slate);
  opacity: 0;
  animation-name: fadeIn;
  animation-fill-mode: forwards;
}
.header__nav__link span,
.mobile__menu li span {
  color: var(--green);
  margin-right: 5px;
}
.header__nav__link:nth-child(1) {
  animation-duration: 1s;
}
.header__nav__link:nth-child(2) {
  animation-duration: 1.5s;
}
.header__nav__link:nth-child(3) {
  animation-duration: 2s;
}
.header__nav__link:nth-child(4) {
  animation-duration: 2.5s;
}
.header__nav__link:nth-child(5) {
  animation-duration: 3s;
}
.mobile__menu li:hover {
  color: var(--green);
}
.header__nav__btn {
  color: var(--green);
  border: 1px solid var(--green);
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  animation-name: fadeIn;
  animation-duration: 3.5s;
  transition: all 0.2s ease-in-out;
}
.header__nav__btn:hover {
  background-color: var(--green-tint);
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
.mobile__header__menu li {
  margin: 10px 0;
  font-size: 25px;
}
.mobile__header__menu .header__nav__btn {
  padding: 15px 40px;
  font-size: 20px;
  margin-top: 60px;
}
.fade-in {
  transform: translateX(0vw);
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
