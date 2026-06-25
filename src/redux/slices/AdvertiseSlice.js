// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Async Thunk for POST method (Newsletter subscription)
// export const subscribeNewsletter = createAsyncThunk(
//   "advertise/subscribeNewsletter",
//   async (email, { rejectWithValue }) => {
//     try {
//       const response = await axios.post("http://192.168.29.108:5007/api/newsletter/subscribe", {
//         email: email,
//       });
//       return response.data; // Response data returned (success & message)
//     } catch (error) {
//       return rejectWithValue(
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message
//       );
//     }
//   }
// );

// const advertiseSlice = createSlice({
//   name: "advertise",
//   initialState: {
//     loading: false,
//     success: false,
//     error: null,
//     message: "",
//   },
//   reducers: {
//     resetSubscriptionState: (state) => {
//       state.loading = false;
//       state.success = false;
//       state.error = null;
//       state.message = "";
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(subscribeNewsletter.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.success = false;
//       })
//       .addCase(subscribeNewsletter.fulfilled, (state, action) => {
//         state.loading = false;
//         state.success = action.payload.success;
//         state.message = action.payload.message;
//       })
//       .addCase(subscribeNewsletter.rejected, (state, action) => {
//         state.loading = false;
//         state.success = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { resetSubscriptionState } = advertiseSlice.actions;
// export default advertiseSlice.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PostUrl } from "@/api/apiMethods";

// Async Thunk for POST method (Newsletter subscription)
export const subscribeNewsletter = createAsyncThunk(
  "advertise/subscribeNewsletter",
  async (email, { rejectWithValue }) => {
    try {
      const data = await PostUrl("api/newsletter/subscribe", { email });
      return data; // Response data returned (success & message)
    } catch (error) {
      return rejectWithValue(error?.message || error);
    }
  }
);

const advertiseSlice = createSlice({
  name: "advertise",
  initialState: {
    loading: false,
    success: false,
    error: null,
    message: "",
  },
  reducers: {
    resetSubscriptionState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(subscribeNewsletter.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(subscribeNewsletter.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.success;
        state.message = action.payload.message;
      })
      .addCase(subscribeNewsletter.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { resetSubscriptionState } = advertiseSlice.actions;
export default advertiseSlice.reducer;