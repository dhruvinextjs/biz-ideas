import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetUrl } from "@/api/apiMethods";

// ✅ GET SOCIAL LINKS API
export const getSocialLinks = createAsyncThunk(
  "profile/getSocialLinks",
  async (_, thunkAPI) => {
    try {
      const res = await GetUrl("/api/auth/get-social-links");
      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    socialLinks: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSocialLinks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSocialLinks.fulfilled, (state, action) => {
        state.loading = false;

        console.log("SOCIAL API:", action.payload);

        // ⚠️ important: response structure check karo
        state.socialLinks = action.payload?.data || [];
      })
      .addCase(getSocialLinks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default profileSlice.reducer;