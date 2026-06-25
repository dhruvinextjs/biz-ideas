// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Async Thunk to fetch all services
// export const fetchServices = createAsyncThunk(
//   "service/fetchServices",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get("http://192.168.29.108:5007/api/services");
//       return response.data; // Response array data: { success: true, count: X, data: [...] }
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// const serviceSlice = createSlice({
//   name: "service",
//   initialState: {
//     loading: false,
//     services: [],
//     count: 0,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchServices.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchServices.fulfilled, (state, action) => {
//         state.loading = false;
//         state.services = action.payload.data || [];
//         state.count = action.payload.count || 0;
//       })
//       .addCase(fetchServices.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || "Failed to fetch services";
//       });
//   },
// });

// export default serviceSlice.reducer;


// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Async Thunk to fetch all services
// export const fetchServices = createAsyncThunk(
//   "service/fetchServices",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get("http://192.168.29.108:5007/api/services");
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// // --- NAYA ADD KIYA: Fetch single service details by ID ---
// export const fetchServiceById = createAsyncThunk(
//   "service/fetchServiceById",
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`http://192.168.29.108:5007/api/services/${id}`);
//       return response.data; // Yeh { success: true, data: {...} } bhejega
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// const serviceSlice = createSlice({
//   name: "service",
//   initialState: {
//     loading: false,
//     services: [],
//     count: 0,
//     currentService: null, 
//     detailLoading: false, 
//     error: null,
//   },
//   reducers: {
//     clearCurrentService: (state) => {
//       state.currentService = null;
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchServices.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchServices.fulfilled, (state, action) => {
//         state.loading = false;      
//         state.services = action.payload.data || [];
//         state.count = action.payload.count || 0;
//       })
//       .addCase(fetchServices.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || "Failed to fetch services";
//       })
      
//       // --- NAYA ADD KIYA: Single service extraReducers ---
//       .addCase(fetchServiceById.pending, (state) => {
//         state.detailLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchServiceById.fulfilled, (state, action) => {
//         state.detailLoading = false;
//         state.currentService = action.payload.data || null;
//       })
//       .addCase(fetchServiceById.rejected, (state, action) => {
//         state.detailLoading = false;
//         state.error = action.payload || "Failed to fetch service details";
//       });
//   },
// });

// export const { clearCurrentService } = serviceSlice.actions;
// export default serviceSlice.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetUrl } from "@/api/apiMethods";

// Async Thunk to fetch all services
export const fetchServices = createAsyncThunk(
  "service/fetchServices",
  async (_, { rejectWithValue }) => {
    try {
      const data = await GetUrl("api/services");
      return data;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  }
);

// Fetch single service details by ID
export const fetchServiceById = createAsyncThunk(
  "service/fetchServiceById",
  async (id, { rejectWithValue }) => {
    try {
      const data = await GetUrl(`api/services/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  }
);

const serviceSlice = createSlice({
  name: "service",
  initialState: {
    loading: false,
    services: [],
    count: 0,
    currentService: null,
    detailLoading: false,
    error: null,
  },
  reducers: {
    clearCurrentService: (state) => {
      state.currentService = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.services = action.payload.data || [];
        state.count = action.payload.count || 0;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch services";
      })

      .addCase(fetchServiceById.pending, (state) => {
        state.detailLoading = true;
        state.error = null;
      })
      .addCase(fetchServiceById.fulfilled, (state, action) => {
        state.detailLoading = false;
        state.currentService = action.payload.data || null;
      })
      .addCase(fetchServiceById.rejected, (state, action) => {
        state.detailLoading = false;
        state.error = action.payload || "Failed to fetch service details";
      });
  },
});

export const { clearCurrentService } = serviceSlice.actions;
export default serviceSlice.reducer;