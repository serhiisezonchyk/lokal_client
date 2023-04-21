import { createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const fetchLoginAdmin = createAsyncThunk(
  "auth/fetchLoginAdmin",
  async (params) => {
    const { data } = await $host.post("api/admin/login", params);
    const decoded = jwt_decode(data.token);
    return {
      admin: { id: decoded.id, partnerId: decoded.partnerId },
      token: data.token,
    };
  }
);

export const selectIsAdmin = (state) => {
  try {
    return Boolean("admin" in state.auth.data);
  } catch (error) {
    return false;
  }
};

export const selectAdminRole = (state) => {
  try {
    if(Boolean("admin" in state.auth.data)){
      return state.auth.data.admin.partnerId;
    }else return false;
  } catch (error) {
    return false;
  }
};


export const fetchRegisterAdmin = createAsyncThunk(
  "auth/fetchRegisterAdmin",
  async (params) => {
    try {
      const response = await $host.post("api/admin/create", params);
      return {
        admin: 
          { id: response.data.id, partnerId: response.data.partnerId },
        token: response.data.token,
      };
    } catch (err) {
      console.log(err.response.data);
      const error = err.response.data;
      return error;
    }
  }
);
