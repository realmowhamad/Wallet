import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getAsyncCategories = createAsyncThunk(
    'products/getProducts',
    async (_, { rejectWithValue }) => {
        try {
            const Response = await axios.get("http://localhost:8000/Category")
            return Response.data
        } catch (error) {
            return rejectWithValue(err.response.data)
        }
    }
)



const initialState = {
    category: [],
    isLoading: true,
    erorr: null
}


const categorySlice = createSlice({
    name: "category",
    initialState,
    extraReducers: {
        [getAsyncCategories.pending]: (state, action) => {
            return { ...state, isLoading: true, erorr: null, category: [] }
        },
        [getAsyncCategories.rejected]: (state, action) => {
            return { ...state, isLoading: false, erorr: action.erorr, category: [] }
        },
        [getAsyncCategories.fulfilled]: (state, action) => {
            return { ...state, isLoading: false, erorr: null, category: action.payload }
        },
    }
})

export default categorySlice.reducer