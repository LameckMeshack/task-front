import { createStore } from "vuex";

const store = createStore({
  state: {
    sideBarOpen: false,
    isAuthenticated: false,
    user: null,
  },
  getters: {
    sideBarOpen: (state) => {
      return state.sideBarOpen;
    },
  },
  mutations: {
    toggleSidebar(state) {
      state.sideBarOpen = !state.sideBarOpen;
    },
    login(state, user) {
      state.isAuthenticated = true;
      state.user = user;
    },
    register(state, user) {
      state.isAuthenticated = true;
      state.user = user;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  actions: {
    toggleSidebar(context) {
      context.commit("toggleSidebar");
    },
    login({ commit }, user) {
      commit("login", user);
    },
    register({ commit }, user) {
      commit("register", user);
    },

    logout({ commit }) {
      commit("logout");
    },
  },
});

export default store;
