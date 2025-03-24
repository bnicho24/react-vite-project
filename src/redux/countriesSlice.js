import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountries = createAsyncThunk('country/fetchCountries', async (country) => {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
    return response.data;
});

export const countrySlice = createSlice({
    name: 'country',
    initialState: {
        country: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCountries.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const countryData = action.payload;
        // state.country = [countryData[0], ...state.country];
            state.country = countryData[0]
            // console.log("action.payload",action.payload )

        })
        .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        });
    }
});

export default countrySlice.reducer;

