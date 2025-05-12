import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_MOVIE_BASE_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
});

export const assistantApi = axios.create({
  baseURL: import.meta.env.VITE_ASSISTANT_BASE_URL,
});
