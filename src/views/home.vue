<template>
  <main>
    <VHeader />
    <article v-if="isTimerDone">
      <VWelcome />
      <VAbout />
      <VWork />
      <VSomeBuild />
      <VContact />
      <VFooter />
    </article>
    <VAsideLeft v-if="isComputerDevice"/>
    <VAsideRight v-if="isComputerDevice"/>
  </main>
</template>
<script setup>
import { ref, defineAsyncComponent ,computed,watch} from "vue";

const VHeader = defineAsyncComponent(() => import("@/components/v-header.vue"));
const VWelcome = defineAsyncComponent(() => import("@/components/v-welcome.vue"));
const VAbout = defineAsyncComponent(() => import("@/components/v-about.vue"));
const VWork = defineAsyncComponent(() => import("@/components/v-work.vue"));
const VSomeBuild = defineAsyncComponent(() => import("@/components/v-some-build.vue"));
const VContact = defineAsyncComponent(() => import("@/components/v-contact.vue"));
const VFooter = defineAsyncComponent(() => import("@/components/v-footer.vue"));
const VAsideLeft = defineAsyncComponent(() => import("@/components/v-aside-left.vue"));
const VAsideRight = defineAsyncComponent(() => import("@/components/v-aside-right.vue"));

const isTimerDone = ref(false);
const isComputerDevice = computed(()=>{ return window.innerWidth > 800})


setTimeout(() => {
  isTimerDone.value = true;
}, 1000);
</script>

<style scoped>
main {
  box-sizing: border-box;
  width: var(--main-width);
  margin: 0 auto;
  padding: 0px 150px;
  min-height: 100%;
  overflow: hidden;
}
.scroll {
  overflow: hidden;
}
@media (max-width: 800px) {
  main {
    padding: 0px 100px;
  }
}
@media (max-width: 500px) {
  main {
    padding: 0px 15px;
  }
}
</style>
