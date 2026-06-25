// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Async Thunk to fetch blogs
// export const fetchBlogs = createAsyncThunk(
//   "blog/fetchBlogs",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get("http://192.168.29.108:5007/api/blogs");
//       return response.data; // Postman response direct return hoga
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// const blogSlice = createSlice({
//   name: "blog",
//   initialState: {
//     loading: false,
//     blogs: [],
//     count: 0,
//     total: 0,
//     totalPages: 1,
//     currentPage: 1,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchBlogs.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchBlogs.fulfilled, (state, action) => {
//         state.loading = false;
//         state.blogs = action.payload.data || [];
//         state.count = action.payload.count || 0;
//         state.total = action.payload.total || 0;
//         state.totalPages = action.payload.totalPages || 1;
//         state.currentPage = action.payload.currentPage || 1;
//       })
//       .addCase(fetchBlogs.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || "Failed to fetch blogs";
//       });
//   },
// });

// export default blogSlice.reducer;


// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Async Thunk to fetch all blogs
// export const fetchBlogs = createAsyncThunk(
//   "blog/fetchBlogs",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get("http://192.168.29.108:5007/api/blogs");
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// // --- NEW async thunk for single blog detail page ---
// export const fetchBlogById = createAsyncThunk(
//   "blog/fetchBlogById",
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`http://192.168.29.108:5007/api/blogs/${id}`);
//       return response.data; // Postman single blog response object
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// const blogSlice = createSlice({
//   name: "blog",
//   initialState: {
//     loading: false,
//     blogs: [],
//     currentBlog: null, // Single blog storage
//     count: 0,
//     total: 0,
//     totalPages: 1,
//     currentPage: 1,
//     error: null,
//   },
//   reducers: {
//     clearCurrentBlog: (state) => {
//       state.currentBlog = null;
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       // All blogs lifecycle
//       .addCase(fetchBlogs.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchBlogs.fulfilled, (state, action) => {
//         state.loading = false;
//         state.blogs = action.payload.data || [];
//         state.count = action.payload.count || 0;
//         state.total = action.payload.total || 0;
//         state.totalPages = action.payload.totalPages || 1;
//         state.currentPage = action.payload.currentPage || 1;
//       })
//       .addCase(fetchBlogs.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || "Failed to fetch blogs";
//       })
      
//       // --- Single blog detail lifecycle ---
//       .addCase(fetchBlogById.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchBlogById.fulfilled, (state, action) => {
//         state.loading = false;
//         state.currentBlog = action.payload.data || null;
//       })
//       .addCase(fetchBlogById.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || "Failed to fetch blog details";
//       });
//   },
// });

// export const { clearCurrentBlog } = blogSlice.actions;
// export default blogSlice.reducer;



// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchBlogs = createAsyncThunk(
//   "blog/fetchBlogs",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get("http://192.168.29.108:5007/api/blogs");
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

