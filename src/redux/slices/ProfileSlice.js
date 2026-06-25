// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { GetUrl } from "@/api/apiMethods";

// // ✅ GET SOCIAL LINKS API
// export const getSocialLinks = createAsyncThunk(
//   "profile/getSocialLinks",
//   async (_, thunkAPI) => {
//     try {
//       const res = await GetUrl("/api/auth/get-social-links");
//       return res;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err);
//     }
//   }
// );

// export const getUserProfile = createAsyncThunk(
//   "profile/getUserProfile",
//   async (_, thunkAPI) => {
//     try {
//       const res = await GetUrl("/api/auth/me");
//       return res;
//     } catch (err) {
//       // Agar 401 aaye to logout kar sakte ho
//       if (err.response?.status === 401) {
//         // logout action dispatch karo
//       }
//       return thunkAPI.rejectWithValue(err.response?.data || err.message);
//     }
//   }
// );
// const profileSlice = createSlice({
//   name: "profile",
//   initialState: {
//     user: null,
//     socialLinks: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getSocialLinks.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(getSocialLinks.fulfilled, (state, action) => {
//         state.loading = false;

//         console.log("SOCIAL API:", action.payload);

//         // ⚠️ important: response structure check karo
//         state.socialLinks = action.payload?.data || [];
//       })
//       .addCase(getSocialLinks.rejected, (state, action) => {
//         state.loading = false;  
//         state.error = action.payload;
//       })

//       // Get Profile
//       .addCase(getUserProfile.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(getUserProfile.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload?.user || action.payload?.data?.user || null;
//       })
//       .addCase(getUserProfile.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//   },
// });

// export default profileSlice.reducer;


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetUrl, DeleteUrl } from "@/api/apiMethods";

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

// ✅ GET USER PROFILE API
export const getUserProfile = createAsyncThunk(
  "profile/getUserProfile",
  async (_, thunkAPI) => {
    try {
      const res = await GetUrl("/api/auth/me");
      return res;
    } catch (err) {
      if (err.response?.status === 401) {
        // logout action dispatch karo
      }
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

// ✅ NEW: GET USER RECENT POSTS API (Using base URL instance via GetUrl wrapper)
export const getUserPosts = createAsyncThunk(
  "profile/getUserPosts",
  async (_, thunkAPI) => {
    try {
      const res = await GetUrl("api/posts"); // Automaticaly appends to BASE_URL without local address
      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

// ✅ DELETE POST API
export const deletePost = createAsyncThunk(
  "profile/deletePost",
  async (postId, thunkAPI) => {
    try {
      const res = await DeleteUrl(`api/posts/${postId}`);
      return { ...res, postId }; // postId bhi return karo state update ke liye
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    user: null,
    socialLinks: [],
    posts: [], // Added array layer to structure payload posts
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
        state.socialLinks = action.payload?.data || [];
      })
      .addCase(getSocialLinks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get Profile
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload?.user || action.payload?.data?.user || null;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ New: Get Recent Posts Reducers
      .addCase(getUserPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload?.data || []; // Maps response parameter array array layout safely
      })
      .addCase(getUserPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // ✅ Delete Post Reducers
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        // ✅ State se directly remove karo — re-fetch ki zarurat nahi
        state.posts = state.posts.filter(
          (post) => post._id !== action.payload.postId
        );
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default profileSlice.reducer;