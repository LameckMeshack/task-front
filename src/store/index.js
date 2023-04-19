import { createStore } from "vuex";
import AuthServices from "@/services/auth.services";

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
    async login({ commit }, loginData) {
      try {
        // Make an API call to authenticate the user
        const response = await AuthServices.login(loginData);
        const user = response.data;

        // Update the state with the authenticated user
        commit("login", user);
      } catch (error) {
        // Handle login error
        console.error(error);
      }
    },
    async register({ commit }, regData) {
      try {
        // Make an API call to register the user
        const response = await AuthServices.register(regData);
        const user = response.data;

        // Update the state with the authenticated user
        commit("register", user);
      } catch (error) {
        // Handle register error
        console.error(error);
      }
    },

    async logout({ commit }) {
      try {
        // Make an API call to logout the user
        await AuthServices.logout();

        // Update the state with the authenticated user
        commit("logout");
      } catch (error) {
        // Handle logout error
        console.error(error);
      }
    },
  },
});

export default store;
