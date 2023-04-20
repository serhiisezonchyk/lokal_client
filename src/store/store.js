import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/posts";
import { postCategoriesReducer } from "./slices/postCategories";
import { authReducer } from "./slices/auth";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    postCategories: postCategoriesReducer,
    auth: authReducer,
  },
});

export default store;
