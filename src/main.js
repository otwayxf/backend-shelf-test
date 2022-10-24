import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "Plugins/elementUI"
import "Utils/request"

createApp(App).use(store).use(router).mount("#app");
