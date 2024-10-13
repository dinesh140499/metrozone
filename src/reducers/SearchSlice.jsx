import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const SearchApi = createAsyncThunk("/metrosearch", async (metroData) => {
  const { from, to, metro } = metroData;
  // console.log("this metro value is print from search api😁",metro)
  try {
    const res = await axios.get(
      `https://metro.hoogaaa.com/metro/api/v1/action/station/routes/?source=${from}&destination=${to}&metroName=${metro}`
    );
    return res;
  } catch (error) {
    console.log("😢", error);
    return error;
  }
});

const SearchApiSlice = createSlice({
  name: "metrosearchlist",
  initialState: {
    searchData: [],
    searchLoader: false,
    error: false,
  },
  reducers: {
    metroRealData: (state, action) => {
      state.searchLoader = false;
      state.searchData = action.payload;
      state.error = false;
    },
  },
  extraReducers: {
    [SearchApi.pending]: (state) => {
      state.searchLoader = true;
    },
    [SearchApi.fulfilled]: (state, action) => {
      state.searchLoader = false;
      state.searchData = action.payload.data;
      state.error = false;
    },
    [SearchApi.rejected]: (state, action) => {
      state.searchLoader = false;
      state.error = action.payload;
    },
  },
});

export const { metroRealData } = SearchApiSlice.actions;
export default SearchApiSlice.reducer;
