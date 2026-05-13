// src/redux/slices/AuthSlice.js

import { PostUrl } from "@/api/apiMethods";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const checkUsername = createAsyncThunk(
  "auth/checkUsername",
  async (data, thunkAPI) => {
    try {
      const response = await PostUrl("/api/auth/check-username", data);

      // ✅ Local storage yaha bhi kar sakte ho (optional)
      localStorage.setItem("token", response.token);
      localStorage.setItem("userId", response.user.id);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

// GET STAGES API
// =========================
export const getStages = createAsyncThunk(
  "auth/getStages",

  async (_, { rejectWithValue }) => {
    try {
      const response = await PostUrl("/api/auth/signup/stages");

      return response.data;
    } catch (error) {
      console.log("STAGES API ERROR :", error?.response);

      return rejectWithValue(
        error?.response?.data || {
          message: "Failed to fetch stages",
        },
      );
    }
  },
);

export const saveStage = createAsyncThunk(
  "auth/saveStage",
  async (data, thunkAPI) => {
    try {
      console.log("PAYLOAD SENT:", data);

      const response = await PostUrl("/api/auth/signup/save-stage", data);

      return response;
    } catch (error) {
      console.log("ERROR RESPONSE:", error?.response?.data); // 👈 IMPORTANT
      return thunkAPI.rejectWithValue(error);
    }
  },
);

// ================= GET CODING LEVELS =================

export const getCodingLevels = createAsyncThunk(
  "auth/getCodingLevels",
  async (_, thunkAPI) => {
    try {
      const response = await PostUrl("/api/auth/signup/coding-levels");

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

// ================= SAVE CODING LEVEL =================

export const saveCodingLevel = createAsyncThunk(
  "auth/saveCodingLevel",
  async (data, thunkAPI) => {
    try {
      const response = await PostUrl(
        "/api/auth/signup/save-coding-level",
        data,
      );

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getBusinessInterests = createAsyncThunk(
  "auth/getBusinessInterests",
  async (_, thunkAPI) => {
    try {
      const response = await PostUrl("/api/auth/signup/business-interests");

      return response?.data || response; // 👈 safe return
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data || error);
    }
  },
);

export const saveBusinessInterests = createAsyncThunk(
  "auth/saveBusinessInterests",
  async (data, thunkAPI) => {
    try {
      console.log("PAYLOAD SENT (INTERESTS):", data);

      const response = await PostUrl(
        "/api/auth/signup/save-business-interests",
        data,
      );

      return response;
    } catch (error) {
      console.log("ERROR RESPONSE:", error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const saveProfile = createAsyncThunk(
  "auth/saveProfile",
  async (data, thunkAPI) => {
    try {
      console.log("PAYLOAD SENT (PROFILE):", data);

      const response = await PostUrl("/api/auth/signup/save-profile", data);

      return response;
    } catch (error) {
      console.log("PROFILE ERROR:", error?.response?.data);
      return thunkAPI.rejectWithValue(error?.response?.data || error);
    }
  },
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data, thunkAPI) => {
    try {
      const response = await PostUrl("/api/auth/register", data);

      return response;
    } catch (error) {
      console.log("REGISTER ERROR:", error?.response?.data);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  },
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, thunkAPI) => {
    try {
      const response = await PostUrl("/api/auth/login", data);

      // ✅ token store
      localStorage.setItem("token", response.token);
      localStorage.setItem("userId", response.user?.id);

      return response;
    } catch (error) {
      console.log("LOGIN ERROR:", error?.response?.data);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    codingLevels: [],
    stages: [],
    businessInterests: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(getCodingLevels.pending, (state) => {
        state.loading = true;
      })

      .addCase(getCodingLevels.fulfilled, (state, action) => {
        state.loading = false;
        state.codingLevels = action.payload;
      })

      .addCase(getCodingLevels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getStages.pending, (state) => {
        state.loading = true;
      })

      .addCase(getStages.fulfilled, (state, action) => {
        state.loading = false;

        // 👇 API DATA STORE
        state.stages = action.payload || [];
        console.log("STAGES RESPONSE:", action.payload);
      })

      .addCase(getStages.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;

        toast.error(action?.payload?.message || "Failed to fetch stages");
      })
      .addCase(saveStage.pending, (state) => {
        state.loading = true;
      })

      .addCase(saveStage.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(saveStage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getBusinessInterests.fulfilled, (state, action) => {
        state.businessInterests = action.payload;
      })

      .addCase(saveBusinessInterests.pending, (state) => {
        state.loading = true;
      })

      .addCase(saveBusinessInterests.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(saveBusinessInterests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(saveProfile.pending, (state) => {
        state.loading = true;
      })

      .addCase(saveProfile.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(saveProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
      })

      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
  state.loading = true;
})
.addCase(loginUser.fulfilled, (state, action) => {
  state.loading = false;
})
.addCase(loginUser.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload;
})
  },
});

export default authSlice.reducer;
