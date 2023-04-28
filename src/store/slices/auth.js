import { createSlice } from "@reduxjs/toolkit";
import { fetchCheck, fetchLogin, fetchRegister } from "../../http/userApi";
import { fetchLoginAdmin, fetchRegisterAdmin } from "../../http/adminApi";

const initialState = {
  data: null,
  status: "loading",
};

const handleAsyncRequest = (state) => {
  state.data = null;
  state.status = "loading";
};

const handleAsyncSuccess = (state, action) => {
  state.data = action.payload;
  state.status = "loaded";
};

const handleAsyncError = (state) => {
  state.data = null;
  state.status = "error";
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, handleAsyncRequest)
      .addCase(fetchLogin.fulfilled, handleAsyncSuccess)
      .addCase(fetchLogin.rejected, handleAsyncError)
      .addCase(fetchCheck.pending, handleAsyncRequest)
      .addCase(fetchCheck.fulfilled, handleAsyncSuccess)
      .addCase(fetchCheck.rejected, handleAsyncError)
      .addCase(fetchRegister.pending, handleAsyncRequest)
      .addCase(fetchRegister.fulfilled, (state, action) => {
        if (action.payload?.errors || action.payload?.message) {
          handleAsyncError(state);
        } else {
          handleAsyncSuccess(state, action);
        }
      })
      .addCase(fetchRegister.rejected, handleAsyncError)
      .addCase(fetchLoginAdmin.pending, handleAsyncRequest)
      .addCase(fetchLoginAdmin.fulfilled, handleAsyncSuccess)
      .addCase(fetchLoginAdmin.rejected, handleAsyncError)
      .addCase(fetchRegisterAdmin.pending, handleAsyncRequest)
      .addCase(fetchRegisterAdmin.fulfilled, (state, action) => {
        if (action.payload?.errors || action.payload?.message) {
          handleAsyncError(state);
        } else {
          handleAsyncSuccess(state, action);
        }
      })
      .addCase(fetchRegisterAdmin.rejected, handleAsyncError);
  },
});

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;