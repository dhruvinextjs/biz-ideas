// // src/redux/slices/postSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { PostUrl } from "@/api/apiMethods";

// // Async thunk for creating a new post
// export const createPost = createAsyncThunk(
//   "posts/createPost",
//   async (postData, { rejectWithValue }) => {
//     try {
//       const data = await PostUrl("api/posts", postData);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// const postSlice = createSlice({
//   name: "posts",
//   initialState: {
//     loading: false,
//     success: false,
//     error: null,
//     postData: null,
//   },
//   reducers: {
//     resetPostState: (state) => {
//       state.loading = false;
//       state.success = false;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(createPost.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.success = false;
//       })
//       .addCase(createPost.fulfilled, (state, action) => {
//         state.loading = false;
//         state.success = true;
//         state.postData = action.payload.data;
//       })
//       .addCase(createPost.rejected, (state, action) => {
//         state.loading = false;
//         state.success = false;
//         state.error = action.payload || "Something went wrong";
//       });
//   },
// });

// export const { resetPostState } = postSlice.actions;
// export default postSlice.reducer;


// src/redux/slices/postSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { PostUrl, GetUrl } from "@/api/apiMethods"; // Added GetUrl import

// // Async thunk for creating a new post
// export const createPost = createAsyncThunk(
//   "posts/createPost",
//   async (postData, { rejectWithValue }) => {
//     try {
//       const data = await PostUrl("api/posts", postData);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// // ✅ NEW: Async thunk for fetching a single post detail by ID
// export const getPostDetail = createAsyncThunk(
//   "posts/getPostDetail",
//   async (postId, { rejectWithValue }) => {
//     try {
//       const data = await GetUrl(`api/posts/${postId}`);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// const postSlice = createSlice({
//   name: "posts",
//   initialState: {
//     loading: false,
//     success: false,
//     error: null,
//     postData: null,
//     currentPost: null, // ✅ New parameter mapping for single post state block
//   },
//   reducers: {
//     resetPostState: (state) => {
//       state.loading = false;
//       state.success = false;
//       state.error = null;
//       state.currentPost = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(createPost.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.success = false;
//       })
//       .addCase(createPost.fulfilled, (state, action) => {
//         state.loading = false;
//         state.success = true;
//         state.postData = action.payload.data;
//       })
//       .addCase(createPost.rejected, (state, action) => {
//         state.loading = false;
//         state.success = false;
//         state.error = action.payload || "Something went wrong";
//       })

//       // ✅ New: Get Dynamic Post Detail Reducers
//       .addCase(getPostDetail.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getPostDetail.fulfilled, (state, action) => {
//         state.loading = false;
//         state.currentPost = action.payload.data; // Response data mapping safely
//       })
//       .addCase(getPostDetail.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { resetPostState } = postSlice.actions;
// export default postSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { PostUrl, GetUrl } from "@/api/apiMethods";

// // Async thunk for creating a new post
// export const createPost = createAsyncThunk(
//   "posts/createPost",
//   async (postData, { rejectWithValue }) => {
//     try {
//       const data = await PostUrl("api/posts", postData);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// // Async thunk for fetching a single post detail by ID
// export const getPostDetail = createAsyncThunk(
//   "posts/getPostDetail",
//   async (postId, { rejectWithValue }) => {
//     try {
//       const data = await GetUrl(`api/posts/${postId}`);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// // ✅ NEW: Async thunk for upvoting/liking a post (POST Method)
// export const upvotePost = createAsyncThunk(
//   "posts/upvotePost",
//   async (postId, { rejectWithValue }) => {
//     try {
//       // Endpoint formats dynamically: api/posts/:id/upvote
//       const data = await PostUrl(`api/posts/${postId}/upvote`, {});
//       return data; // Expected response with updated post layout data
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// const postSlice = createSlice({
//   name: "posts",
//   initialState: {
//     loading: false,
//     success: false,
//     error: null,
//     postData: null,
//     currentPost: null,
//   },
//   reducers: {
//     resetPostState: (state) => {
//       state.loading = false;
//       state.success = false;
//       state.error = null;
//       state.currentPost = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(createPost.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.success = false;
//       })
//       .addCase(createPost.fulfilled, (state, action) => {
//         state.loading = false;
//         state.success = true;
//         state.postData = action.payload.data;
//       })
//       .addCase(createPost.rejected, (state, action) => {
//         state.loading = false;
//         state.success = false;
//         state.error = action.payload || "Something went wrong";
//       })

