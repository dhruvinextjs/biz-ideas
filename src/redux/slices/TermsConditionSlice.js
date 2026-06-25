// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // ================= GET TERMS & CONDITIONS =================
// export const getTermsCondition = createAsyncThunk(
//   "termsCondition/getTermsCondition",
//   async (_, thunkAPI) => {
//     try {
//       const response = await fetch("http://192.168.29.108:5007/api/terms-condition");
      
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

// const termsConditionSlice = createSlice({
//   name: "termsCondition",
//   initialState: {
//     termsData: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getTermsCondition.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getTermsCondition.fulfilled, (state, action) => {
//         state.loading = false;
//         // API response me object ke andar 'data' key ho toh check balance ho sake
//         state.termsData = action.payload?.data || action.payload;
//       })
//       .addCase(getTermsCondition.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default termsConditionSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetUrl } from "@/api/apiMethods";

// ================= GET TERMS & CONDITIONS =================
export const getTermsCondition = createAsyncThunk(
  "termsCondition/getTermsCondition",
  async (_, thunkAPI) => {
    try {
      const data = await GetUrl("api/terms-condition");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || error);
    }
  }
);

const termsConditionSlice = createSlice({
  name: "termsCondition",
  initialState: {
    termsData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTermsCondition.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTermsCondition.fulfilled, (state, action) => {
        state.loading = false;
        state.termsData = action.payload?.data || action.payload;
      })
      .addCase(getTermsCondition.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default termsConditionSlice.reducer;