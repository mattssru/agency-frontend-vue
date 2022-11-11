import data from "./data.json";

export default {
  namespaced: true,
  state: {
    ...data,
  },
  mutations: {},
  actions: {},
  getters: {
    fullName: function (state) {
      return `${state.firstname} ${state.lastname}`;
    },
  },
};
