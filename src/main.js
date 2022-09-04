import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vIntersection from "./directives/vIntersection";
import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.directive("intersection", vIntersection);
app.mount("#app");
