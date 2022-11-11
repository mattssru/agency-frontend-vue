import { createStore } from "vuex";
import userModules from "./modules/user.modules";
export default createStore({
  modules: {
    user: userModules,
  },
});
