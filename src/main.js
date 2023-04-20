import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";
import store from "./store";
import common from "./common";

createApp(App).use(store).use(router).mixin(common).mount("#app");