//       // Get Dynamic Post Detail Reducers
//       .addCase(getPostDetail.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getPostDetail.fulfilled, (state, action) => {
//         state.loading = false;
//         state.currentPost = action.payload.data;
//       })
//       .addCase(getPostDetail.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // ✅ New: Upvote / Like Action Lifecycle handling 
//       .addCase(upvotePost.fulfilled, (state, action) => {
//         // Agar response me pura updated post data back mil raha hai:
//         if (action.payload?.data) {
//           state.currentPost = action.payload.data;
//         } else if (state.currentPost) {
//           // Fallback mechanism to safely increment count locally if response returns generic success
//           state.currentPost.upvotes = (state.currentPost.upvotes || 0) + 1;
//         }
//       });
//   },
// });

// export const { resetPostState } = postSlice.actions;
// export default postSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { PostUrl, GetUrl } from "@/api/apiMethods";

// // Async thunk for creating a new post
// export const createPost = createAsyncThunk(
//   "posts/createPost",
//   async (postData, { rejectWithValue }) => {
//     try {
//       const data = await PostUrl("api/posts", postData);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// // Async thunk for fetching a single post detail by ID
// export const getPostDetail = createAsyncThunk(
//   "posts/getPostDetail",
//   async (postId, { rejectWithValue }) => {
//     try {
//       const data = await GetUrl(`api/posts/${postId}`);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// // Async thunk for upvoting/liking a post (POST Method)
// export const upvotePost = createAsyncThunk(
//   "posts/upvotePost",
//   async (postId, { rejectWithValue }) => {
//     try {
//       const data = await PostUrl(`api/posts/${postId}/upvote`, {});
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// // ✅ NEW: Async thunk for creating a new comment (POST Method)
// export const createComment = createAsyncThunk(
//   "posts/createComment",
//   async (commentData, { rejectWithValue }) => {
//     try {
//       // Endpoint target format: api/comments
//       const data = await PostUrl("api/comments", commentData);
//       return data; // Returns newly generated comment node object
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// const postSlice = createSlice({
//   name: "posts",
//   initialState: {
//     loading: false,
//     commentLoading: false, // Added comment operation status flag
//     success: false,
//     error: null,
//     postData: null,
//     currentPost: null,
//   },
//   reducers: {
//     resetPostState: (state) => {
//       state.loading = false;
//       state.commentLoading = false;
//       state.success = false;
//       state.error = null;
//       state.currentPost = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(createPost.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.success = false;
//       })
//       .addCase(createPost.fulfilled, (state, action) => {
//         state.loading = false;
//         state.success = true;
//         state.postData = action.payload.data;
//       })
//       .addCase(createPost.rejected, (state, action) => {
//         state.loading = false;
//         state.success = false;
//         state.error = action.payload || "Something went wrong";
//       })

//       // Get Dynamic Post Detail Reducers
//       .addCase(getPostDetail.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getPostDetail.fulfilled, (state, action) => {
//         state.loading = false;
//         state.currentPost = action.payload.data;
//       })
//       .addCase(getPostDetail.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // Upvote / Like Action Lifecycle handling 
//       .addCase(upvotePost.fulfilled, (state, action) => {
//         if (action.payload?.data) {
//           state.currentPost = action.payload.data;
//         } else if (state.currentPost) {
//           state.currentPost.upvotes = (state.currentPost.upvotes || 0) + 1;
//         }
//       })

//       // ✅ New: Create Comment Lifecycle Handling
//       .addCase(createComment.pending, (state) => {
//         state.commentLoading = true;
//       })
//       .addCase(createComment.fulfilled, (state, action) => {
//         state.commentLoading = false;
//         // Injecting new comment seamlessly into current UI list tree
//         if (state.currentPost && action.payload?.data) {
//           if (!state.currentPost.comments) {
//             state.currentPost.comments = [];
//           }
//           state.currentPost.comments.push(action.payload.data);
//           state.currentPost.commentCount = (state.currentPost.commentCount || 0) + 1;
//         }
//       })
//       .addCase(createComment.rejected, (state, action) => {
//         state.commentLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { resetPostState } = postSlice.actions;
// export default postSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PostUrl, GetUrl } from "@/api/apiMethods";

