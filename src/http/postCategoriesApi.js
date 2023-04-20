import { $authHost, $host } from "./index";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPostCategories = createAsyncThunk("postCategory/fetchPostCategories", async () => {
  const { data } = await $host.get("api/postCategory");
  return data;
});