import { $authHost, $host } from "./index";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createPost = async (post) => {
  const { data } = await $authHost.post("api/post", post);
  return data;
};

export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  const { data } = await $host.get("api/post");
  return data;
});


export const fetchOnePost = async (id) => {
  const { data } = await $host.get("api/post/" + id);
  return data;
};

export const updatePost = async (id, post) => {
  const { data } = await $authHost.put("api/post/" + id, post);
  return data;
};

export const deletePost = async (id) => {
  const { data } = await $authHost.delete("api/post/" + id);
  return data;
};
