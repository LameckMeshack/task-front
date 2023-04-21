import http from "../http-common";
import authHeader from "./auth-header";

const getAll = () => {
  return http.get("/tasks", { headers: authHeader() });
};

const get = (id) => {
  return http.get(`/tasks/${id}`, { headers: authHeader() });
};

const create = (data) => {
  return http.post("/tasks", data, { headers: authHeader() });
};

const update = (id, data) => {
  return http.put(`/tasks/${id}`, data, { headers: authHeader() });
};

const remove = (id) => {
  return http.delete(`/tasks/${id}`, { headers: authHeader() });
};

const removeAll = () => {
  return http.delete(`/tasks`, { headers: authHeader() });
};

const getAssignedTasks = () => {
  return http.get("/usertasks", { headers: authHeader() });
};

const updateAssignedTasks = (id, data) => {
  return http.put(`/usertasks/${id}`, data, { headers: authHeader() });
};
//create user task
const createUserTask = (data) => {
  return http.post("/usertasks", data, { headers: authHeader() });
};

//delete
const deleteAssignedTasks = (id) => {
  return http.delete(`/usertasks/${id}`, { headers: authHeader() });
};


const TaskService = {
  getAssignedTasks,
  updateAssignedTasks,
  deleteAssignedTasks,
  createUserTask,
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};

export default TaskService;
