// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // ================= GET PRIVACY POLICY =================
// export const getPrivacyPolicy = createAsyncThunk(
//   "privacyPolicy/getPrivacyPolicy",
//   async (_, thunkAPI) => {
//     try {
//       const response = await fetch("http://192.168.29.108:5007/api/privacy-policy");
      
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

// const privacyPolicySlice = createSlice({
//   name: "privacyPolicy",
//   initialState: {
//     policyData: null, // Single object ya list array, isko backend dynamic format me handle karenge
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getPrivacyPolicy.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getPrivacyPolicy.fulfilled, (state, action) => {
//         state.loading = false;
//         // Postman structure ke jaisa action.payload.data ya fir direct payload check
//         state.policyData = action.payload?.data || action.payload;
//       })
//       .addCase(getPrivacyPolicy.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default privacyPolicySlice.reducer;


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetUrl } from "@/api/apiMethods";

// ================= GET PRIVACY POLICY =================
export const getPrivacyPolicy = createAsyncThunk(
  "privacyPolicy/getPrivacyPolicy",
  async (_, thunkAPI) => {
    try {
      const data = await GetUrl("api/privacy-policy");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || error);
    }
  }
);

const privacyPolicySlice = createSlice({
  name: "privacyPolicy",
  initialState: {
    policyData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPrivacyPolicy.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPrivacyPolicy.fulfilled, (state, action) => {
        state.loading = false;
        state.policyData = action.payload?.data || action.payload;
      })
      .addCase(getPrivacyPolicy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default privacyPolicySlice.reducer;