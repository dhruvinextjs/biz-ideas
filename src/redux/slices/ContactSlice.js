// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // ================= GET CAPTCHA =================
// export const getCaptchaData = createAsyncThunk(
//   "contact/getCaptchaData",
//   async (_, thunkAPI) => {
//     try {
//       const response = await fetch("http://192.168.29.108:5007/api/captcha", {
//         cache: "no-store", // Live dynamic values fetch karne ke liye caching bypass
//       });
      
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
      
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message || error);
//     }
//   }
// );

// const contactSlice = createSlice({
//   name: "contact",
//   initialState: {
//     captchaData: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getCaptchaData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getCaptchaData.fulfilled, (state, action) => {
//         state.loading = false;
//           state.captchaData = action.payload?.data || action.payload;
//       })
//       .addCase(getCaptchaData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default contactSlice.reducer;


// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const BASE_URL = "http://192.168.29.108:5007";

// // GET CAPTCHA
// export const getCaptchaData = createAsyncThunk(
//   "contact/getCaptchaData",
//   async (_, thunkAPI) => {
//     try {
//       const response = await fetch(
//         `${BASE_URL}/api/captcha`
//       );

//       const data = await response.json();

//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.message
//       );
//     }
//   }
// );

// // CONTACT FORM
// export const submitContactForm = createAsyncThunk(
//   "contact/submitContactForm",
//   async (payload, thunkAPI) => {
//     try {
//       const response = await fetch(
//         `${BASE_URL}/api/contact`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(payload),
//         }
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           data.message || "Failed to submit form"
//         );
//       }

//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.message
//       );
//     }
//   }
// );

// const contactSlice = createSlice({
//   name: "contact",

//   initialState: {
//     captchaData: null,
//     loading: false,
//     submitLoading: false,
//     submitSuccess: false,
//     responseData: null,
//     error: null,
//   },

//   reducers: {
//     resetSubmitState: (state) => {
//       state.submitSuccess = false;
//       state.responseData = null;
//       state.error = null;
//     },
//   },

//   extraReducers: (builder) => {
//     builder

//       .addCase(getCaptchaData.pending, (state) => {
//         state.loading = true;
//       })

//       .addCase(
//         getCaptchaData.fulfilled,
//         (state, action) => {
//           state.loading = false;
//           state.captchaData = action.payload;
//         }
//       )

//       .addCase(
//         getCaptchaData.rejected,
//         (state, action) => {
//           state.loading = false;
//           state.error = action.payload;
//         }
//       )

//       .addCase(
//         submitContactForm.pending,
//         (state) => {
//           state.submitLoading = true;
//           state.submitSuccess = false;
//         }
//       )

//       .addCase(
//         submitContactForm.fulfilled,
//         (state, action) => {
//           state.submitLoading = false;
//           state.submitSuccess = true;
//           state.responseData = action.payload;
//         }
//       )

//       .addCase(
//         submitContactForm.rejected,
//         (state, action) => {
//           state.submitLoading = false;
//           state.submitSuccess = false;
//           state.error = action.payload;
//         }
//       );
//   },
// });

// export const { resetSubmitState } =
//   contactSlice.actions;

// export default contactSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetUrl, PostUrl } from "@/api/apiMethods";

// GET CAPTCHA
export const getCaptchaData = createAsyncThunk(
  "contact/getCaptchaData",
  async (_, thunkAPI) => {
    try {
      const data = await GetUrl("api/captcha");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || error);
    }
  }
);

// CONTACT FORM
export const submitContactForm = createAsyncThunk(
  "contact/submitContactForm",
  async (payload, thunkAPI) => {
    try {
      const data = await PostUrl("api/contact", payload);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || error);
    }
  }
);

const contactSlice = createSlice({
  name: "contact",

  initialState: {
    captchaData: null,
    loading: false,
    submitLoading: false,
    submitSuccess: false,
    responseData: null,
    error: null,
  },

  reducers: {
    resetSubmitState: (state) => {
      state.submitSuccess = false;
      state.responseData = null;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCaptchaData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCaptchaData.fulfilled, (state, action) => {
        state.loading = false;
        state.captchaData = action.payload;
      })
      .addCase(getCaptchaData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(submitContactForm.pending, (state) => {
        state.submitLoading = true;
        state.submitSuccess = false;
      })
      .addCase(submitContactForm.fulfilled, (state, action) => {
        state.submitLoading = false;
        state.submitSuccess = true;
        state.responseData = action.payload;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.submitLoading = false;
        state.submitSuccess = false;
        state.error = action.payload;
      });
  },
});

export const { resetSubmitState } = contactSlice.actions;
export default contactSlice.reducer;