import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/AuthSlice";
import cmsReducer from "../redux/slices/CmsSlice";
import profileReducer from "../redux/slices/ProfileSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cms: cmsReducer,
    profile:profileReducer
  },
});