//   export const fetchBlogById = createAsyncThunk(
//   "blog/fetchBlogById",
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`http://192.168.29.108:5007/api/blogs/${id}`);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// const blogSlice = createSlice({
//   name: "blog",
//   initialState: {
//     loading: false,
//     blogs: [],
//     currentBlog: null,
//     count: 0,
//     total: 0,
//     totalPages: 1,
//     currentPage: 1,
//     error: null,
//   },
//   reducers: {
//     clearCurrentBlog: (state) => {  
//       state.currentBlog = null;
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchBlogs.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchBlogs.fulfilled, (state, action) => {
//         state.loading = false;
//         state.blogs = action.payload.data || [];
//         state.count = action.payload.count || 0;
//         state.total = action.payload.total || 0;
//         state.totalPages = action.payload.totalPages || 1;
//         state.currentPage = action.payload.currentPage || 1;
//       })
//       .addCase(fetchBlogs.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || "Failed to fetch blogs";
//       })
//       .addCase(fetchBlogById.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchBlogById.fulfilled, (state, action) => {
//         state.loading = false;
//         state.currentBlog = action.payload.data || null;
//       })
//       .addCase(fetchBlogById.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || "Failed to fetch blog details";
//       });
//   },
// });

// export const { clearCurrentBlog } = blogSlice.actions;
// export default blogSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetUrl, PostUrl } from "@/api/apiMethods";

// 1. Fetch All Blogs
export const fetchBlogs = createAsyncThunk(
  "blog/fetchBlogs",
  async (_, { rejectWithValue }) => {
    try {
      const data = await GetUrl("api/blogs");
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// 2. Fetch Single Blog By ID
export const fetchBlogById = createAsyncThunk(
  "blog/fetchBlogById",
  async (id, { rejectWithValue }) => {
    try {
      const data = await GetUrl(`api/blogs/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// ✅ 3. Toggle Like / Unlike Blog
export const toggleLikeBlog = createAsyncThunk(
  "blog/toggleLikeBlog",
  async (id, { rejectWithValue }) => {
    try {
      const data = await PostUrl(`api/blogs/${id}/like`, {});
      return data; // { success, liked, totalLikes }
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// ✅ 4. GET Comments
export const fetchComments = createAsyncThunk(
  "blog/fetchComments",
  async ({ itemId, itemType }, { rejectWithValue }) => {
    try {
      const data = await GetUrl(`api/comments?itemId=${itemId}&itemType=${itemType}`);
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// ✅ 5. POST Comment
export const postComment = createAsyncThunk(
  "blog/postComment",
  async (commentData, { rejectWithValue }) => {
    try {
      const data = await PostUrl("api/comments", commentData);
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// ✅ 6. POST Reply to a Comment
export const postReply = createAsyncThunk(
  "blog/postReply",
  async ({ commentId, text }, { rejectWithValue }) => {
    try {
      const data = await PostUrl(`api/comments/${commentId}/reply`, { text });
      return { commentId, ...data };
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    loading: false,
    blogs: [],
    currentBlog: null,
    count: 0,
    total: 0,
    totalPages: 1,
    currentPage: 1,
    error: null,

    // ✅ Like
    likeLoading: false,
    likeError: null,

    // ✅ Comments
    comments: [],
    commentsCount: 0,
    commentsLoading: false,
    commentsError: null,
    commentPosting: false,

    // ✅ Reply
    replyLoading: false,
    replyError: null,
  },
  reducers: {
    clearCurrentBlog: (state) => {
      state.currentBlog = null;
      state.comments = [];
      state.commentsCount = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload.data || [];
        state.count = action.payload.count || 0;
        state.total = action.payload.total || 0;
        state.totalPages = action.payload.totalPages || 1;
        state.currentPage = action.payload.currentPage || 1;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch blogs";
      })

      .addCase(fetchBlogById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentBlog = action.payload.data || null;
      })
      .addCase(fetchBlogById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch blog details";
      })

      // ✅ Toggle Like
      .addCase(toggleLikeBlog.pending, (state) => {
        state.likeLoading = true;
        state.likeError = null;
      })
      .addCase(toggleLikeBlog.fulfilled, (state, action) => {
        state.likeLoading = false;
        if (state.currentBlog) {
          state.currentBlog.isLiked = action.payload.liked;
          state.currentBlog.totalLikes = action.payload.totalLikes;
        }
      })
      .addCase(toggleLikeBlog.rejected, (state, action) => {
        state.likeLoading = false;
        state.likeError = action.payload;
      })

      // ✅ Fetch Comments
      .addCase(fetchComments.pending, (state) => {
        state.commentsLoading = true;
        state.commentsError = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.commentsLoading = false;
        state.comments = action.payload.data || [];
        state.commentsCount = action.payload.count || 0;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.commentsLoading = false;
        state.commentsError = action.payload || "Something went wrong";
      })

      // ✅ Post Comment
      .addCase(postComment.pending, (state) => {
        state.commentPosting = true;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.commentPosting = false;
        if (action.payload?.data) {
          state.comments.unshift(action.payload.data);
          state.commentsCount += 1;
        }
      })
      .addCase(postComment.rejected, (state) => {
        state.commentPosting = false;
      })

      // ✅ Post Reply
      .addCase(postReply.pending, (state) => {
        state.replyLoading = true;
        state.replyError = null;
      })
      .addCase(postReply.fulfilled, (state, action) => {
        state.replyLoading = false;
        const comment = state.comments.find((c) => c._id === action.payload.commentId);
        if (comment) {
          comment.repliesCount = action.payload.repliesCount;
        }
      })
      .addCase(postReply.rejected, (state, action) => {
        state.replyLoading = false;
        state.replyError = action.payload;
      });
  },
});

export const { clearCurrentBlog } = blogSlice.actions;
export default blogSlice.reducer;