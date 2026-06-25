import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetUrl, PostUrl } from "@/api/apiMethods";

// 1. Fetch All Startup Ideas
export const fetchStartupIdeas = createAsyncThunk(
  "startupIdeas/fetchStartupIdeas",
  async (_, { rejectWithValue }) => {
    try {
      const data = await GetUrl("api/ideas?type=startup");
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// 2. Fetch Single Startup Idea By ID
export const fetchStartupIdeaById = createAsyncThunk(
  "startupIdeas/fetchStartupIdeaById",
  async (id, { rejectWithValue }) => {
    try {
      const data = await GetUrl(`api/ideas/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// 3. Fetch Captcha
export const fetchCaptcha = createAsyncThunk(
  "startupIdeas/fetchCaptcha",
  async (_, { rejectWithValue }) => {
    try {
      const data = await GetUrl("api/captcha");
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// 4. Submit Contact Form
export const submitContactForm = createAsyncThunk(
  "startupIdeas/submitContactForm",
  async (formData, { rejectWithValue }) => {
    try {
      const data = await PostUrl("api/contact", formData);
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// ✅ 5. Toggle Like / Unlike Startup Idea
export const toggleLikeIdea = createAsyncThunk(
  "startupIdeas/toggleLikeIdea",
  async (id, { rejectWithValue }) => {
    try {
      const data = await PostUrl(`api/ideas/${id}/like`, {});
      return data; // { success, liked, totalLikes }
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// ✅ 6. GET Comments
export const fetchComments = createAsyncThunk(
  "startupIdeas/fetchComments",
  async ({ itemId, itemType }, { rejectWithValue }) => {
    try {
      const data = await GetUrl(`api/comments?itemId=${itemId}&itemType=${itemType}`);
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// ✅ 7. POST Comment
export const postComment = createAsyncThunk(
  "startupIdeas/postComment",
  async (commentData, { rejectWithValue }) => {
    try {
      const data = await PostUrl("api/comments", commentData);
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// ✅ 8. POST Reply to a Comment
export const postReply = createAsyncThunk(
  "startupIdeas/postReply",
  async ({ commentId, text }, { rejectWithValue }) => {
    try {
      const data = await PostUrl(`api/comments/${commentId}/reply`, { text });
      return { commentId, ...data };
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// ✅ GET - Filtered Startup Ideas
export const fetchFilteredStartupIdeas = createAsyncThunk(
  "startupIdeas/fetchFilteredStartupIdeas",
  async (filters, { rejectWithValue }) => {
    try {
      const params = new URLSearchParams();
      params.append("type", "startup");

      if (filters.investment) params.append("investment", filters.investment);
      if (filters.industry) params.append("category", filters.industry);
      if (filters.teamSize) params.append("teamSize", filters.teamSize);
      if (filters.profitMargin) params.append("profitMargin", filters.profitMargin);

      const data = await GetUrl(`api/ideas?${params.toString()}`);
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

const startupIdeasSlice = createSlice({
  name: "startupIdeas",
  initialState: {
    ideas: [],
    currentIdea: null,
    captchaData: null,
    captchaLoading: false,
    loading: false,
    formSubmitting: false,
    error: null,
    totalCount: 0,

    // ✅ Comments
    comments: [],
    commentsCount: 0,
    commentsLoading: false,
    commentsError: null,
    commentPosting: false,

    // ✅ Like
    likeLoading: false,
    likeError: null,

    // ✅ Reply
    replyLoading: false,
    replyError: null,

    filterLoading: false,
    filterError: null,
  },
  reducers: {
    clearCurrentIdea: (state) => {
      state.currentIdea = null;
      state.comments = [];
      state.commentsCount = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStartupIdeas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStartupIdeas.fulfilled, (state, action) => {
        state.loading = false;
        state.ideas = action.payload.data;
        state.totalCount = action.payload.total || action.payload.count;
      })
      .addCase(fetchStartupIdeas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchStartupIdeaById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStartupIdeaById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentIdea = action.payload.data;
      })
      .addCase(fetchStartupIdeaById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchCaptcha.fulfilled, (state, action) => {
        state.captchaData = action.payload;
      })

      .addCase(submitContactForm.pending, (state) => {
        state.formSubmitting = true;
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.formSubmitting = false;
      })
      .addCase(submitContactForm.rejected, (state) => {
        state.formSubmitting = false;
      })

      // ✅ Toggle Like
      .addCase(toggleLikeIdea.pending, (state) => {
        state.likeLoading = true;
        state.likeError = null;
      })
      .addCase(toggleLikeIdea.fulfilled, (state, action) => {
        state.likeLoading = false;
        if (state.currentIdea) {
          state.currentIdea.isLiked = action.payload.liked;
          state.currentIdea.totalLikes = action.payload.totalLikes;
        }
      })
      .addCase(toggleLikeIdea.rejected, (state, action) => {
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
      })

      // Fetch Filtered Startup Ideas
      .addCase(fetchFilteredStartupIdeas.pending, (state) => {
        state.filterLoading = true;
        state.filterError = null;
      })
      .addCase(fetchFilteredStartupIdeas.fulfilled, (state, action) => {
        state.filterLoading = false;
        state.ideas = action.payload.data || [];
        state.totalCount = action.payload.total || action.payload.count || 0;
      })
      .addCase(fetchFilteredStartupIdeas.rejected, (state, action) => {
        state.filterLoading = false;
        state.filterError = action.payload || "Something went wrong";
      })
  },
});

export const { clearCurrentIdea } = startupIdeasSlice.actions;
export default startupIdeasSlice.reducer;