// Async thunk for creating a new post
export const createPost = createAsyncThunk(
  "posts/createPost",
  async (postData, { rejectWithValue }) => {
    try {
      const data = await PostUrl("api/posts", postData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Async thunk for fetching a single post detail by ID
export const getPostDetail = createAsyncThunk(
  "posts/getPostDetail",
  async (postId, { rejectWithValue }) => {
    try {
      const data = await GetUrl(`api/posts/${postId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Async thunk for upvoting/liking a post (POST Method)
export const upvotePost = createAsyncThunk(
  "posts/upvotePost",
  async (postId, { rejectWithValue }) => {
    try {
      const data = await PostUrl(`api/posts/${postId}/upvote`, {});
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Async thunk for creating a new comment (POST Method)
export const createComment = createAsyncThunk(
  "posts/createComment",
  async (commentData, { rejectWithValue }) => {
    try {
      const data = await PostUrl("api/comments", commentData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ✅ NEW: Async thunk for fetching comments list by itemId & itemType (GET Method)
export const getPostComments = createAsyncThunk(
  "posts/getPostComments",
  async ({ itemId, itemType }, { rejectWithValue }) => {
    try {
      // API Format: api/comments?itemId=...&itemType=...
      const data = await GetUrl(`api/comments?itemId=${itemId}&itemType=${itemType}`);
      return data; // Returns array list inside response wrapper
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Async thunk for bookmarking a post (POST Method)
export const bookmarkPost = createAsyncThunk(
  "posts/bookmarkPost",
  async (postId, { rejectWithValue }) => {
    try {
      const data = await PostUrl("api/bookmarks", {
        itemId: postId,
        itemType: "post",
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState: {
    loading: false,
    commentLoading: false,
    bookmarkLoading: false,
    success: false,
    error: null,
    postData: null,
    currentPost: null,
  },
  reducers: {
    resetPostState: (state) => {
      state.loading = false;
      state.commentLoading = false;
      state.success = false;
      state.error = null;
      state.currentPost = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.postData = action.payload.data;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || "Something went wrong";
      })

      // Get Dynamic Post Detail Reducers
      .addCase(getPostDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPostDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.currentPost = action.payload.data;
      })
      .addCase(getPostDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Upvote / Like Action Lifecycle handling 
      .addCase(upvotePost.fulfilled, (state, action) => {
        if (action.payload?.data) {
          state.currentPost = action.payload.data;
        } else if (state.currentPost) {
          state.currentPost.upvotes = (state.currentPost.upvotes || 0) + 1;
        }
      })

      // Create Comment Lifecycle Handling
      .addCase(createComment.pending, (state) => {
        state.commentLoading = true;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.commentLoading = false;
        if (state.currentPost && action.payload?.data) {
          if (!state.currentPost.comments) {
            state.currentPost.comments = [];
          }
          // Frontend dynamic insertion optimization
          state.currentPost.comments.unshift(action.payload.data);
          state.currentPost.commentCount = (state.currentPost.commentCount || 0) + 1;
        }
      })
      .addCase(createComment.rejected, (state, action) => {
        state.commentLoading = false;
        state.error = action.payload;
      })

      // ✅ New: Get Comments Action Reducer binding
      .addCase(getPostComments.fulfilled, (state, action) => {
        if (state.currentPost && action.payload?.data) {
          state.currentPost.comments = action.payload.data;
          state.currentPost.commentCount = action.payload.count || action.payload.data.length;
        }
      })

      // Bookmark Action Lifecycle
      .addCase(bookmarkPost.pending, (state) => {
        state.bookmarkLoading = true;
      })
      .addCase(bookmarkPost.fulfilled, (state) => {
        state.bookmarkLoading = false;
      })
      .addCase(bookmarkPost.rejected, (state, action) => {
        state.bookmarkLoading = false;
        state.error = action.payload;
      })
  },
});

export const { resetPostState } = postSlice.actions;
export default postSlice.reducer;