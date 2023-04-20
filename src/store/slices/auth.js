import { createSlice } from "@reduxjs/toolkit";
import { fetchCheck, fetchLogin, fetchRegister } from "../../http/userApi";

const initialState = {
  data: null,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: {
    [fetchLogin.pending]: (state) => {
      state.data = null;
      state.status = "loading";
    },
    [fetchLogin.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    },
    [fetchLogin.rejected]: (state) => {
      state.data = null;
      state.status = "error";
    },
    [fetchCheck.pending]: (state) => {
      state.data = null;
      state.status = "loading";
    },
    [fetchCheck.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    },
    [fetchCheck.rejected]: (state) => {
      state.data = null;
      state.status = "error";
    },
    [fetchRegister.pending]: (state) => {
      state.data = null;
      state.status = "loading";
    },
    [fetchRegister.fulfilled]: (state, action) => {
      if (action.payload?.errors || action.payload?.message) {
        state.data = null;
        state.status = "error";
      } else {
        state.data = action.payload;
        state.status = "loaded";
      }
    },
    [fetchRegister.rejected]: (state) => {
      state.data = null;
      state.status = "error";
    },
  },
});

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
