import { createStore } from "vuex";
import { loader } from "./modules/loader";
export default new createStore({
  modules: {
    loader,
  },
});
