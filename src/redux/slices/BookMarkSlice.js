import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetUrl, PostUrl } from "@/api/apiMethods";

// ✅ GET - Fetch all bookmarks
export const fetchBookmarks = createAsyncThunk(
  "bookmarks/fetchBookmarks",
  async (_, { rejectWithValue }) => {
    try {
      const data = await GetUrl("api/bookmarks");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// ✅ POST - Toggle bookmark (add/remove)
export const toggleBookmark = createAsyncThunk(
  "bookmarks/toggleBookmark",
  async (bookmarkData, { rejectWithValue }) => {
    try {
      const data = await PostUrl("api/bookmarks", bookmarkData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState: {
    bookmarks: [],
    count: 0,
    loading: false,
    error: null,
    toggleLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Bookmarks
      .addCase(fetchBookmarks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBookmarks.fulfilled, (state, action) => {
        state.loading = false;
        state.bookmarks = action.payload.data || [];
        state.count = action.payload.count || 0;
      })
      .addCase(fetchBookmarks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })

      // Toggle Bookmark
      .addCase(toggleBookmark.pending, (state) => {
        state.toggleLoading = true;
      })
      .addCase(toggleBookmark.fulfilled, (state, action) => {
        state.toggleLoading = false;
      })
      .addCase(toggleBookmark.rejected, (state, action) => {
        state.toggleLoading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default bookmarkSlice.reducer;