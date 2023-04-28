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
    extraReducers: (builder)=> {
        builder.addCase(fetchPosts.pending,(state)=>{
            state.posts.items = [];
            state.posts.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled,(state,action)=>{
            state.posts.items = action.payload;
            state.posts.status = 'loaded'
        })
        .addCase(fetchPosts.rejected, (state)=>{
            state.posts.items = [];
            state.posts.status = 'error'
        });
    },
})

export const postsReducer = postSlice.reducer;