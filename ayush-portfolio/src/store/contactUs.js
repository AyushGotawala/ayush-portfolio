import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/auth/SignUp`;

export const contactUs = createAsyncThunk(
  "portfolio/contactUs",
  async (userData, { rejectWithValue }) => {
    try {
      delete userData.confirmPassword;
      const response = await axios.post(API_URL, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "contact Failed.."
      );
    }
  }
);

const contactUsSlice = createSlice({
  name: "contactus",
  initialState: {
    loading: false,
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(contactUs.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(contactUs.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.message = action.payload.message;
      })
      .addCase(contactUs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const contactUsReducer = contactUsSlice.reducer;
