import router from "@router";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/bootstrap.min.css";
import "./assets/fonts/font.css";
import "./assets/main.css";
import "./assets/styles.scss";
import {
  formatNumber,
  getColorRank,
  getColorTextPercent,
  getColorProgressBar,
  getColorRankDM,
} from "@utils/helper";
const app = createApp(App);
import store from "@store";

app.use(router);
app.mount("#app");
app.use(store);
app.mixin({
  methods: {
    sleep(milliseconds = 1000) {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    },
    formatNumber,
    getColorRank,
    getColorTextPercent,
    getColorProgressBar,
    getColorRankDM,
  },
});
