import axios from "axios";

export default axios.create({
  // the local host
  baseURL: "http://localhost:8000/api/",

  //   keps changing
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});
