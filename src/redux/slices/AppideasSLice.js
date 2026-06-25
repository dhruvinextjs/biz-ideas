import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetUrl, PostUrl } from "@/api/apiMethods";

// 1. Fetch All App Ideas
export const fetchAppIdeas = createAsyncThunk(
  "appIdeas/fetchAppIdeas",
  async (_, { rejectWithValue }) => {
    try {
      const data = await GetUrl("api/ideas?type=app");
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// 2. Fetch Single App Idea By ID
export const fetchAppIdeaById = createAsyncThunk(
  "appIdeas/fetchAppIdeaById",
  async (id, { rejectWithValue }) => {
    try {
      const data = await GetUrl(`api/ideas/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// 3. Fetch Dynamic Captcha
export const fetchCaptcha = createAsyncThunk(
  "appIdeas/fetchCaptcha",
  async (_, { rejectWithValue }) => {
    try {
      const data = await GetUrl("api/captcha");
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// 4. Submit Contact Form via POST
export const submitContactForm = createAsyncThunk(
  "appIdeas/submitContactForm",
  async (formData, { rejectWithValue }) => {
    try {
      const data = await PostUrl("api/contact", formData);
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// 5. Toggle Like / Unlike App Idea
export const toggleLikeIdea = createAsyncThunk(
  "appIdeas/toggleLikeIdea",
  async (id, { rejectWithValue }) => {
    try {
      const data = await PostUrl(`api/ideas/${id}/like`, {});
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// 6. GET Comments
export const fetchComments = createAsyncThunk(
  "appIdeas/fetchComments",
  async ({ itemId, itemType }, { rejectWithValue }) => {
    try {
      const data = await GetUrl(`api/comments?itemId=${itemId}&itemType=${itemType}`);
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// 7. POST Comment
export const postComment = createAsyncThunk(
  "appIdeas/postComment",
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
  "appIdeas/postReply",
  async ({ commentId, text }, { rejectWithValue }) => {
    try {
      const data = await PostUrl(`api/comments/${commentId}/reply`, { text });
      return { commentId, ...data }; // { commentId, success, message, repliesCount }
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// ✅ GET - Filtered App Ideas
export const fetchFilteredAppIdeas = createAsyncThunk(
  "appIdeas/fetchFilteredAppIdeas",
  async (filters, { rejectWithValue }) => {
    try {
      const params = new URLSearchParams();
      params.append("type", "app");

      if (filters.investment) params.append("investment", filters.investment);
      if (filters.category) params.append("category", filters.category);
      if (filters.platform) params.append("platform", filters.platform);
      if (filters.monetization) params.append("monetization", filters.monetization);

      const data = await GetUrl(`api/ideas?${params.toString()}`);
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

const appIdeasSlice = createSlice({
  name: "appIdeas",
  initialState: {
    ideas: [],
    currentIdea: null,
    captchaData: null,
    loading: false,
    singleLoading: true,
    captchaLoading: false,
    formSubmitting: false,
    formSuccessMessage: null,
    formErrorMessage: null,
    error: null,
    totalCount: 0,

    comments: [],
    commentsCount: 0,
    commentsLoading: false,
    commentsError: null,
    commentPosting: false,

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
      state.singleLoading = true;
      state.captchaData = null;
      state.formSuccessMessage = null;
      state.formErrorMessage = null;
      state.comments = [];
      state.commentsCount = 0;
    },
    clearFormStatus: (state) => {
      state.formSuccessMessage = null;
      state.formErrorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppIdeas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAppIdeas.fulfilled, (state, action) => {
        state.loading = false;
        state.ideas = action.payload.data;
        state.totalCount = action.payload.total || action.payload.count;
      })
      .addCase(fetchAppIdeas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchAppIdeaById.pending, (state) => {
        state.singleLoading = true;
        state.error = null;
      })
      .addCase(fetchAppIdeaById.fulfilled, (state, action) => {
        state.singleLoading = false;
        state.currentIdea = action.payload.data;
      })
      .addCase(fetchAppIdeaById.rejected, (state, action) => {
        state.singleLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchCaptcha.pending, (state) => {
        state.captchaLoading = true;
      })
      .addCase(fetchCaptcha.fulfilled, (state, action) => {
        state.captchaLoading = false;
        state.captchaData = action.payload;
      })
      .addCase(fetchCaptcha.rejected, (state) => {
        state.captchaLoading = false;
      })

      .addCase(submitContactForm.pending, (state) => {
        state.formSubmitting = true;
        state.formSuccessMessage = null;
        state.formErrorMessage = null;
      })
      .addCase(submitContactForm.fulfilled, (state, action) => {
        state.formSubmitting = false;
        state.formSuccessMessage = action.payload.message || "Form submitted successfully!";
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.formSubmitting = false;
        state.formErrorMessage = action.payload || "Something went wrong.";
      })

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

      // Fetch Filtered App Ideas
.addCase(fetchFilteredAppIdeas.pending, (state) => {
  state.filterLoading = true;
  state.filterError = null;
})
.addCase(fetchFilteredAppIdeas.fulfilled, (state, action) => {
  state.filterLoading = false;
  state.ideas = action.payload.data || [];
  state.totalCount = action.payload.total || action.payload.count || 0;
})
.addCase(fetchFilteredAppIdeas.rejected, (state, action) => {
  state.filterLoading = false;
  state.filterError = action.payload || "Something went wrong";
})
  },
});

export const { clearCurrentIdea, clearFormStatus } = appIdeasSlice.actions;
export default appIdeasSlice.reducer;