import http from "../http-common";
import authHeader from "./auth-header";
// login
const login = async (loginData) => {
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
  return http.get("/user", { headers: authHeader() });
};

const AuthServices = {
  login,
  register,
  getUser,
  logout,
};
export default AuthServices;
