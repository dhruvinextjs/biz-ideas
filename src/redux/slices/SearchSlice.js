// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Async Thunk for API call
// export const fetchSearchResults = createAsyncThunk(
//   "search/fetchSearchResults",
//   async (query, { rejectWithValue }) => {
//     try {
//       // API call with params (?query=your_search_term)
//       const response = await axios.get(`http://192.168.29.108:5007/api/search`, {
//         params: { 
//     q: query 
//   },
//       });
//       return response.data; // Postman response data yahan return hoga
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// const searchSlice = createSlice({
//   name: "search",
//   initialState: {
//     loading: false,
//     query: "",
//     totalResults: 0,
//     ideas: [],
//     caseStudies: [],
//     posts: [],
//     blogs: [],
//     error: null,
//   },
//   reducers: {
//     // Agar future me state clear karni ho toh
//     clearSearch: (state) => {
//       state.query = "";
//       state.totalResults = 0;
//       state.ideas = [];
//       state.caseStudies = [];
//       state.posts = [];
//       state.blogs = [];
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchSearchResults.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchSearchResults.fulfilled, (state, action) => {
//         state.loading = false;
//         state.query = action.payload.query;
//         state.totalResults = action.payload.totalResults;
        
//         // Postman response mapping
//         state.ideas = action.payload.data?.ideas || [];
//         state.caseStudies = action.payload.data?.caseStudies || [];
//         state.posts = action.payload.data?.posts || [];
//         state.blogs = action.payload.data?.blogs || [];
//       })
//       .addCase(fetchSearchResults.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || "Something went wrong";
//       });
//   },
// });

// export const { clearSearch } = searchSlice.actions;
// export default searchSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetUrl } from "@/api/apiMethods";

// Async Thunk for API call
export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async (query, { rejectWithValue }) => {
    try {
      const data = await GetUrl("api/search", { params: { q: query } });
      return data;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    loading: false,
    query: "",
    totalResults: 0,
    ideas: [],
    caseStudies: [],
    posts: [],
    blogs: [],
    error: null,
  },
  reducers: {
    clearSearch: (state) => {
      state.query = "";
      state.totalResults = 0;
      state.ideas = [];
      state.caseStudies = [];
      state.posts = [];
      state.blogs = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.query = action.payload.query;
        state.totalResults = action.payload.totalResults;
        state.ideas = action.payload.data?.ideas || [];
        state.caseStudies = action.payload.data?.caseStudies || [];
        state.posts = action.payload.data?.posts || [];
        state.blogs = action.payload.data?.blogs || [];
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { clearSearch } = searchSlice.actions;
export default searchSlice.reducer;