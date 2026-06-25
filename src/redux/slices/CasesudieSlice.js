import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetUrl, PostUrl } from "@/api/apiMethods"; // ✅ axios hatao, GetUrl use karo

// 1. Fetch all case studies
export const fetchCaseStudies = createAsyncThunk(
  "caseStudies/fetchCaseStudies",
  async (_, { rejectWithValue }) => {
    try {
      const data = await GetUrl("api/case-studies");
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// 2. Fetch single case study by ID
export const fetchCaseStudyById = createAsyncThunk(
  "caseStudies/fetchCaseStudyById",
  async (id, { rejectWithValue }) => {
    try {
      const data = await GetUrl(`api/case-studies/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// ✅ 3. Fetch filtered case studies
export const fetchFilteredCaseStudies = createAsyncThunk(
  "caseStudies/fetchFilteredCaseStudies",
  async (filters, { rejectWithValue }) => {
    try {
      const params = new URLSearchParams();

      if (filters.industry) params.append("industry", filters.industry);
      if (filters.teamSize) params.append("teamSize", filters.teamSize);
      if (filters.profitMargin) params.append("profitMargin", filters.profitMargin);
      if (filters.investment) params.append("investment", filters.investment);
      if (filters.sortBy) params.append("sortBy", filters.sortBy);

      const data = await GetUrl(`api/case-studies?${params.toString()}`);
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);
export const fetchCaptcha = createAsyncThunk(
  "caseStudies/fetchCaptcha",
  async (_, { rejectWithValue }) => {
    try {
      const data = await GetUrl("api/captcha");
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

export const submitContactForm = createAsyncThunk(
  "caseStudies/submitContactForm",
  async (formData, { rejectWithValue }) => {
    try {
      const data = await PostUrl("api/contact", formData);
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

export const toggleBookmark = createAsyncThunk(
  "caseStudies/toggleBookmark",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await PostUrl("api/bookmarks", payload);
      return data;
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

export const toggleLike = createAsyncThunk(
  "caseStudies/toggleLike",
  async (id, { rejectWithValue }) => {
    try {
      const data = await PostUrl(`api/case-studies/${id}/upvote`, {});
      return data; // { success, upvotes, upvoted }
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

const caseStudiesSlice = createSlice({
  name: "caseStudies",
  initialState: {
    loading: false,
    caseStudies: [],
    currentCaseStudy: null,
    count: 0,
    total: 0,
    totalPages: 1,
    error: null,
    filterLoading: false,
    filterError: null,
    captchaData: null,
    captchaLoading: false,
    formSubmitting: false,
    bookmarkLoading: false,
    likeLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCaseStudies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCaseStudies.fulfilled, (state, action) => {
        state.loading = false;
        state.caseStudies = action.payload.data || [];
        state.count = action.payload.count || 0;
        state.total = action.payload.total || 0;
        state.totalPages = action.payload.totalPages || 1;
      })
      .addCase(fetchCaseStudies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch case studies";
      })

      .addCase(fetchCaseStudyById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.currentCaseStudy = null;
      })
      .addCase(fetchCaseStudyById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCaseStudy = action.payload.data || null;
      })
      .addCase(fetchCaseStudyById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch case study details";
      })

      // ✅ Filtered Case Studies
      .addCase(fetchFilteredCaseStudies.pending, (state) => {
        state.filterLoading = true;
        state.filterError = null;
      })
      .addCase(fetchFilteredCaseStudies.fulfilled, (state, action) => {
        state.filterLoading = false;
        state.caseStudies = action.payload.data || [];
        state.count = action.payload.count || 0;
        state.total = action.payload.total || 0;
        state.totalPages = action.payload.totalPages || 1;
      })
      .addCase(fetchFilteredCaseStudies.rejected, (state, action) => {
        state.filterLoading = false;
        state.filterError = action.payload || "Something went wrong";
      })
      .addCase(fetchCaptcha.pending, (state) => { state.captchaLoading = true; })
      .addCase(fetchCaptcha.fulfilled, (state, action) => {
        state.captchaLoading = false;
        state.captchaData = action.payload;
      })
      .addCase(fetchCaptcha.rejected, (state) => { state.captchaLoading = false; })

      .addCase(submitContactForm.pending, (state) => { state.formSubmitting = true; })
      .addCase(submitContactForm.fulfilled, (state) => { state.formSubmitting = false; })
      .addCase(submitContactForm.rejected, (state) => { state.formSubmitting = false; })

      .addCase(toggleBookmark.pending, (state) => { state.bookmarkLoading = true; })
      .addCase(toggleBookmark.fulfilled, (state) => { state.bookmarkLoading = false; })
      .addCase(toggleBookmark.rejected, (state) => { state.bookmarkLoading = false; })

      .addCase(toggleLike.pending, (state) => { state.likeLoading = true; })
.addCase(toggleLike.fulfilled, (state, action) => {
  state.likeLoading = false;
  if (state.currentCaseStudy) {
    state.currentCaseStudy.upvotes = action.payload.upvotes;
    state.currentCaseStudy.upvoted = action.payload.upvoted;
  }
})
.addCase(toggleLike.rejected, (state) => { state.likeLoading = false; })
  },
});

export default caseStudiesSlice.reducer;