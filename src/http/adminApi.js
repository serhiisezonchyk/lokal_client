import { createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const fetchLoginAdmin = createAsyncThunk(
  "auth/fetchLoginAdmin",
  async (params) => {
    const { data } = await $host.post("api/admin/login", params);
    const decoded = jwt_decode(data.token);
    return {admin:[{id:decoded.id},{partnerId:decoded.partnerId}], token:data.token};
  }
);

export const selectIsAuth = (state) => Boolean(state.auth.data);


export const fetchRegisterAdmin = createAsyncThunk(
  "auth/fetchRegisterAdmin",
  async (params) => {
    try {
      const response = await $host.post("api/admin/create", params);
      return {admin:[{id:response.data.id},{partnerId:response.data.partnerId}], token:response.data.token};
    } catch (err) {
      console.log(err.response.data);
      const error = err.response.data;
      return error;
    }
  }
);
