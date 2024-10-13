import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const MetroList = createAsyncThunk('/metrolist', async () => {
    try {
        const res = await axios.get('https://metro.hoogaaa.com/metro/api/v1/action/metrolist/')
        return res
    } catch (error) {
        console.log("😢", error)
        return error
    }
})

const MetroListSlice = createSlice({
    name: "metrolist",
    initialState: {
        metroData: [],
        loading: false,
        error: false,
        selectMetro: ""
    },
    reducers: {
        metroName: (state, action) => {
            state.selectMetro = action.payload
        }
    },
    extraReducers: {
        [MetroList.pending]: (state) => {
            state.loading = true
        },
        [MetroList.fulfilled]: (state, action) => {
            state.loading = false;
            state.metroData = action.payload.data
            state.error = false
        },
        [MetroList.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
    }
})

export default MetroListSlice.reducer
export const { metroName } = MetroListSlice.actions