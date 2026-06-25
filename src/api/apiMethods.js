// src/redux/api/apiMethods.js

import axios from "axios";
import { BASE_URL } from "./apiConfig";

const API = axios.create({
  baseURL: BASE_URL,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ================= GET =================
export const GetUrl = async (endpoint, config = {}) => {
  try {
    const response = await API.get(endpoint, config); 
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// ================= POST =================
export const PostUrl = async (endpoint, data, config = {}) => {
  try {
    const response = await API.post(endpoint, data, config);
    return response.data;
  } catch (error) {     
    throw error.response?.data || error.message;
  }
};

// ================= PUT =================
export const PutUrl = async (endpoint, data, config = {}) => {
  try {
    const response = await API.put(endpoint, data, config);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// ================= DELETE =================
export const DeleteUrl = async (endpoint, config = {}) => {
  try {
    const response = await API.delete(endpoint, config);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};