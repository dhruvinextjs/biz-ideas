// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // ================= GET TESTIMONIALS (Local API) =================
// export const getTestimonials = createAsyncThunk(
//   "testimonial/getTestimonials",
//   async (_, thunkAPI) => {
//     try {
//       // Seedha local URL use kiya hai fetch ke saath
//       const response = await fetch("http://192.168.29.108:5007/api/testimonials");
      
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

// const testimonialSlice = createSlice({
//   name: "testimonial",
//   initialState: {
//     testimonials: [],
//     loading: false,
//     error: null,
//   },

//   reducers: {},

//   extraReducers: (builder) => {
//     builder
//       .addCase(getTestimonials.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getTestimonials.fulfilled, (state, action) => {
//         state.loading = false;
//         // Agar aapki API data response direct array bhejti hai toh action.payload, 
//         // agar object ke andar 'data' key me bhejti hai toh action.payload.data use hoga.
//         state.testimonials = action.payload?.data || action.payload || [];
//       })
//       .addCase(getTestimonials.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default testimonialSlice.reducer;


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetUrl } from "@/api/apiMethods";

// ================= GET TESTIMONIALS =================
export const getTestimonials = createAsyncThunk(
  "testimonial/getTestimonials",
  async (_, thunkAPI) => {
    try {
      const data = await GetUrl("api/testimonials");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || error);
    }
  }
);

const testimonialSlice = createSlice({
  name: "testimonial",
  initialState: {
    testimonials: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTestimonials.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTestimonials.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonials = action.payload?.data || action.payload || [];
      })
      .addCase(getTestimonials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default testimonialSlice.reducer;