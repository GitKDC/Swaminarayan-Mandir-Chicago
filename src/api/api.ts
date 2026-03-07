import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_FRONTEND,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: request/response interceptors (useful for auth/logging)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error?.response?.data || error.message);
    return Promise.reject(error);
  }
);