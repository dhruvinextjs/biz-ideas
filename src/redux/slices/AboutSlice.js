// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // ================= GET ABOUT DATA =================
// export const getAboutData = createAsyncThunk(
//   "about/getAboutData",
//   async (_, thunkAPI) => {
//     try {
//       const response = await fetch("http://192.168.29.108:5007/api/about");
      
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

// const aboutSlice = createSlice({
//   name: "about",
//   initialState: {
//     aboutData: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getAboutData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getAboutData.fulfilled, (state, action) => {
//         state.loading = false;
//         // Postman schema ke mutabik 'action.payload.data' se direct object extract hoga
//         state.aboutData = action.payload?.data || action.payload;
//       })
//       .addCase(getAboutData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default aboutSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetUrl } from "@/api/apiMethods";

// ================= GET ABOUT DATA =================
export const getAboutData = createAsyncThunk(
  "about/getAboutData",
  async (_, thunkAPI) => {
    try {
      const data = await GetUrl("api/about");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message || error);
    }
  }
);

const aboutSlice = createSlice({
  name: "about",
  initialState: {
    aboutData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAboutData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAboutData.fulfilled, (state, action) => {
        state.loading = false;
        // Postman schema ke mutabik 'action.payload.data' se direct object extract hoga
        state.aboutData = action.payload?.data || action.payload;
      })
      .addCase(getAboutData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default aboutSlice.reducer;