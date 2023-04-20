import { createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async (params) => {
    const { data } = await $host.post("api/user/login", params);
    return data;
  }
);

export const selectIsAuth = (state) => Boolean(state.auth.data);

export const fetchCheck = createAsyncThunk("auth/fetchCheck", async () => {
  const { data } = await $authHost.get("api/user/auth");
  return data;
});

export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params) => {
    try {
      const response = await $host.post("api/user/create", params);
      return response.data;
    } catch (err) {
      console.log(err.response.data);
      const error = err.response.data;
      return error;
      // throw new Error(error);
    }
  }
);

// export const registration = async (email, password) => {
//   const { data } = await $host.post("api/user/registration", {
//     email,
//     password,
//     role: "ADMIN",
//   });
//   localStorage.setItem("token", data.token);
//   return jwt_decode(data.token);
// };

// export const login = async (email, password) => {
//   const { data } = await $host.post("api/user/login", { email, password });
//   localStorage.setItem("token", data.token);
//   return jwt_decode(data.token);
// };

// export const check = async () => {
//   const { data } = await $authHost.get("api/user/auth");
//   localStorage.setItem("token", data.token);
//   return jwt_decode(data.token);
// };
