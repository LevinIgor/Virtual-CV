<template>
  <main>
    <VHeader />
    <VWelcome />
    <VAbout />
    <VWork />
    <VSomeBuild />
    <VContact />
    <VFooter />
    <VAsideLeft v-if="isComputerDevice" />
    <VAsideRight v-if="isComputerDevice" />
  </main>
</template>
<script setup>
import { defineAsyncComponent, computed } from "vue";

const VHeader = defineAsyncComponent(() =>
  import("@/components/sections/v-header.vue")
);
const VWelcome = defineAsyncComponent(() =>
  import("@/components/sections/v-welcome.vue")
);
const VAbout = defineAsyncComponent(() =>
  import("@/components/sections/v-about.vue")
);
const VWork = defineAsyncComponent(() =>
  import("@/components/sections/v-work.vue")
);
const VSomeBuild = defineAsyncComponent(() =>
  import("@/components/sections/v-some-build.vue")
);
const VContact = defineAsyncComponent(() =>
  import("@/components/sections/v-contact.vue")
);
const VFooter = defineAsyncComponent(() =>
  import("@/components/sections/v-footer.vue")
);
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
