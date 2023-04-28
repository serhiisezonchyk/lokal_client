import { createSlice } from "@reduxjs/toolkit";
import { fetchPostCategories } from "../../http/postCategoriesApi";


const initialState = {
    postCategories:{
        items:[],
        status: 'loading',
    },
}

const postCategoriesSlice = createSlice({
    name: 'postCategories',
    initialState,
    reducer: {

    },
    extraReducers: (builder)=>{
        builder.addCase(fetchPostCategories.pending,(state)=>{
            state.postCategories.items = [];
            state.postCategories.status = 'loading'
        })
        .addCase(fetchPostCategories.fulfilled,(state, action)=>{
            state.postCategories.items = action.payload;
            state.postCategories.status = 'loaded'
        })
        .addCase(fetchPostCategories.rejected, (state)=>{
            state.postCategories.items = [];
            state.postCategories.status = 'error'
        });
    },
})

export const postCategoriesReducer = postCategoriesSlice.reducer;