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

const TaskService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};

export default TaskService;
