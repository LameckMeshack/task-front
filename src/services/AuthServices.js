import { http } from "./http-common";

// login
const login = (loginData) => {
  return http.post("/login", loginData);
};

// logout
const logout = () => {
  return http.post("/logout");
};

// register
const register = (regData) => {
  return http.post("/register", regData);
};

// get user
const getUser = () => {
  return http.get("/user");
};

const AuthServices = {
  login,
  register,
  getUser,
  logout,
};
export default AuthServices;
