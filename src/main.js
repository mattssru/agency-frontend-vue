import router from "@router";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/bootstrap.min.css";
import "./assets/fonts/font.css";
import "./assets/main.css";
import "./assets/styles.scss";

const app = createApp(App);
app.use(router);
app.mount("#app");
