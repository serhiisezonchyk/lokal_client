import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../../http/postApi";

const initialState = {
    posts:{
        items:[],
        status: 'loading',
    },
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducer: {

    },
    extraReducers: {
        [fetchPosts.pending]: (state) =>{
            state.posts.items = [];
            state.posts.status = 'loading'
        },
        [fetchPosts.fulfilled]: (state, action) =>{
            state.posts.items = action.payload;
            state.posts.status = 'loaded'
        },
        [fetchPosts.rejected]: (state) =>{
            state.posts.items = [];
            state.posts.status = 'error'
        },
    }
})

export const postsReducer = postSlice.reducer;