import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetUrl } from "@/api/apiMethods";

// ================= GET FAQ =================

export const getFaqs = createAsyncThunk("cms/getFaqs", async (_, thunkAPI) => {
  try {
    const response = await GetUrl("/api/faqs");
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const cmsSlice = createSlice({
  name: "cms",
  initialState: {
    faqs: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(getFaqs.pending, (state) => {
        state.loading = true;
      })

      .addCase(getFaqs.fulfilled, (state, action) => {
        console.log("FAQ RESPONSE:", action.payload);
        state.loading = false;
        state.faqs = action.payload?.data || [];
      })

      .addCase(getFaqs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cmsSlice.reducer;
