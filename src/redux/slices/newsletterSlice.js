import { PostUrl } from "@/api/apiMethods";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Subscribe
export const subscribeNewsletter = createAsyncThunk(
  "newsletter/subscribe",
  async (data, thunkAPI) => {
    try {
      const response = await PostUrl(
        "/api/newsletter/subscribe",
        data
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Unsubscribe
export const unsubscribeNewsletter = createAsyncThunk(
  "newsletter/unsubscribe",
  async (data, thunkAPI) => {
    try {
      const response = await PostUrl(
        "/api/newsletter/unsubscribe",
        data
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const newsletterSlice = createSlice({
  name: "newsletter",
  initialState: {
    loading: false,
    success: false,
    error: null,
    message: "",
  },

  reducers: {
    resetNewsletterState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder

      // Subscribe
      .addCase(subscribeNewsletter.pending, (state) => {
        state.loading = true;
      })
      .addCase(subscribeNewsletter.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload?.message;
      })
      .addCase(subscribeNewsletter.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "Something went wrong";
      })

      // Unsubscribe
      .addCase(unsubscribeNewsletter.pending, (state) => {
        state.loading = true;
      })
      .addCase(unsubscribeNewsletter.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload?.message;
      })
      .addCase(unsubscribeNewsletter.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "Something went wrong";
      });
  },
});

export const { resetNewsletterState } =
  newsletterSlice.actions;

export default newsletterSlice.reducer;