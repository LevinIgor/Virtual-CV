<template>
  <main>
    <VHeader />
    <article v-if="timer">
      <VWelcome />
      <VAbout />
      <VWork />
      <VSomeBuild />
      <VContact />
      <VFooter />
    </article>
    <VAsideLeft />
    <VAsideRight />
  </main>
</template>
<script setup>
import VHeader from "@/components/v-header.vue";
import VWelcome from "@/components/v-welcome.vue";
import VAbout from "@/components/v-about.vue";
import VWork from "@/components/v-work.vue";
import VSomeBuild from "@/components/v-some-build.vue";
import VContact from "@/components/v-contact.vue";
import VFooter from "@/components/v-footer.vue";
import VAsideLeft from "@/components/v-aside-left.vue";
import VAsideRight from "@/components/v-aside-right.vue";

import { ref } from "vue";
const timer = ref(false);

setTimeout(() => {
  timer.value = true;
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
    padding: 0px 30px;
  }
}
</style>
