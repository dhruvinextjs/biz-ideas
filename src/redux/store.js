import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/slices/AuthSlice";
import cmsReducer from "@/redux/slices/CmsSlice";
import profileReducer from "@/redux/slices/ProfileSlice";
import testimonialReducer from "@/redux/slices/TestimonialSlice";
import privacyPolicyReducer from "@/redux/slices/PrivacyPoliceSlice";
import termsConditionReducer from "@/redux/slices/TermsConditionSlice";
import aboutReducer from "@/redux/slices/AboutSlice";
import contactReducer from "@/redux/slices/ContactSlice";
import searchReducer from "@/redux/slices/SearchSlice";
import blogReducer from "@/redux/slices/BlogSlice";
import serviceReducer from "@/redux/slices/ServiceSlice";
import caseStudiesReducer from "@/redux/slices/CasesudieSlice";
import startupIdeasReducer from "@/redux/slices/StartupideasSlices";
import appIdeasReducer from "@/redux/slices/AppideasSLice";
import businessIdeasReducer from "@/redux/slices/BusinessideasSlice";
import advertiseReducer from "@/redux/slices/AdvertiseSlice";
import postReducer from "@/redux/slices/PostSlice";
import bookmarkReducer from "@/redux/slices/BookMarkSlice";
import headerReducer from "@/redux/slices/HeaderSlice";
import settingReducer from "@/redux/slices/SettingSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    cms: cmsReducer,
    profile: profileReducer,
    testimonial: testimonialReducer,
    privacyPolicy: privacyPolicyReducer,
    termsCondition: termsConditionReducer,
    about: aboutReducer,
    contact: contactReducer,
    search: searchReducer,
    blog: blogReducer,
    service: serviceReducer,
    caseStudies: caseStudiesReducer,
    startupIdeas: startupIdeasReducer,
    appIdeas: appIdeasReducer,
    businessIdeas: businessIdeasReducer,
    advertise: advertiseReducer,
    posts: postReducer,
    bookmarks: bookmarkReducer,
    header: headerReducer,
    settings: settingReducer,
  },
});