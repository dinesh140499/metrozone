import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const MetroPost = createAsyncThunk('/metropost', async (data) => {
    try {
        const res = await axios.post('https://metro.hoogaaa.com/metro/api/v1/action/stationlist/', {
            metroName: data
        })
        return res
    } catch (error) {
        console.log("😢", error)
        return error
    }
})

const MetroPostSlice = createSlice({
    name: "metropost",
    initialState: {
        metroPostData: [],
        source:"",
        destination:"",
        loading: false,
        error: false,
    },
    reducers:{
        metroDirection:(state,action)=>{
            state.source=action.payload.from
            state.destination=action.payload.to
        }
    },
    extraReducers: {
        [MetroPost.pending]: (state) => {
            state.loading = true
        },
        [MetroPost.fulfilled]: (state, action) => {
            state.loading = false;
            state.metroPostData = action.payload.data
            state.error = false
        },
        [MetroPost.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
    }
})

export default MetroPostSlice.reducer
export const {metroDirection}=MetroPostSlice.actions