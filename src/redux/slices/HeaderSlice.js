import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetUrl } from "@/api/apiMethods";

// ✅ GET - Global Search
export const globalSearch = createAsyncThunk(
  "header/globalSearch",
  async (query, { rejectWithValue }) => {
    try {
      const data = await GetUrl(`api/global-search?search=${query}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const headerSlice = createSlice({
  name: "header",
  initialState: {
    searchResults: {
      ideas: [],
      blogs: [],
      posts: [],
      caseStudies: [],
    },
    searchLoading: false,
    searchError: null,
    searchQuery: "",
  },
reducers: {
  clearSearch: (state) => {
    // ✅ Sirf results clear karo, query mat clear karo
    state.searchResults = { ideas: [], blogs: [], posts: [], caseStudies: [] };
    state.searchError = null;
  },
  clearAll: (state) => {
    // ✅ Modal band hone par sab clear karo
    state.searchResults = { ideas: [], blogs: [], posts: [], caseStudies: [] };
    // state.searchQuery = "";
    state.searchError = null;
  },
  setSearchQuery: (state, action) => {
    state.searchQuery = action.payload;
  },
},
  extraReducers: (builder) => {
    builder
      .addCase(globalSearch.pending, (state) => {
        state.searchLoading = true;
        state.searchError = null;
      })
      .addCase(globalSearch.fulfilled, (state, action) => {
        state.searchLoading = false;
        state.searchResults = action.payload.data || {
          ideas: [],
          blogs: [],
          posts: [],
          caseStudies: [],
        };
      })
      .addCase(globalSearch.rejected, (state, action) => {
        state.searchLoading = false;
        state.searchError = action.payload || "Search failed";
      });
  },
});

export const { clearSearch, setSearchQuery,clearAll  } = headerSlice.actions;
export default headerSlice.reducer;