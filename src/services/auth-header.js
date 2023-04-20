export default function authHeader() {
  const token = localStorage.getItem("token");

  if (token) {
    // console.log(token, "token");
    return { Authorization: "Bearer " + token };
  } else {
    // console.log("no token");
    return {};
  }
}

// export default function authHeader() {
//   const token = localStorage.getItem("token");

//   if (token) {
//     try {
//       const parsedToken = JSON.parse(token);
//       console.log(token)
//       return { Authorization: "Bearer " + parsedToken };
//     } catch (e) {
//       console.error("Error parsing token:", e);
//     }
//   }

//   return {};
// }
