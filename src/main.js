import { createApp } from "vue";
import App from "./App.vue";
import "./assets/fonts/font.css";
import "./assets/main.css";
import "./assets/styles.scss";
import router from "@router";

const app = createApp(App);
app.use(router);
app.mount("#app");
