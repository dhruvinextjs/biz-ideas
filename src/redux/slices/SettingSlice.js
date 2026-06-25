import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetUrl, PutUrl } from "@/api/apiMethods";

// ✅ GET - Fetch current notification settings
export const getNotificationSettings = createAsyncThunk(
  "settings/getNotificationSettings",
  async (_, { rejectWithValue }) => {
    try {
      const data = await GetUrl("api/notification-settings");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// ✅ PUT - Update notification settings
export const updateNotificationSettings = createAsyncThunk(
  "settings/updateNotificationSettings",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await PutUrl("api/notification-settings", payload);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const settingSlice = createSlice({
  name: "settings",
  initialState: {
    notificationSettings: {
      newBusinessIdeas: false,
      marketingEmails: false,
    },
    loading: false,
    updateLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET notification settings
      .addCase(getNotificationSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNotificationSettings.fulfilled, (state, action) => {
        state.loading = false;
        state.notificationSettings = action.payload?.data || {
          newBusinessIdeas: false,
          marketingEmails: false,
        };
      })
      .addCase(getNotificationSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })

      // PUT update notification settings
      .addCase(updateNotificationSettings.pending, (state) => {
        state.updateLoading = true;
        state.error = null;
      })
      .addCase(updateNotificationSettings.fulfilled, (state, action) => {
        state.updateLoading = false;
        state.notificationSettings = action.payload?.data || state.notificationSettings;
      })
      .addCase(updateNotificationSettings.rejected, (state, action) => {
        state.updateLoading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default settingSlice.reducer;