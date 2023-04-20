import TaskService from "@/services/task.service";
import { createStore } from "vuex";

const store = createStore({
  state: {
    sideBarOpen: false,
    isAuthenticated: false,
    user: null,
    assignedTasks: null,
    unAssignedTasks: null,
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
    //task
    SET_ASSIGNED_TASK(state, tasks) {
      state.assignedTasks = [...tasks];
    },
    SET_UNASSIGNED_TASK(state, tasks) {
      state.unAssignedTasks = [...tasks];
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

    async getAssignedTasks({ commit }) {
      try {
        const response = await TaskService.getAssignedTasks();
        const tasks = response.data.data;
        commit("SET_ASSIGNED_TASK", tasks);
        console.log(this.state.assignedTasks, "Commit succesfull");
      } catch (error) {
        console.error(error);
      }
    },

    async getUnAssignedTasks({ commit }) {
      try {
        const response = await TaskService.getAll();
        const tasks = response.data.data;
        commit("SET_UNASSIGNED_TASK", tasks);
        console.log(this.state.unAssignedTasks, "Commit succesfull");
      } catch (error) {
        console.error(error);
      }
    },
  },

  getters: {
    assignedTasks(state) {
      return state.assignedTasks;
    },
    unAssignedTasks(state) {
      return state.unAssignedTasks;
    },
    sideBarOpen: (state) => {
      return state.sideBarOpen;
    },
  },
});

export default store;
