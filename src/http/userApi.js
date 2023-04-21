import { createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async (params) => {
    const { data } = await $host.post("api/user/login", params);
    return { id: jwt_decode(data.token), token: data.token };
  }
);

export const selectIsAuth = (state) => Boolean(state.auth.data);

export const fetchCheck = createAsyncThunk("auth/fetchCheck", async () => {
  const { data } = await $authHost.get("api/user/auth");
  const decoded = jwt_decode(data.token);
  console.log(decoded);
  if ("partnerId" in decoded)
    return {
      admin: [{ id: decoded.id }, { partnerId: decoded.partnerId }],
      token: data.token,
    };
  else {
    console.log("here");
    return { id: decoded, token: data.token };
  }
});

export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params) => {
    try {
      const response = await $host.post("api/user/create", params);
      return {
        id: jwt_decode(response.data.token),
        token: response.data.token,
      };
    } catch (err) {
      console.log(err.response.data);
      const error = err.response.data;
      return error;
    }
  }
);
