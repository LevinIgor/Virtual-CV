<template>
  <main>
    <VHeader />
    <VWelcome />
    <VAbout />
    <VExperience />
    <VSomeBuild />
    <VContact />
    <VFooter />
    <VAsideLeft v-if="isComputerDevice" />
    <VAsideRight v-if="isComputerDevice" />
  </main>
</template>
<script setup>
import { defineAsyncComponent, computed } from "vue";
import VHeader from "@/components/sections/v-header.vue";
import VWelcome from "@/components/sections/v-welcome.vue";
import VAbout from "@/components/sections/v-about.vue";
import VExperience from "@/components/sections/v-experience.vue";
import VSomeBuild from "@/components/sections/v-some-build.vue";
import VContact from "@/components/sections/v-contact.vue";
import VFooter from "@/components/sections/v-footer.vue";

const VAsideLeft = defineAsyncComponent(() =>
  import("@/components/asides/v-aside-left.vue")
);
const VAsideRight = defineAsyncComponent(() =>
  import("@/components/asides/v-aside-right.vue")
);

const isComputerDevice = computed(() => {
  return window.innerWidth > 800;
});
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
