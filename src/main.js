import "@/assets/scss/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const head = createHead();

app.use(head);
app.use(PrimeVue);
app.use(createPinia());
app.use(router);

app.mount("#app");
