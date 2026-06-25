import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetUrl, PostUrl } from "@/api/apiMethods";

// Async Thunk to fetch business ideas list
export const fetchBusinessIdeas = createAsyncThunk(
  "businessIdeas/fetchBusinessIdeas",
  async (_, { rejectWithValue }) => {
    try {
      const data = await GetUrl("api/ideas?type=business");
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// Async Thunk to fetch single idea details by ID
export const fetchIdeaById = createAsyncThunk(
  "businessIdeas/fetchIdeaById",
  async (id, { rejectWithValue }) => {
    try {
      const data = await GetUrl(`api/ideas/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// ✅ Async Thunk to fetch Captcha (uses BASE_URL via apiMethods, no axios)
export const fetchCaptcha = createAsyncThunk(
  "businessIdeas/fetchCaptcha",
  async (_, { rejectWithValue }) => {
    try {
      const data = await GetUrl("api/captcha");
      return data; // { success, captchaId, question }
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// ✅ Contact Form Submit API (uses BASE_URL via apiMethods, no axios)
export const submitContactForm = createAsyncThunk(
  "businessIdeas/submitContactForm",
  async (formData, { rejectWithValue }) => {
    try {
      const data = await PostUrl("api/contact", formData);
      return data; // { success, message, data }
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// ✅ GET Comments
export const fetchComments = createAsyncThunk(
  "businessIdeas/fetchComments",
  async ({ itemId, itemType }, { rejectWithValue }) => {
    try {
      const data = await GetUrl(`api/comments?itemId=${itemId}&itemType=${itemType}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// ✅ POST Comment
export const postComment = createAsyncThunk(
  "businessIdeas/postComment",
  async (commentData, { rejectWithValue }) => {
    try {
      const data = await PostUrl("api/comments", commentData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// ✅ POST Like / Unlike Idea (uses BASE_URL via apiMethods, no axios)
export const toggleLikeIdea = createAsyncThunk(
  "businessIdeas/toggleLikeIdea",
  async (id, { rejectWithValue }) => {
    try {
      const data = await PostUrl(`api/ideas/${id}/like`, {});
      return data; // { success, liked, totalLikes }
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// ✅ POST Reply to a Comment (uses BASE_URL via apiMethods, no axios)
export const postReply = createAsyncThunk(
  "businessIdeas/postReply",
  async ({ commentId, text }, { rejectWithValue }) => {
    try {
      const data = await PostUrl(`api/comments/${commentId}/reply`, { text });
      return { commentId, ...data }; // { commentId, success, message, repliesCount }
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// ✅ GET - Filtered Ideas
export const fetchFilteredIdeas = createAsyncThunk(
  "businessIdeas/fetchFilteredIdeas",
  async (filters, { rejectWithValue }) => {
    try {
      // Query string build karo
      const params = new URLSearchParams();
      params.append("type", "business");

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

const businessIdeasSlice = createSlice({
  name: "businessIdeas",
  initialState: {
    ideas: [],
    currentIdea: null,
    loading: false,
    error: null,
    totalCount: 0,

    captchaData: null,
    captchaLoading: false,
    captchaError: null,

    // Contact Form
    contactLoading: false,
    contactSuccess: false,
    contactError: null,

    comments: [],
    commentsCount: 0,
    commentsLoading: false,
    commentsError: null,
    commentPosting: false,

    likeLoading: false,
    likeError: null,

    replyLoading: false,
    replyError: null,

    filterLoading: false,
    filterError: null,
  },
  reducers: {
    resetContactStatus: (state) => {
      state.contactSuccess = false;
      state.contactError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch List
      .addCase(fetchBusinessIdeas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBusinessIdeas.fulfilled, (state, action) => {
        state.loading = false;
        state.ideas = action.payload.data;
        state.totalCount = action.payload.total || action.payload.count;
      })
      .addCase(fetchBusinessIdeas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch Single Idea By ID
      .addCase(fetchIdeaById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIdeaById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentIdea = action.payload.data;
      })
      .addCase(fetchIdeaById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch Captcha
      .addCase(fetchCaptcha.pending, (state) => {
        state.captchaLoading = true;
        state.captchaError = null;
      })
      .addCase(fetchCaptcha.fulfilled, (state, action) => {
        state.captchaLoading = false;
        state.captchaData = action.payload; // { success, captchaId, question }
      })
      .addCase(fetchCaptcha.rejected, (state, action) => {
        state.captchaLoading = false;
        state.captchaError = action.payload;
      })
      // Submit Contact Form
      .addCase(submitContactForm.pending, (state) => {
        state.contactLoading = true;
        state.contactSuccess = false;
        state.contactError = null;
      })
      .addCase(submitContactForm.fulfilled, (state, action) => {
        state.contactLoading = false;
        state.contactSuccess = true;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.contactLoading = false;
        state.contactError = action.payload;
      })
      // Fetch Comments
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
      .addCase(postComment.rejected, (state, action) => {
        state.commentPosting = false;
      })

      // Toggle Like
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

      // Post Reply
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

      // Fetch Filtered Ideas
      .addCase(fetchFilteredIdeas.pending, (state) => {
        state.filterLoading = true;
        state.filterError = null;
      })
      .addCase(fetchFilteredIdeas.fulfilled, (state, action) => {
        state.filterLoading = false;
        state.ideas = action.payload.data || [];
        state.totalCount = action.payload.total || action.payload.count || 0;
      })
      .addCase(fetchFilteredIdeas.rejected, (state, action) => {
        state.filterLoading = false;
        state.filterError = action.payload || "Something went wrong";
      })
  },
});

export const { resetContactStatus } = businessIdeasSlice.actions;
export default businessIdeasSlice.reducer;