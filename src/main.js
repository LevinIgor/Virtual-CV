import { createApp } from "vue";
import App from "./App.vue";

import vIntersection from "./directives/vIntersection";
import "./assets/main.css";

const app = createApp(App);

app.directive("intersection", vIntersection);
app.mount("#app");
